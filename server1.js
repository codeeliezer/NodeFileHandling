const express = require("express")
const wd42p = express()
wd42p.set("view engine", "ejs") //to use view engine
wd42p.use(express.urlencoded({ extended: true }))

wd42p.get('/login', (req, res) => {
  res.render('login')
});

wd42p.post('/login-registration', (req, res) => {
  const username_value = 'admin';
  const password_value = '123456';

  let usr = req.body.username
  let pwd = req.body.password

  if (usr == username_value && pwd == password_value) {
    res.render("form");

  } else {
    res.render("login", { errorMessege: "Sorry Wrong ID or Password!" })
  }
})

wd42p.post('/login-registration')



wd42p.listen(1234)
console.log('server1 is running')