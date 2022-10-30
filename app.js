import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';


const app = express();


app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// setando as mensagens de erro
app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`)
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

export default app