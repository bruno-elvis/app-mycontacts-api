const { v4, validate } = require('uuid');

const db = require('../../database');

/* BASE MOCK */
let contacts = [
    {
        id: v4(),
        name: "Bruno",
        email: "bruno@silva.com",
        phone: "28999522013",
        category_id: v4()
    },

    {
        id: v4(),
        name: "Niti",
        email: "niti@cat.com",
        phone: "28999999666",
        category_id: v4()
    },

    {
        id: v4(),
        name: "Bim",
        email: "bim@bim.com",
        phone: "28999999999",
        category_id: v4()
    },

    {
        id: "5",
        name: "Teste",
        email: "teste@test.com",
        phone: "28666666666",
        category_id: 5
    },

];

class ContactRepository {
    async findAll(orden) {
        const orderBy = orden?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

        const rows = await db.query(`SELECT * FROM contacts ORDER BY contacts.name ${orderBy};`);

        return rows;

    };

    async findById(id) {

        const idIsValid = validate(id);

        if (!idIsValid) return idIsValid;

        const [ row ] = await db.query('SELECT * FROM contacts WHERE contacts.id = $1;', [id]);

        return row;

        /* IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => resolve(
            contacts.find(contact => contact.id === id)

        ));
        */

    };

    async findByName(name) {
        const [ row ] =  await db.query('SELECT * FROM contacts WHERE contacts.name = $1;', [name]);

        return row;

        /* IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => resolve(
            contacts.find(contact => contact.name === name)

        ));
        */

    };

    async findByEmail(email) {
        const [ row ] = await db.query('SELECT * FROM contacts WHERE contacts.email = $1;', [email]);

        return row;

        /* IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => resolve(


        ));
        */

    };

    async delete(id) {
        console.log(await db.query('DELETE FROM contacts WHERE contacts.id = $1;', [id]));

        /* IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => {
            contacts = contacts.filter(contact => contact.id !== id);

            resolve();

        });
        */

    };

    async create(name, email, phone, category_id) {
        /* IMPLEMENTAÇÃO COM DB POSTGRES */

        const [ row ] = await db.query(`
        INSERT INTO contacts (name, email, phone, category_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `, [name, email, phone, category_id]);

        return row;

        /*
        IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => {
            const { name, email, phone, category_id } = body;

            const newContact = { id: v4(), name, email, phone, category_id };

            contacts.push(newContact);

            resolve(newContact);

        });*/

    };

    async update(contactEdit) { /* { id, name, email, phone, category_id } */
        const { id, name, email, phone, category_id } = contactEdit;

        const [ row ] = await db.query(`
        UPDATE
            contacts
        SET
            name = $1,
            email = $2,
            phone = $3,
            category_id = $4
        WHERE
            id = $5
        RETURNING *
        `, [name, email, phone, category_id, id]);

        return row;

        /* IMPLEMENTAÇÃO COM BASE MOCK
        return new Promise((resolve, reject) => {
            contacts = contacts.map(contact => contact.id === contactEdit.id ? contactEdit : contact);

            resolve(contactEdit);

        });
        */

    };

};

module.exports = new ContactRepository();
