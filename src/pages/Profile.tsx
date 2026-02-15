import { useAuth0 } from '@auth0/auth0-react';
import PageTitle from '../components/PageTitle';
import FadeInUp from '../components/FadeInUp';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
          color: 'white',
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <PageTitle title="User Profile" animate={true} />
              <FadeInUp as="h2" delay={100}>
                Welcome back, {user.name || user.email}!
              </FadeInUp>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <FadeInUp delay={200}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '32px',
                  marginTop: '32px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name || 'User'}
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '4px solid rgba(255, 255, 255, 0.2)',
                      }}
                    />
                  )}

                  <div
                    style={{
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    <h3 style={{ marginBottom: '8px', color: 'white' }}>
                      {user.name || 'User'}
                    </h3>
                    {user.email && (
                      <p
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          marginBottom: '16px',
                        }}
                      >
                        {user.email}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      width: '100%',
                      padding: '24px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '8px',
                    }}
                  >
                    <h4
                      style={{
                        color: 'white',
                        marginBottom: '16px',
                        fontSize: '18px',
                      }}
                    >
                      User Information
                    </h4>
                    <pre
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '14px',
                        overflow: 'auto',
                        margin: 0,
                      }}
                    >
                      {JSON.stringify(user, null, 2)}
                    </pre>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      padding: '24px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '8px',
                      marginTop: '16px',
                    }}
                  >
                    <h4
                      style={{
                        color: 'white',
                        marginBottom: '16px',
                        fontSize: '18px',
                      }}
                    >
                      Coming Soon
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Wallet connection and other features will be available here
                      soon.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
