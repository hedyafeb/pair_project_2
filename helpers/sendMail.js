const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user : 'azamdanyyuli@gmail.com', // Email Si Pengirim
       pass : '4lh4mdulill4h'  // password si pengirim
   }
 });

module .exports = transporter