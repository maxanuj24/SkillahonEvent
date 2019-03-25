module.exports = (app) => {
    const event = require('../controllers/event.controller.js');

    // Create a new Note
    app.post('/event', event.create);

    // Retrieve all Notes
    app.get('/event', event.findAll);

    // Retrieve a single Note with noteId
    app.get('/event/:eventId', event.findOne);

    // Update a Note with noteId
    app.put('/event/:eventId', event.update);

    // Delete a Note with noteId
    app.delete('/event/:eventId', event.delete);
}   