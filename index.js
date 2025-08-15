const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
const users = [
  {
    id: 1,
    name: "user1",
    photo: ["profile1.jpg", "cover1.jpg"],
    title: "Software Engineer",
  },
  {
    id: 2,
    name: "user2",
    photo: ["avatar2.png"],
    title: "Graphic Designer",
  },
  {
    id: 3,
    name: "user3",
    photo: ["profile3.jpg", "portfolio3.jpg"],
    title: "Marketing Specialist",
  },
  {
    id: 4,
    name: "user4",
    photo: [],
    title: "Data Analyst",
  },
  {
    id: 5,
    name: "user5",
    photo: ["image5.jpeg"],
    title: "",
  },
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET single user
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// POST new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    photo: req.body.photo || [],
    title: req.body.title || "",
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
