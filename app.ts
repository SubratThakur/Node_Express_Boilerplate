import express from 'express';
import bodyParser from 'body-parser';
import { isLoggedIn } from './src/middleware/requestMiddleware';

class App {

    public express;
    
    constructor () {
        this.express = express();
        this.express.use(isLoggedIn);
        // for parsing application/json
        this.express.use(bodyParser.json());
        this.express.use(
            bodyParser.urlencoded({ extended: true })
        ); // for parsing application/x-www-form-urlencoded
        this.mountRoutes();
    }

    private mountRoutes (): void {
        try {
            const router = express.Router()
            router.get('/', (req, res) => {
                console.log(req.query);
                res.json({
                    message: 'Hello World!'
                });
            });
            router.get('/health', (req, res) => {
                res.send('Server is healthy!');
            });
            router.get('/users/:id', (req, res) => {
                const userId = req.params.id;
                const {isDeleted} = req.query;
                console.log(`User ID: ${userId}`);
                console.log(isDeleted? 'TRUE': 'FALSE');
                res.send('Server is healthy!');
            });
            router.post('/users/:id', (req, res) => {
                const userId = req.params.id;
                console.log(`User ID: ${userId}`);
                console.log(`Request Body: ${JSON.stringify(req.body)}`);
                res.send('Server is healthy!');
            });
            router.put('/users/:id', (req, res) => {
                const userId = req.params.id;
                console.log(`User ID: ${userId}`);
                res.send('Server is healthy!');
            });
            router.delete('/users/:id', (req, res):any => {
                console.log(req.body);
                res.send('Server is healthy!');
            });
            this.express.use('/', router);
        } catch(exception){
            console.log(`Exception while calling route`,exception);
        }
    }
}

export default new App().express