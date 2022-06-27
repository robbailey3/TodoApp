-- Creation of product table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    title varchar(255) NOT NULL,
    PRIMARY KEY (id)
);