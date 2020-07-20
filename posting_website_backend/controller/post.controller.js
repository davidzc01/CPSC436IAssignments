const Post = require('../model/post.model.js');
 
// POST a Post
exports.create = (req, res) => {
    // Create a Post
    const post = new Post({
        subject: req.body.subject,
        content: req.body.content,
        stared: false,
    });
 
    // Save a Post into MongoDB
    post.save()
    .then(post => {
        res.send(post.toClient());
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// FETCH all Posts
exports.findAll = (req, res) => {
    Post.find()
    .then(posts => {    
    let returnedPosts = [];
    
    for (let i = 0; i < posts.length; i++) {
      returnedPosts.push(posts[i].toClient());
    }
    
        res.send(returnedPosts);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// FIND a Post
exports.findOne = (req, res) => {
    Post.findById(req.params.postId)
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });            
        }
        res.send(post.toClient());
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Post with id " + req.params.postId
        });
    });
};
 
// UPDATE a Post
exports.update = (req, res) => {
    // Find Post and update it
    Post.findOneAndUpdate({ _id: req.params.postId }, {
        subject: req.body.subject,
        content: req.body.content,
        stared: req.body.stared
    }, {new: true})
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        res.send(post.toClient());
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Error updating Post with id " + req.params.postId
        });
    });
};
 
// DELETE a Post
exports.delete = (req, res) => {
    Post.findByIdAndRemove(req.params.postId)
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });
        }
        res.send({message: "Post deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Post with id " + req.params.postId
        });
    });
};