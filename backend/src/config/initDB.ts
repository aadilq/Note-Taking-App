import sqlpool from './database';

const createNotesTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS notes(
            id INT AUTO_INCREMENT PRIMARY KEY,
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

export default createNotesTable;

`Docker Container
└── MySQL Instance
    └── notesdb (database)
        └── notes (table) ← initDB.ts creates this`