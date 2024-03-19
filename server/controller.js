require("dotenv").config();
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const { Sequelize, DataTypes } = require('sequelize');

// Create the connection string
const connection_string = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Initialize a new Sequelize instance
const sequelize = new Sequelize(connection_string);

// Define the seed function
const seed = () => {
    const cities = [
        { name: 'City Name 1', rating: 5, country_id: 1 },
        { name: 'City Name 2', rating: 4, country_id: 2 },
        { name: 'City Name 3', rating: 3, country_id: 3 },
    ];

    cities.forEach(city => {
        sequelize.query(`
            INSERT INTO cities (name, rating, country_id) 
            VALUES (:name, :rating, :country_id)
        `, {
            replacements: city,
            type: sequelize.QueryTypes.INSERT,
        }).catch(error => {
            console.error('Error seeding city:', error);
        });
    });
};

// Call the seed function
seed();

module.exports = {
seed: (req, res) => {
    sequelize.query(`
                    
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS countries;


create table countries (
    country_id serial primary key, 
    name varchar
);

CREATE TABLE cities (
city_id serial PRIMARY KEY,
name varchar(255),
rating integer,
country_id integer REFERENCES countries(country_id)
);


                                                        insert into countries (name)
                                                        values ('Afghanistan'),
                                                        ('Albania'),
                                                        ('Algeria'),
                                                        ('Andorra'),
                                                        ('Angola'),
                                                        ('Antigua and Barbuda'),
                                                        ('Argentina'),
                                                        ('Armenia'),
                                                        ('Australia'),
                                                        ('Austria'),
                                                        ('Azerbaijan'),
                                                        ('Bahamas'),
                                                        ('Bahrain'),
                                                        ('Bangladesh'),
                                                        ('Barbados'),
                                                        ('Belarus'),
                                                        ('Belgium'),
                                                        ('Belize'),
                                                        ('Benin'),
                                                        ('Bhutan'),
                                                        ('Bolivia'),
                                                        ('Bosnia and Herzegovina'),
                                                        ('Botswana'),
                                                        ('Brazil'),
                                                        ('Brunei'),
                                                        ('Bulgaria'),
                                                        ('Burkina Faso'),
                                                        ('Burundi'),
                                                        ('Côte d''Ivoire'),
                                                        ('Cabo Verde'),
                                                        ('Cambodia'),
                                                        ('Cameroon'),
                                                        ('Canada'),
                                                        ('Central African Republic'),
                                                        ('Chad'),
                                                        ('Chile'),
                                                        ('China'),
                                                        ('Colombia'),
                                                        ('Comoros'),
                                                        ('Congo'),
                                                        ('Costa Rica'),
                                                        ('Croatia'),
                                                        ('Cuba'),
                                                        ('Cyprus'),
                                                        ('Czech Republic'),
                                                        ('Democratic Republic of the Congo'),
                                                        ('Denmark'),
                                                        ('Djibouti'),
                                                        ('Dominica'),
                                                        ('Dominican Republic'),
                                                        ('Ecuador'),
                                                        ('Egypt'),
                                                        ('El Salvador'),
                                                        ('Equatorial Guinea'),
                                                        ('Eritrea'),
                                                        ('Estonia'),
                                                        ('Eswatini'),
                                                        ('Ethiopia'),
                                                        ('Fiji'),
                                                        ('Finland'),
                                                        ('France'),
                                                        ('Gabon'),
                                                        ('Gambia'),
                                                        ('Georgia'),
                                                        ('Germany'),
                                                        ('Ghana'),
                                                        ('Greece'),
                                                        ('Grenada'),
                                                        ('Guatemala'),
                                                        ('Guinea'),
                                                        ('Guinea-Bissau'),
                                                        ('Guyana'),
                                                        ('Haiti'),
                                                        ('Holy See'),
                                                        ('Honduras'),
                                                        ('Hungary'),
                                                        ('Iceland'),
                                                        ('India'),
                                                        ('Indonesia'),
                                                        ('Iran'),
                                                        ('Iraq'),
                                                        ('Ireland'),
                                                        ('Israel'),
                                                        ('Italy'),
                                                        ('Jamaica'),
                                                        ('Japan'),
                                                        ('Jordan'),
                                                        ('Kazakhstan'),
                                                        ('Kenya'),
                                                        ('Kiribati'),
                                                        ('Kuwait'),
                                                        ('Kyrgyzstan'),
                                                        ('Laos'),
                                                        ('Latvia'),
                                                        ('Lebanon'),
                                                        ('Lesotho'),
                                                        ('Liberia'),
                                                        ('Libya'),
                                                        ('Liechtenstein'),
                                                        ('Lithuania'),
                                                        ('Luxembourg'),
                                                        ('Madagascar'),
                                                        ('Malawi'),
                                                        ('Malaysia'),
                                                        ('Maldives'),
                                                        ('Mali'),
                                                        ('Malta'),
                                                        ('Marshall Islands'),
                                                        ('Mauritania'),
                                                        ('Mauritius'),
                                                        ('Mexico'),
                                                        ('Micronesia'),
                                                        ('Moldova'),
                                                        ('Monaco'),
                                                                                ('Mongolia'),
                                                                                ('Montenegro'),
                                                                                ('Morocco'),
                                                                                ('Mozambique'),
                                                                                ('Myanmar'),
                                                                                ('Namibia'),
                                                                                ('Nauru'),
                                                                                ('Nepal'),
                                                                                ('Netherlands'),
                                                                                ('New Zealand'),
                                                                                ('Nicaragua'),
                                                                                ('Niger'),
                                                                                ('Nigeria'),
                                                                                ('North Korea'),
                                                                                ('North Macedonia'),
                                                                                ('Norway'),
                                                                                ('Oman'),
                                                                                ('Pakistan'),
                                                                                ('Palau'),
                                                                                ('Palestine State'),
                                                                                ('Panama'),
                                                                                                                                                                ('Papua New Guinea'),
                                                                                                                                                                ('Paraguay'),
                                                                                                                                                                ('Peru'),
                                                                                                                                                                ('Philippines'),
                                                                                                                                                                ('Poland'),
                                                                                                                                                                ('Portugal'),
                                                                                                                                                                ('Qatar'),
                                                                                                                                                                ('Romania'),
                                                                                                                                                                ('Russia'),
                                                                                                                                                                ('Rwanda'),
                                                                                                                                                                ('Saint Kitts and Nevis'),
                                                                                                                                                                ('Saint Lucia'),
                                                                                                                                                                ('Saint Vincent and the Grenadines'),
                                                                                                                                                                ('Samoa'),
                                                                                                                                                                ('San Marino'),
                                                                                                                                                                ('Sao Tome and Principe'),
                                                                                                                                                                ('Saudi Arabia'),
                                                                                                                                                                ('Senegal'),
                                                                                                                                                                ('Serbia'),
                                                                                                                                                                ('Seychelles'),
                                                                                                                                                                ('Sierra Leone'),
                                                                                                                                                                ('Singapore'),
                                                                                                                                                                ('Slovakia'),
                                                                                                                                                                ('Slovenia'),
                                                                                                                                                                ('Solomon Islands'),
                                                                                                                                                                ('Somalia'),
                                                                                                                                                                ('South Africa'),
                                                                                                                                                                ('South Korea'),
                                                                                                                                                                ('South Sudan'),
                                                                                                                                                                ('Spain'),
                                                                                                                                                                ('Sri Lanka'),
                                                                                                                                                                ('Sudan'),
                                                                                                                                                                ('Suriname'),
                                                                                                                                                                ('Sweden'),
                                                                                                                                                                ('Switzerland'),
                                                                                                                                                                ('Syria'),
                                                                                                                                                                ('Tajikistan'),
                                                                                                                                                                ('Tanzania'),
                                                                                                                                                                ('Thailand'),
                                                                                                                                                                ('Timor-Leste'),
                                                                                                                                                                ('Togo'),
                                                                                                                                                                ('Tonga'),
                                                                                                                                                                ('Trinidad and Tobago'),
                                                                                                                                                                ('Tunisia'),
                                                                                                                                                                ('Turkey'),
                                                                                                                                                                ('Turkmenistan'),
                                                                                                                                                                ('Tuvalu'),
                                                                                                                                                                ('Uganda'),
                                                                                                                                                                ('Ukraine'),
                                                                                                                                                                ('United Arab Emirates'),
                                                                                                                                                                ('United Kingdom'),
                                                                                                                                                                ('United States of America'),
                                                                                                                                                                ('Uruguay'),
                                                                                                                                                                ('Uzbekistan'),
                                                                                                                                                                ('Vanuatu'),
                                                                                                                                                                ('Venezuela'),
                                                                                                                                                                ('Vietnam'),
                                                                                                                                                                ('Yemen'),
                                                                                                                                                                ('Zambia'),
                                                                                                                                                                ('Zimbabwe');
                                                                                                                                                        `
            )
            .then(() => {
                console.log("DB seeded!");
                res.sendStatus(200);
            })
            .catch((err) => console.log("error seeding DB", err));
    },
    getCountries: (req, res) => {
        sequelize.query('SELECT * FROM countries')
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch(err => {
                console.log('Error fetching countries', err);
                res.status(500).send(err);
            });
    },
    // In your controller.js file:

    // Create a new city in the database
    createCity: (req, res) => {
        const { name, rating, countryId } = req.body;
    
        // Use sequelize.query to insert data into the database
        sequelize
            .query(
                `INSERT INTO cities (name, rating, country_id) VALUES (:name, :rating, :countryId) RETURNING *`,
                {
                    replacements: { name, rating, countryId },
                    type: sequelize.QueryTypes.INSERT,
                }
            )
            .then((dbRes) => {
                // Send the inserted city data back to the client
                res.status(200).send(dbRes[0]);
            })
            .catch((error) => {
                // Handle any errors
                console.error("Error creating city:", error);
                res.status(500).send("Error creating city");
            });
    },
    


    getCities: (req, res) => {
        sequelize.query(`
            SELECT cities.city_id, cities.name AS city, cities.rating, countries.country_id, countries.name AS country
            FROM cities
            JOIN countries ON cities.country_id = countries.country_id
            ORDER BY cities.rating DESC
        `).then((dbRes) => {
            res.status(200).send(dbRes[0]);
        }).catch((error) => {
            console.error(error);
            res.status(500).send('An error occurred while fetching data');
        });
    },
    
     deleteCity: (req, res) => {
        const { city_id } = req.params; // Destructuring to get city_id from req.params
    
        if (!city_id) {
            console.error('Error deleting city: city_id is undefined');
            res.status(400).send('Error: city_id is undefined');
            return;
        }
    
        sequelize.query(`DELETE FROM cities WHERE city_id = :city_id`, {
            replacements: { city_id },
            type: sequelize.QueryTypes.DELETE,
        })
        .then((dbRes) => {
            res.status(200).send(dbRes[0]);
        })
        .catch((err) => {
            console.error('Error deleting city:', err);
            res.status(500).send(err);
        });
    },
};
    
