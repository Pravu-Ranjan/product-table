const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const mysql = require("mysql2");

const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.SERVER_PORT || 3005;

console.log(PORT);
app.use(bodyParser.json());
app.use(cors());
const mysqlDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "productdb",
});

mysqlDB.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database connected successfully!!!");
  }
});

//routes
app.get("/get", (req, res) => {
  let sql = "SELECT * FROM products";
  mysqlDB.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
      console.log(results);
    }
  });
});

app.post("/create", (req, res) => {

  let data = {
    BookingID: req.body.BookingID || null,
    Service: req.body.Service || null,
    Assign: req.body.Assign || null,
    Date: req.body.Date || null,
    Customer: req.body.Customer || null,
    Price: req.body.Price || null,
    Status: req.body.Status || null,
  };

  let sql = "INSERT INTO products SET ?";
  mysqlDB.query(sql, data, (err, results) => {
    if (err) {
        throw err
    } else {
       
            res.send(results);
            console.log(results);
         
    }
  });
});

// app.use("/", routes);
app.listen(PORT, () => console.log(`Server up and running on port : ${PORT}`));
