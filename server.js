// const nodemailer = require("nodemailer");
// const email = "nikolay.kozlov1118@gmail.com";
// const env = {
//   email: 'nikolay.kozlov1118@gmail.com',
//   host: 'localhost',
//   service: 'gmail',
//   user: 'nikolay.kozlov1118',
//   pass: '123456',
// };

// const email = "nikolay.kozlov1118@gmail.com";

// const sendEmail = async (email, subject, text) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: env.host,
//       service: env.service,
//       port: 587,
//       secure: true,
//       auth: {
//         user: env.user,
//         pass: env.pass,
//       },
//     });

//     await transporter.sendMail({
//       from: env.user,
//       to: email,
//       subject: subject,
//       text: text,
//     });
//     console.log("email sent sucessfully");
//   } catch (error) {
//     console.log("email not sent");
//     console.log(error);
//   }
// };

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const emailCheck = require('email-check');
const emailExistence = require('email-existence');

const rows = [];
const validEmails = [];
const refusedEmails = [];
let counter = 0;

fs.createReadStream(path.resolve(__dirname, 'assets', 'TV-Grid-Domain view.csv'))
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error("///////////////////error", error))
  .on('data', row => {
    rows.push(row);
  })
  .on('end', rowCount => {
    console.log("///////////////////rows", rows);
    console.log(`Parsed ${rowCount} rows`);
    if (rows.length > 0) {
      getValidEmails(rows);
    } else {
      console.log("///////////////////validEmails", validEmails);
      console.log("///////////////////validEmails.length", validEmails.length);
    }
  });

async function a(param) {
  return new Promise(resolve => setTimeout(() => resolve(param), 3000));
}
async function b(param) {
  return new Promise(resolve => setTimeout(() => resolve(param), 1000));
}
async function getValidEmails(rows) {
  let result = 0;
  // console.log("/////////////a, before", result);
  // a().then((result1) => {
  //   console.log("///////////a, result1", result1);
  //   result = result + result1;
  //   console.log("///////////a, finished", result);
  // });
  // console.log("/////////////a, after", result);
  // console.log("/////////////b, before", result);
  // b().then((result2) => {
  //   console.log("///////////b, result2", result2);
  //   result = result + result2
  //   console.log("///////////b, finished", result);
  // });
  // console.log("/////////////b, after", result);

  Promise.all([
    a(1),
    b(2),
  ]).then(console.log);

  // console.log("///////////////////getValidEmails-start");
  // await rows.forEach((row) => {
  //   console.log("///////////////////getValidEmails-rows.forEach-start");
  //   const prefixes = ['info', 'sales', 'support'];
  //   prefixes.forEach((prefix) => {
  //     console.log("///////////////////getValidEmails-rows.forEach.prefixes.forEach-start");
  //     const email = prefix + '@' + row['TV'];
  //     emailExistence.check(email, function(error, response) {
  //       counter++;
  //       console.log("///////////////////email", email);
  //       console.log("///////////////////response", response);
  //       console.log("///////////////////error", error);
  //       if (response) {
  //         validEmails.push(email);
  //       }
  //       if (counter === rows.length * 3) {
  //         console.log("///////////////////validEmails", validEmails);
  //         console.log("///////////////////validEmails.length", validEmails.length);
  //         validEmails.forEach((email, index) => {
  //           console.log("///////////////////", index, ". ", email);
  //         })
  //       }
  //     });
  //     // emailCheck(email)
  //     //   .then(function (res) {
  //     //     counter++;
  //     //     console.log("///////////////////email", email);
  //     //     console.log("///////////////////res", res);
  //     //     // Returns "true" if the email address exists, "false" if it doesn't.
  //     //     if (res) {
  //     //       validEmails.push(email);
  //     //     }
  //     //     if (counter === rows.length * 3) {
  //     //       console.log("///////////////////validEmails", validEmails);
  //     //       console.log("///////////////////validEmails.length", validEmails.length);
  //     //       validEmails.forEach((email, index) => {
  //     //         console.log("///////////////////email", index, ". ", email);
  //     //       })
  //     //     }
  //     //   })
  //     //   .catch(function (err) {
  //     //     console.log("///////////////////err", err);
  //     //     counter++;
  //     //     if (err.message === 'refuse') {
  //     //       refusedEmails.push(email);
  //     //       console.log("The MX server is refusing requests from the IP address.");
  //     //     } else {
  //     //       console.log("Unknown error.");
  //     //     }
  //     //     if (counter === rows.length * 3) {
  //     //       console.log("///////////////////validEmails", validEmails);
  //     //       console.log("///////////////////validEmails.length", validEmails.length);
  //     //       validEmails.forEach((email, index) => {
  //     //         console.log("///////////////////email", index, ". ", email);
  //     //       })
  //     //     }
  //     //   });
  //     console.log("///////////////////getValidEmails-rows.forEach.prefixes.forEach-end");
  //   });
  //   console.log("///////////////////getValidEmails-rows.forEach-end");
  // });
  // console.log("///////////////////getValidEmails-end");
}
