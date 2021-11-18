const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


//serve static contents
app.use(express.static('static'));
app.use(cookieParser("my little secret"));
app.use(express.urlencoded({extended:true}));

app.get('/login-form', (req,res,next) => {
    let userName, password;
    username = req.cookies.usr || '';
    password = req.signedCookies.pwd || '';
    
    // let content =
    // `<!DOCTYPE html>
    //     <html lang = "en">
    //     <head>
    //         <meta charset = "UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Home</title>
    //     </head>
    //     <body>
    //         <form action = "/login" method = "post">
    //             username: <input name='usr' value='${username}' type='text' />
    //             <br/>
    //             password: <input name='pwd' value='${password}' type='text' />
    //             <br/>
    //             <input type="submit"/>
    //         </form>
    //     </body>  
    //     </html>
    // `;
    
    // res.send (content);
    next();
})  

app.post('/login', (req,res) => {
    let username = req.body.usr;
    let password = req.body.pwd;
    let message = 'Access Denied';

    if(username == 'admin' && password == '123')
    {
        //writing cookies
        res.cookie('usr', username);
        res.cookie('pwd', password, {signed: true, expires: new Date(2050,0,1)});
        console.log("here!");
        res.redirect("/admin.html");
    } else if (username=="guest") {
        res.redirect("/guest.html");
    }
})

//dynamic handling

app.listen(2000);