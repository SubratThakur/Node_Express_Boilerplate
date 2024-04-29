import app from "./app";
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log(`server is listening on Port: %d `,port);
});
