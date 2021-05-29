const express = require('express');
const app =new express();
const port = process.env.PORT || 5000;


const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/addbooks',name:'Add Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/addauthors',name:'Add Author'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav);
const addbooksRouter = require('./src/routes/addbookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views');
app.use('/books',booksRouter);
app.use('/addbooks',addbooksRouter);
app.use('/authors',authorRouter);
app.use('/addauthors',addauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);



app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(port,()=>{
    console.log("Server Ready at :"+port);
});