
CREATE TABLE t_p27200777_internet_earning_sit.subscriptions (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE t_p27200777_internet_earning_sit.users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE t_p27200777_internet_earning_sit.comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES t_p27200777_internet_earning_sit.users(id),
    page VARCHAR(100) NOT NULL,
    author_name VARCHAR(255),
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE t_p27200777_internet_earning_sit.link_clicks (
    id SERIAL PRIMARY KEY,
    service VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    clicked_at TIMESTAMP DEFAULT NOW()
);
