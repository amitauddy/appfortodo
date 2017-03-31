var express = require('express');
var router = express.Router();

function getdate() {
    var date = new Date();
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

var todoItems = [
    {id: 1, desc: 'Task 1', date: (getdate())},
    {id: 2, desc: 'Task 2', date: (getdate())},
    {id: 3, desc: 'Task 3', date: (getdate())},
];

router.get('/', function(req, res) {
    res.render('index', {
        title: "TODO LIST",
        items: todoItems
    });
});

router.post('/add', function (req, res) {
    var newItem = req.body.desc;
    if (newItem.length !== 0) {
        todoItems.push({
            id: todoItems.length + 1,
            desc: newItem,
            date: getdate()
        });
    }
    res.redirect('/');
});

module.exports = router;
