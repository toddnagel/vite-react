-- Wallet routines migration (LOCAL / Docker MySQL)
-- Safe to run multiple times.

-- Ensure user_wallets exists
CREATE TABLE IF NOT EXISTS user_wallets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  wallet_address VARCHAR(255) NOT NULL,
  wallet_type VARCHAR(50) NOT NULL,
  is_connected BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_user_wallet (user_id, wallet_address),
  INDEX idx_user_id (user_id),
  INDEX idx_wallet_address (wallet_address),
  INDEX idx_is_connected (is_connected),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Ensure user_profiles has connected_wallet_id
SET @db_name := DATABASE();

SET @has_connected_wallet_id := (
  SELECT COUNT(*)
  FROM information_schema.columns
  WHERE table_schema = @db_name
    AND table_name = 'user_profiles'
    AND column_name = 'connected_wallet_id'
);

SET @sql_add_column := IF(
  @has_connected_wallet_id = 0,
  'ALTER TABLE user_profiles ADD COLUMN connected_wallet_id INT NULL AFTER wallet_type',
  'SELECT "connected_wallet_id already exists"'
);
PREPARE stmt_add_column FROM @sql_add_column;
EXECUTE stmt_add_column;
DEALLOCATE PREPARE stmt_add_column;

-- Ensure index exists for connected_wallet_id
SET @has_connected_wallet_idx := (
  SELECT COUNT(*)
  FROM information_schema.statistics
  WHERE table_schema = @db_name
    AND table_name = 'user_profiles'
    AND index_name = 'idx_connected_wallet_id'
);

SET @sql_add_index := IF(
  @has_connected_wallet_idx = 0,
  'ALTER TABLE user_profiles ADD INDEX idx_connected_wallet_id (connected_wallet_id)',
  'SELECT "idx_connected_wallet_id already exists"'
);
PREPARE stmt_add_index FROM @sql_add_index;
EXECUTE stmt_add_index;
DEALLOCATE PREPARE stmt_add_index;
