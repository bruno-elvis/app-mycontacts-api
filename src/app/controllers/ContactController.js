const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
    async index(request, response) {
        const { orden } = request.query;

        const contacts = await ContactsRepository.findAll(orden);

        response.json(contacts);

    };

    async show(request, response) {
        const { id } = request.params;

        const contact = await ContactsRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ error: 'Contact not found' });

        };

        response.json(contact);

    };

    async store(request, response) {
        const { name, email, phone, category_id } = request.body;

        const contactEmailExists = await ContactsRepository.findByEmail(email);

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });

        } else if (contactEmailExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' });

        };

        const contact = await ContactsRepository.create(name, email, phone, category_id);

        response.json(contact);
    };

    async update(request, response) {
        const { id } = request.params;

        const { name, email, phone, category_id } = request.body;

        const contactIdExists = await ContactsRepository.findById(id);

        const contactEmailExists = await ContactsRepository.findByEmail(email);

        if (!name) return response.status(400).json({ error: 'Name is required' });

        if (!contactIdExists) {
            return response.status(404).json({ error: 'Contact not found' });

        } else if (contactEmailExists && contactEmailExists.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' });

        };

        const contactEdit = await ContactsRepository.update({ id, name, email, phone, category_id });

        response.json(contactEdit);

    };

    async delete(request, response) {
        const { id } = request.params;

        await ContactsRepository.delete(id);

        response.sendStatus(204);

    };

};

module.exports = new ContactController();
