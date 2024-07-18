const express = require('express');
const app = express();
require('dotenv').config({ path:'./.env' });

//sending email
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host : process.env.MAILER_HOST,
    port : process.env.MAILER_PORT,
    secure : process.env.MAILER_TLS,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
    }
});

let mail = {
    from: process.env.MAILER_USER,
    to: 'mon_patident@hotmail.com',
    subject: 'Test invitacion para la boda de Haans y Montse',
    text: 'Test de envio de correo de la web app wedding haans and montse',
    html: '<h1>Test de envio de correo con la invitacion</h1>'
};


transporter.sendMail(mail, (err, info) => {
    if(err){
        console.log("error al enviar correo.", err);
    }else{
        console.log("email enviado.");
    }
})






const port = process.env.PORT ;

app.listen(port, () => {
    console.log(`Montse and Haans wedding app listening at http://localhost:${port}`);
});