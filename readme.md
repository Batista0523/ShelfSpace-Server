# ShelfSpace Server

This is the server-side application for ShelfSpace, a book tracking application. The server is responsible for managing a PostgreSQL database with information about books.

## Deployed Application

The server is currently deployed and can be accessed at the following link:

[ShelfSpace Server](https://shelf-space-server-hn2d.onrender.com/)

## Repository

The source code for the server can be found in the GitHub repository:

[ShelfSpace Server Repository](https://github.com/Batista0523/ShelfSpace-Server)

## Full Stack Application Credits

This server is part of the ShelfSpace full-stack application created by Elisaul Batista and Keith Camacho.

## CRUD Operations

The server provides routes for performing CRUD (Create, Read, Update, Delete) operations on the book data. These routes include:

- **Create:** Add a new book entry.
- **Read:** Retrieve information about books.
- **Update:** Modify existing book information.
- **Delete:** Remove a book from the database.

## Local Development

To run the server locally, use the following commands:

1. Clone the repository: `git clone https://github.com/Batista0523/ShelfSpace-Server.git`
2. Navigate to the project directory: `cd ShelfSpace-Server`
3. Install dependencies: `npm install`
4. Set up the database schema: `npm run db_schema`
5. Seed the database with sample data: `npm run db_seed`
6. Start the server: `npm start`

Feel free to explore and modify the code according to your needs.
