
CREATE TABLE adopter_info(
  adopter_id FOREIGN PRIMARY KEY,
  adopter_age INT NOT NULL,
  firt_name VARCHAR(20),
  last_name VARCHAR(20),
  email VARCHAR(40)
);

CREATE TABLE adopters(
  adopters_id SERIAL PRIMARY KEY,
  adopter_info INT NOT NULL REFERENCES adopter_info(adopter_id),
  pet_id INT NOT NULL REFERENCES pet(pet_id)
);

CREATE TABLE pet(
  pet_id FOREIGN PRIMARY KEY,
  pet_name VARCHAR(30),
  price INT NOT NULL,
  vaccinated BOOL
);


CREATE TABLE species(
  species_id SERIAL PRIMARY KEY,
  species_name VARCHAR(30),
  pet_id INT NOT NULL REFERENCES pet(pet_id)
);