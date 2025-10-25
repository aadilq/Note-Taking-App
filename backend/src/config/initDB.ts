import sqlpool from './database';

const createNotesTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS notes(
            id INT AUTO-INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

        )
    `

    try {
        await sqlpool.query(createTableQuery)
        console.log("Notes table was successfully created ✅")
    }
    catch(error){
        console.log("Error Creating the Notes table ❌:", error)
    }
}