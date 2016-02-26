var
    connectRoute = require('connect-route'),
    connect = require('connect'),
    app = connect();

//use a middleware
app.use(connectRoute(function (router) {
    router.get('/', function (req, res, next) {
        res.end('index');
    });

    router.get('/home', function (req, res, next) {
        res.end('home');
    });

    router.get('/home/:id', function (req, res, next) {
        res.end('home ' + req.params.id);
    });

    router.post('/home', function (req, res, next) {
        res.end('POST to home');
    });
}));

app.listen(3007);
