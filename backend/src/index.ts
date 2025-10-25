import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import createNotesTable from './config/initDB';



dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});
const startServer = async () =>{
    try{
        await createNotesTable()
        app.listen(PORT, ()=>{
            console.log(`Server is running on Port ${PORT}`)
        })
    }
    catch(error){
        console.log('Failed to start Server', error)
    }

}

startServer()



