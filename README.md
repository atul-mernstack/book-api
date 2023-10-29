# book-api
1. Pull the code from github main branch to local.<br>
2. Open the code in any editor like VS Code.<br>
3. Add the .env file inside config folder and create variable PORT and DB_URI and give the appropriate value.
4. Run "npm install" command inside your app directory (i.e. where package.json is located) will install the reuired dependencies for the application.<br><br>

# End Points<br>
1. http://atul.book.api.akrow.in.net/api/v1/book/new (POST)<br>
    Add a new book (title, author, summary)<br><br>
2. http://atul.book.api.akrow.in.net/api/v1/books (GET)<br>
    View a list of all books<br><br>
3. http://atul.book.api.akrow.in.net/api/v1/book/id (GET)<br>
    View details of a specific book by its ID<br><br>
4. http://atul.book.api.akrow.in.net/api/v1/book/id (PUT)<br>
    Update a book's details<br><br>
5. http://atul.book.api.akrow.in.net/api/v1/book/id (DELETE)<br>
    Delete a book


   # Run App
   1. Run the command "npm start" in terminal(where server.js is located).
  
   # Deployment
