var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var goal = require('./models/goal.js')
var user = require('./models/user.js')
var bodyParser = require('body-parser');
// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.
  router.use(bodyParser.urlencoded({extended:true}));
  router.use(bodyParser.json());

router.post('/signup', function(req,res,next) {
  console.log(req.body.username);
  var username = req.body.username;
  var password = req.body.password;
  user.findByUsername(username).then((val) => {
    if(val.length===0) {
      user.addUser({username,password}).then((val)=>{console.log(val)}).then(()=>{res.send('user added')})
    } else{
      console.log(user.length)
    res.send(' 409 we got userss')
    }
    
  })
  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});
router.get('/',function(req,res) {
  goal.getAll().then((val)=>{
    res.send(val)
  })
})
router.post('/goal',(req,res)=>{
var item = req.body.item;

goal.addGoal(item).then((val)=>{
  goal.findGoal(val[0]).then((val)=>{
    console.log(val)
    res.send(val)
  })
})
})
router.get('/goal/:id',(req,res) => {
  console.log(req.params.id);
  const id = req.params.id;
  console.log(id)
goal.findGoal(id).then((val)=>{
  res.send(val);
});
});

module.exports = router;
