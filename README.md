
# Full Stack Calculator (React + Node.js)

This is a simple full-stack calculator project that performs basic arithmetic operations (Addition, Subtraction, Multiplication, Division) using a **React frontend** and a **Node.js + Express backend**.

---

## Features
- Perform arithmetic operations through a web interface
- React frontend with dropdown to select the operation
- Backend API endpoint `/calc` that processes requests
- Axios used to communicate between frontend and backend
- CORS enabled for smooth integration

---

## What I Learned

From this project I learned:

- How to build a frontend using **React** with hooks (`useState`)
- How to make HTTP requests from React using **Axios**
- How to create a simple **Express.js backend**
- Handling **query parameters** in APIs
- Integrating frontend with backend
- Handling **CORS issues** during development
- Running and connecting two servers (React on port 3000 and Node on port 5000)

---

## How to Run

### Backend
1. Navigate to backend folder
2. Install dependencies and start server:
   ```bash
   npm install
   node app.js


Server runs at `http://localhost:5000`

### Frontend

1. Navigate to frontend folder
2. Install dependencies and start React app:

   ```bash
   npm install
   npm start
   ```

   React app runs at `http://localhost:3000`

---

## Folder Structure

```
project/
├── backend/
│   └── app.js
└── frontend/
    └── src/
        └── App.js
```


