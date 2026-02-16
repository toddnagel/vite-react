import express, { Request, Response } from 'express';
import cors from 'cors';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();
const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT) : 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware (must be before routes)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Express error middleware:', err);
  if (!res.headersSent) {
    res.status(500).json({
      error: 'Internal server error',
      details: err?.message || String(err),
      stack: process.env.NODE_ENV === 'development' ? err?.stack : undefined
    });
  }
});

// Convert Express request/response to Vercel format
function vercelToExpress(vercelHandler: (req: VercelRequest, res: VercelResponse) => Promise<void>) {
  return async (req: Request, res: Response) => {
    // Create Vercel-compatible request object
    const vercelReq = {
      method: req.method,
      url: req.url,
      headers: req.headers as Record<string, string | string[] | undefined>,
      query: req.query as Record<string, string | string[] | undefined>,
      body: req.body,
    } as VercelRequest;

    // Create Vercel-compatible response object
    const vercelRes = {
      status: (code: number) => {
        res.status(code);
        return vercelRes;
      },
      json: (data: any) => {
        res.json(data);
        return vercelRes;
      },
      send: (data: any) => {
        res.send(data);
        return vercelRes;
      },
      setHeader: (name: string, value: string) => {
        res.setHeader(name, value);
        return vercelRes;
      },
    } as VercelResponse;

    try {
      await vercelHandler(vercelReq, vercelRes);
    } catch (error: any) {
      console.error('Handler error:', error);
      console.error('Handler error stack:', error?.stack);
      if (!res.headersSent) {
        res.status(500).json({ 
          error: 'Internal server error', 
          details: error?.message || String(error),
          stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
        });
      }
    }
  };
}

// Dynamically import handlers
async function setupRoutes() {
  try {
    console.log('Loading API handlers...');
    const profileModule = await import('./api/user/profile.ts');
    const syncModule = await import('./api/user/sync.ts');

    console.log('Profile handler loaded:', typeof profileModule.default);
    console.log('Sync handler loaded:', typeof syncModule.default);

    // API Routes
    app.all('/api/user/profile', vercelToExpress(profileModule.default));
    app.all('/api/user/sync', vercelToExpress(syncModule.default));
    
    console.log('Routes registered successfully');
  } catch (importError: any) {
    console.error('Failed to import handlers:', importError);
    console.error('Import error stack:', importError?.stack);
    throw importError;
  }
}

// Setup routes and start server
setupRoutes().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`🚀 API server running on http://localhost:${PORT}`);
    console.log(`📡 API routes:`);
    console.log(`   - GET/PUT http://localhost:${PORT}/api/user/profile`);
    console.log(`   - POST http://localhost:${PORT}/api/user/sync`);
  });

  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} is already in use.`);
      console.error(`   Please stop the process using port ${PORT} or set API_PORT environment variable to use a different port.`);
      console.error(`   Example: API_PORT=3001 npm run dev:api`);
      process.exit(1);
    } else {
      console.error('Server error:', error);
      process.exit(1);
    }
  });
}).catch((error) => {
  console.error('Failed to setup routes:', error);
  console.error('Error details:', error);
  process.exit(1);
});
