const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
const listItems = ['Buy Ingredients', 'Cook Dinner', 'Have Dinner'];

app.get('/', function (req, res) {
  //   var today = new Date();
  //   var dayType;
  //   if (today.getDay() === 6 || today.getDay() === 5) {
  //     dayType = 'weekend';
  //   } else {
  //     dayType = 'weekday';
  //   }
  //   res.render('list', { dayType: dayType });
  const today = date.getDay();
  res.render('list', {
    dayType: today,
    listItems: listItems,
  });
});

app.post('/', function (req, res) {
  console.log(req.body.todoListItem);
  listItems.push(req.body.todoListItem);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
