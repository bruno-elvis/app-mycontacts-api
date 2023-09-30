const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
    async index(request, response) {
        const categories = await CategoryRepository.findAll();

        response.json(categories);

    };
    
    async show(request, response) {
        const { id } = request.params;

        const category = await CategoryRepository.findById(id);

        if (!category) {
            return response.status(404).json({ error: 'Category not found' });

        };

        response.json(category);
        
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