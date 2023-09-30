const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
    async index(request, response) {
        const categories = await CategoryRepository.findAll();

        response.json(categories);

    };
    
    show() {
        
    };
    
    async store(request, response) {
        const { name } = request.body;

        const categoryExists = await CategoryRepository.findByName(name);

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });

        } else if (categoryExists) {
            return response.status(400).json({ error: 'This name is already in use' });

        };

        const category = await CategoryRepository.create(name);

        response.json(category);

    };

    update() {

    };

    delete() {

    };

};

module.exports = new CategoryController();