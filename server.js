const express = require("express"); //เรียกใช้งาน express module เพื่อสร้าง web server
require("dotenv").config(); //เรียกใช้งานไฟล์ .env

const app = express(); // สร้าง web server
const PORT = process.env.PORT || 5000;

// เทสการเรียกใช้งาน web server จาก client/user
app.get("/", (req, res) => {
  res.json({ message: "Hello from phatcharapol server" });
});

// สร้างช่องทางในการติดต่อ web server นี้ จาก client/user
app.listen(3000, () => {
  console.log("Server is running on port " + PORT + "...");
});
