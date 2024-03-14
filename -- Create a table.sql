-- Create a table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- Insert records into the table
INSERT INTO users (id, name, age) VALUES (1, 'John', 30);
INSERT INTO users (id, name, age) VALUES (2, 'Jane', 25);

-- Update a record
UPDATE users SET age = 35 WHERE name = 'John';

-- Delete a record
DELETE FROM users WHERE name = 'Jane';

-- Query data from the table
SELECT * FROM users;
