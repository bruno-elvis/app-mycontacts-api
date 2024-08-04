const ContactsRepository = require('../repositories/ContactRepository');

const { isValidUUID }  = require('../utils/isValidUUID​');

class ContactController {
  async index(request, response) {
    const { orden } = request.query;

    const contacts = await ContactsRepository.findAll(orden);

    response.json(contacts);

  };

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
        return response.status(400).json({ error: 'Invalid contact id' });

    };

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });

    };

    response.json(contact);

  };

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
        return response.status(400).json({ error: 'Name is required' });

    };

    if (email) {
        const contactEmailExists = await ContactsRepository.findByEmail(email);

        if (contactEmailExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' });

        };

    };

    const contact = await ContactsRepository.create(name, email || null, phone, category_id || null);

    response.status(201).json(contact);

  };

  async update(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
        return response.status(400).json({ error: 'Invalid contact id' });

    };

    const {
      name, email, phone, category_id,
    } = request.body;

    if (category_id && !isValidUUID(id)) {
        return response.status(400).json({ error: 'Invalid category' });

    };

    if (!name) return response.status(400).json({ error: 'Name is required' });

    const contactIdExists = await ContactsRepository.findById(id);


    if (!contactIdExists) {
        return response.status(404).json({ error: 'Contact not found' });

    };

    if (email) {
        const contactEmailExists = await ContactsRepository.findByEmail(email);

        if (contactEmailExists && contactEmailExists.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' });

        };

    };

    const contactEdit = await ContactsRepository.update({
      id, name, email: email || null, phone, category_id: category_id || null,

    });

    response.json(contactEdit);

  };

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
        return response.status(400).json({ error: 'Invalid contact id' });

    };

    await ContactsRepository.delete(id);

    response.sendStatus(204);

  };

};

module.exports = new ContactController();
