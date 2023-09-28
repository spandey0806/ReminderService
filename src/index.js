const express = require('express');
const bodyParser = require('body-parser');

const { PORT } =require('./config/serverConfig');

const  { sendBasicEmail } = require('./services/email-service')

const setupAndStartServer =() =>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true})); 

    app.listen(PORT,()=>{
        console.log(`Server started at Port : ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'shubhamhbtu8@gmail.com',
            'This is testing email',
            'How are you'
        );

    });
}
 
setupAndStartServer();