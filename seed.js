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

seed();