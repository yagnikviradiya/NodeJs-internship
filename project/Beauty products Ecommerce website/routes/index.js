var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var chalk = require('chalk');
const {
  log
} = require('debug');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop_register2'
});

// DB CONNECTION
connection.connect((error) => {
  if (!error) {
    console.log(chalk.black.bgGreen(" DB CONNECTED"));
  } else {
    console.log(chalk.black.bgRed(" DB NOT CONNECTED"));

  }
})
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});
// MASTER PAGE RENDER
router.get('/', function (req, res, next) {
  res.render('master');
});

// FORM RENDER
router.get('/ShopRegister', function (req, res, next) {
  res.render('ShopRegister');
});
// FORM PROCESS REQUEST AND STORE DATA INTO DATABASE
router.post('/form-process', function (req, res, next) {
  console.log(req.body);
  // console.log( req.body);
  // console.log( req.body);

  var form_data = {
    id: req.body.id,
    shop_owner_name: req.body.name,
    phon_number: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address
  }
  // console.log(form_data)
  console.log("data aa gaya, ab malum nai database ma jayega  ya nahi");
  connection.connect(function (err) {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    
    console.log('Connection established');
  });
  // connection.query('insert into shopdata set?', function (err, rows) {
  //   if (err) throw err;

  //   console.log('Data dal gaya in Db:\n');
  //   console.log(rows);
  //   res.redirect("/ShopRegister")

  // });
  connection.end(function (err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });
  // STORE DATA IN DATABASE FROM  SHOP REGISTER FORM
  // connection.query('insert into shopdata set? ',form_data, function (error, results) {

  //   if (error) throw error;
  //    res.redirect("/ShopRegister") 

  // });
});



// admin login form render
router.get('/admin_login', function (req, res, next) {
  res.render('admin_login');
});

router.post('/admin_login_process', function (req, res, next) {
  var admin_name = "yagnik"
  var admin_password = "1234"
  if (admin_name == req.body.admin_name && admin_password == req.body.password) {


    // FETCH DATA FROM DATABASE AND DISPLAY

    connection.query('select * from shopdata', function (error, table_row) {
      //CHECK USER NAME AND PASSWORD VALIDATION
      if (error) throw error;
      //  console.log( table_row );
      res.render('display', {
        shop_data_array: table_row
      });
    });

  } else {
    res.send("h2 INVALID ADMIN NAME or PASSWORD");
  }
});
//  =-----------------

//   DELETE OPERATION ON DATABASE
router.get('/delete/:id', function (req, res, next) {
  var deleteid = req.params.id;
  console.log(" id issssssssssss : " + deleteid);
  // DELETE DATA IN DATABASE FROM  SHOP REGISTER FORM
  connection.query('delete from shopdata where id = ? ', [deleteid], function (error, table_row) {
    if (error) throw error;
    console.log(" return row " + table_row);
    // AFTER ADMIN ACTION SHOW  TABLE
    res.redirect("/admin_login");
    // connection.query('select * from shopdata', function (error, table_row) { 
    //   if (error) throw error;
    //   res.render('display',{shop_data_array :table_row });
    // });
  });
});

//   EDIT GET REQUEST AND  RENDER EDIT FORM
router.get('/edit/:id', function (req, res, next) {
  var editid = req.params.id;
  console.log(" id issssssssssss : " + editid);

  connection.query('select * from shopdata where id = ? ', [editid], function (error, table_row) {
    if (error) throw error;
    console.log(" return row " + table_row);
    res.render('edit', {
      shop_data_array: table_row
    });
  });
});

//   EDIT POST REQUEST AND EDIT OPERATION ON DATABASE AND RENDER TABLE
router.post('/edit/:id', function (req, res, next) {
  var seditid = req.params.id;
  var sowner_name = req.body.name;
  var sphon_number = req.body.phone;
  var semail = req.body.email;
  var spassword = req.body.password;
  var saddress = req.body.address;
  console.log(" id issssssssssss : " + seditid);
  console.log(" phoneeeeee : " + sphon_number);


  connection.query('update shopdata set shop_owner_name=?, phon_number=?,email=?,password=?,address=? where id=?', [sowner_name, sphon_number, semail, spassword, saddress, seditid], function (error, table_row) {
    if (error) throw error;
    console.log(" returnnnnnnnnnnnn " + table_row);
    res.redirect("/admin_login");
    // connection.query('select * from shopdata', function (error, data_row) { 
    //   if (error) throw error;
    //   res.render('display',{shop_data_array :data_row });
    // });
  });
});

module.exports = router;