var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const routes = require('./routes');
//  Connect all our routes to our application
app.use('/', routes);
// var goal = require('./models/goal.js')
// var user = require('./models/user.js')
// TODO: SET UP SERVER
  // Add middleware
app.use((req, res, next)=>{
console.log('Time:',Date.now())
next()
  })
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
  // Add static file service
app.use(express.static(path.join(__dirname, 'client')));
  // Add API routes

// Example route. See server-spec.js for the related test.
app.get('/zen', function(req, res) {
  res.send('There are no accidents. - Master Oogway')
})

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...')
})
// app.get('/goals', function(req,res) {
// // goal.findGoal(1).then((val)=>{
// //   console.log(val)
// // });
// // user.findByUsername('alice')
// // goal.addGoal('caonima')
// // .then((val)=> {
// //   res.send(val)
// // });
// goal.delete(5);
// goal.getAll()
// })
module.exports = app;
