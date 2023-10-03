const db = require('../../database');

const { validate } = require('uuid');

class ContactRepository {
    async findAll(orden) {
        const orderBy = orden?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

        const rows = await db.query(`SELECT * FROM categories ORDER BY categories.name ${orderBy};`);

        return rows;

    };

    async findById(id) {
        const idIsValid = validate(id);

        if (!idIsValid) return idIsValid;

        const [ row ] = await db.query('SELECT * FROM categories WHERE categories.id = $1 ;', [id]);

        return row;

    };

    async findByName(name) {
        const [ row ] = await db.query('SELECT * FROM categories WHERE categories.name = $1 ;', [name]);

        return row;

    };

    async create(name) {
        const [ row ] = await db.query(`INSERT INTO categories (name)
                                        VALUES ($1)
                                        RETURNING * `, [name]);

        return row;

    };

    async update(id, name) {
        const [ row ] = await db.query(`UPDATE categories
                                SET name = $1
                                WHERE categories.id = $2
                                RETURNING * `, [name, id]);

        return row;

    };

};

module.exports = new ContactRepository();
