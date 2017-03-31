var express = require('express');
var router = express.Router();

var todoItems = [
    {id: 1, desc: 'Task 1', date: (new Date())},
    {id: 2, desc: 'Task 2', date: (new Date())},
    {id: 3, desc: 'Task 3', date: (new Date())},
];

router.get('/', function(req, res) {
    res.render('index', {
        title: "TODO LIST",
        items: todoItems,
        date: new Date()
    });
});

router.post('/add', function (req, res) {
    var newItem = req.body.desc;
    if (newItem.length !== 0) {
        todoItems.push({
            id: todoItems.length + 1,
            desc: newItem,
            date: new Date()
        });
    }
    res.redirect('/');
});

module.exports = router;
