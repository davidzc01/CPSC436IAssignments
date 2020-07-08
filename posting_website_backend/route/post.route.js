module.exports = function(app) {
 
    const posts = require('../controller/post.controller.js');
 
    // Create a new Post
    app.post('/api/posts/create', posts.create);
 
    // Retrieve all Posts
    app.get('/api/posts', posts.findAll);
 
    // Retrieve a single Post by Id
    app.get('/api/posts/:postId', posts.findOne);
   
    // Update a Post with Id
    app.put('/api/posts/:postId', posts.update);
 
    // Delete a Post with Id
    app.delete('/api/posts/:postId', posts.delete);
}