var Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail,
    create,
    show,
    edit,
    update
    
}

function index(req, res) {
    Trail.find({}, function(err, trails) {
      res.render('trails/index', { title: 'All Trails', trails });
    });
  }

  function newTrail(req, res) {
    res.render('trails/new', { title: 'Add Trail' });
  }

  function create(req,res){
    let trail = new Trail(req.body);
    trail.save(function(err){
        if (err) res.redirect('/trails/new');
        console.log(trail);
        res.redirect(`/trails`);
    })
  }

  function show(req, res) {
    Trail.findById(req.params.id,function(err, trail) {
      res.render('trails/show', { title: 'Trail Detail', trail });
    }); 
     
  };

 
  function edit(req, res) {
    Trail.findOne({'trails._id': req.params.id}, function(err, trail) {
      console.log(trail)
      // if (err || !trail) return res.redirect('/trails');
      res.render('trails/edit', {trail});
    });
  }

  function update(req, res) {
    Trail.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
    
      req.body,
     
      {new: true},
      function(err, trail) {
        if (err || !trail) return res.redirect('/trails');
        res.redirect(`/trails/${trail._id}`);
      }
    );
  }