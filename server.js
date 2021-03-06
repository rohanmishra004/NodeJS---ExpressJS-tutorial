const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')
const { logger, logEvent } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorhandler')
const corsOption = require('../ExpressJs/config/corsOptions')
const PORT = process.env.PORT || 3500;
//MiddleWare
//custom created middleware for app - logger is function exported from logEvent which holds the logging functionality
app.use(logger);

//cross origin resource sharing - read more on npm - examples there
app.use(cors(corsOption))

//middleware - urlencoded - handles url encoded data like in the case with form data
app.use(express.urlencoded({extended: false}))

app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'))
app.use('/employees', require('./routes/api/employees'))


//at the end we can put a default link to 404 if page is not found
app.all('*', (req, res)=> {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))   
    }else if (req.accepts('json')) {
        res.json({error: '404 not found'})
    } else {
        res.type('txt').send('404 not found')
    }
        
})


//middleware error handler
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})