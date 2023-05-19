const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes
server.post('/api/forms', (req, res) => {
    const { title } = req.body;
    const form = {
        id: Date.now(),
        title: title,
        link: `https://forms.google.com/.../${Date.now()}` // Replace with your own logic to generate shareable link
    };

    router.db.get('forms').push(form).write();
    res.json(form);
});

server.use('/api', router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});