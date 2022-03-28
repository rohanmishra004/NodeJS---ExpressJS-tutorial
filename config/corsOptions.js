const whiteList= ['https://www.yoursite.com', 'http://www.127.0.0.1:5500', 'http://www.localhost:3500']
const corsOption = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin)!==-1 || !origin ){
            callback(null, origin)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200

}

module.exports = corsOption