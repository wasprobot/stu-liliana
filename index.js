const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


//serve static contents
app.use(express.static('static'));
app.use(cookieParser("my little secret"));

app.get('/login-form', (req,res) => {
    let userName, password;
    userName = req.cookies.usr || '';
    password = req.signedCookies.pwd || '';
    let content =
    `<!DOCTYPE html>
        <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <form action = "/login" method = "post">
                username: <input name='usr' type='text' />
                <br/>
                password: <input name='pwd' type='text' />
                <br/>
                <input type="submit"/>
            </form>
        </body>  
        </html>
    `;
    
    res.send (content);
});   

app.post('/login', (req,res) => {
    let username = req.body.usr;
    let password = req.body.pwd;
    let mesage = "Access Denied";

    if(username == "admin" && password == "123"){
        message = "Welcome";
        //writing cookies
        res.cookie("usr", username);
        res.cookie("pwd", password, {signed: true});
    }
    res.send(message);
})

//dynamic handling

app.listen(2000);