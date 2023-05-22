import nodemailer from "nodemailer";
import express from "express";

import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
// const smtp_login = process.env.SMTP_LOGIN;
// const smtp_password = process.env.SMTP_PASSWORD;
// const smtp_receivers_email = process.env.SMTP_RECEIVERS_EMAIL;
//
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: smtp_login, //test account
//     pass: smtp_password, // password from 2FA
//   },
// });

app.post("/mail/send", async function (req, res) {
  // const { email, subject, message } = req.body;

  // const mailOptions = {
  //   from: smtp_login, // sender address
  //   to: email, // list of receivers
  //   subject: subject, // subject line
  //   html: `<h1>New message from HR!</h1>
  // <div>You have new message from <b>${email}</b>: ${message}</div>`, // plain text body
  // };
  // //
  // // // await transporter.sendMail(mailOptions).then((res) => console.log(res));
  // // try {
  // //   await transporter.sendMail(mailOptions);
  // //   console.log("try");
  // // } catch (e: any) {
  // //   console.log("catch", e);
  // // }

  res.send("Ok");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
