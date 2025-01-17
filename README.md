# ToDo List Application

Welcome to the **ToDo List Application**, a simple and user-friendly web app built with React.js. This app helps users manage their daily tasks effectively by allowing them to add, mark as complete, and delete tasks.

## Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Mark as Complete**: Check off tasks when completed.
- **Delete Individual Tasks**: Remove specific tasks one by one.
- **Clear All Tasks**: Quickly clear the entire to-do list with a single click.

## Technologies Used

- **React.js**: Front-end library for building user interfaces.
- **HTML5 & CSS3**: For structuring and styling the app.
- **Font Awesome**: For icons like the add (+) and delete (x) buttons.

## Installation

1. Clone the repository:
   

bash
   git clone https://github.com/<your-username>/<your-repo-name>.git



2. Navigate to the project directory:
   

bash
   cd <your-repo-name>



3. Install dependencies:
   

bash
   npm install



4. Start the development server:
   

bash
   npm start



5. Open your browser and visit:
   

http://localhost:3000



## Deployment

This app is deployed on **GitHub Pages**. To deploy your changes:

1. Add the homepage field in package.json:
   

json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"



2. Run the build command:
   

bash
   npm run build



3. Deploy using gh-pages:
   

bash
   npm run deploy



4. Visit the deployed app at:
   

https://<your-username>.github.io/<your-repo-name>



## Screenshots

![ToDo List App Screenshot](screenshot.png)

## How to Use

1. Type a task in the input box and click the **+** button to add it to your list.
2. Use the checkbox to mark a task as complete.
3. Click the red **x** button to delete a specific task.
4. Use the **Clear All** button to remove all tasks at once.

## Folder Structure

├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── App.js
│   │   └── styles.css
├── package.json
└── README.md
