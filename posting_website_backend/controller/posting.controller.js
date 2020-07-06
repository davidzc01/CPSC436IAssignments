const Posting = require('../model/posting.model.js');
 
// POST a Posting
exports.create = (req, res) => {
    // Create a Posting
    const posting = new Posting({
        subject: req.body.subject,
        content: req.body.content,
        description: false,
    });
 
    // Save a Posting into MongoDB
    posting.save()
    .then(posting => {
        res.send(posting.toClient());
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// FETCH all Postings
exports.findAll = (req, res) => {
    Posting.find()
    .then(postings => {    
    let returnedPostings = [];
    
    for (let i = 0; i < postings.length; i++) {
      returnedPostings.push(postings[i].toClient());
    }
    
        res.send(returnedPostings);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// FIND a Posting
exports.findOne = (req, res) => {
    Posting.findById(req.params.postingId)
    .then(posting => {
        if(!posting) {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });            
        }
        res.send(posting.toClient());
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Posting with id " + req.params.postingId
        });
    });
};
 
// UPDATE a Posting
exports.update = (req, res) => {
    // Find Posting and update it
    Posting.findOneAndUpdate({ _id: req.params.postingId }, {
        subject: req.body.subject,
        content: req.body.content,
        stared: req.body.stared
    }, {new: true})
    .then(posting => {
        if(!posting) {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });
        }
        res.send(posting.toClient());
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });                
        }
        return res.status(500).send({
            message: "Error updating Posting with id " + req.params.postingId
        });
    });
};
 
// DELETE a Posting
exports.delete = (req, res) => {
    Posting.findByIdAndRemove(req.params.postingId)
    .then(posting => {
        if(!posting) {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });
        }
        res.send({message: "Posting deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Posting not found with id " + req.params.postingId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Posting with id " + req.params.postingId
        });
    });
};