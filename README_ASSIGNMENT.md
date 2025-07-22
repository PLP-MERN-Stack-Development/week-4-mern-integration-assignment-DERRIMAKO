# 📚 Week 4 MERN Stack Integration Assignment

This project is a basic **MERN (MongoDB, Express.js, React.js, Node.js)** blog application demonstrating seamless back-end and front-end integration.

---

## ✅ Features Implemented

- Express.js server with API routes for **Posts** and **Categories**
- MongoDB connection using Mongoose
- React front-end built with **Vite**
- Proxy setup for connecting React to the back-end
- Basic pages: Home, Posts List, Categories List

---

## 📂 Project Structure

```

root/
├── server/              # Back-end (Node.js + Express)
│    ├── server.js
│    ├── models/
│    ├── controllers/
│    ├── routes/
│    ├── .env
│    ├── .env.example
│    ├── package.json
├── client/              # Front-end (React + Vite)
│    ├── src/
│    ├── vite.config.js
│    ├── package.json

````

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` folder with:

```env
MONGODB_URI=mongodb://localhost:27017/your-db-name
PORT=5000
````

---

## 🚀 How to Run

1️⃣ **Install Back-End Dependencies**

```bash
cd server
npm install
```

2️⃣ **Install Front-End Dependencies**

```bash
cd ../client
npm install
```

3️⃣ **Start the Back-End**

```bash
cd ../server
npm run dev
```

4️⃣ **Start the Front-End**

```bash
cd ../client
npm run dev
```

---

## ✅ API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /api/posts      | Get all posts      |
| GET    | /api/categories | Get all categories |

---

## 📌 Notes

* Make sure **MongoDB** is running (`mongod`).
* Add posts and categories directly in the database to see them in the front-end.
* Test APIs with **Postman** or browser.
* This covers the core requirements for the assignment.

---

**Submitted by:** `DERRICK MAKORI`
