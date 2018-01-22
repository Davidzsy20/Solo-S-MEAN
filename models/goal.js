var db = require('./db');

var Goal = {};
Goal.getAll = function() {
    return db('items').select("*")
    .then((val)=>{
        console.log(val)
     return val
    })
}
Goal.findGoal = function(id) {
    console.log('hi')
    return db('items').where({"id": id}).select("*")
    .then(function(goal) {
        return goal;
    })
    .catch(function(err) {
        console.error('err')
    });
};
Goal.addGoal = function(item) {
    return db('items').insert({'item': item})
    .then(function(item) {
        console.log(db('items').where({'item': item}).select("*"));
        return item;
    })
    .catch(function(err) {
        console.error('err adding Goals');
    })
}
Goal.update = function(id) {
    // if(db('item').where({id:id}).select(db))
    return db('items').where({id:id}).update({status: 'purchased'})

.then((val) =>{
console.log(val);
})
.catch((err)=>{
    console.error('err in updating function')
})
}
Goal.delete = function(id) {
    return db('items').where("id",">",id).del()
    .then((val)=>{
console.log(val);
    })
}
// TODO: ADD MORE MODEL FUNCTIONS HERE

module.exports = Goal;
