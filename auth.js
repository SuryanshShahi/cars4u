const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("./db/conn");
const User = require("./model/userSchema");

var nodemailer = require("nodemailer");

router.post("/SignUp", async (req, res) => {
  const { fname, lname, email, phone, password, cpassword } = req.body;
  if (!fname || !lname || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "All fields are mandatory" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(401).json({ error: "password doesn't match" });
    } else {
      const user = new User({
        fname,
        lname,
        email,
        phone,
        password,
        cpassword,
      });

      await user.save();
      res.status(201).json({ message: "user registered successfully" });

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Registraion Successfull",
        text: `Welcome To CARS4U`,
        attachments: [
          {
            filename: "mail.html",
            path: "../server/client/src/images/mail.html",
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/SignIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are mandatory" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        // if (!userExist) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        res.status(201).json({ message: "login successful" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
