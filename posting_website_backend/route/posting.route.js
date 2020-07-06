module.exports = function(app) {
 
    const books = require('../controller/posting.controller.js');
 
    // Create a new Posting
    app.post('/api/postings/create', books.create);
 
    // Retrieve all Postings
    app.get('/api/postings', books.findAll);
 
    // Retrieve a single Book by Id
    app.get('/api/postings/:postingId', books.findOne);
   
    // Update a Posting with Id
    app.put('/api/postings/:postingId', books.update);
 
    // Delete a Posting with Id
    app.delete('/api/postings/:postingId', books.delete);
}