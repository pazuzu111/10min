
DROP TABLE IF EXISTS bot1;

CREATE TABLE IF NOT EXISTS bot1(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  message TEXT
);


CREATE TABLE IF NOT EXISTS bot2(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  message TEXT
);
