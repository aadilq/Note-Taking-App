import { Request, Response } from "express";
import sqlpool from "../config/database";

//Getting all of the notes 
export const getAllNotes = async (req: Request, res: Response) => {
    try{
        const [rows] = await sqlpool.query('SELECT * FROM notes ORDER by updated_at DESC')
        res.json(rows)
    }
    catch(error){
        console.log('error fetching notes:', error)
        res.status(500).json({error: 'Failed to fetch Notes' });
    }
}