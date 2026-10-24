const express = require("express");
const userModel = require("./models/user.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await userModel.create({
    username: data.username,
    userID: data.userID,
  });

  res.status(201).json({
    message: "Notes Created Successfully",
  });
});

app.get("/notes", async (req, res) => {
  const data = await userModel.find();

  res.status(200).json({
    message: "Note Fetched Successfully",
    users: data,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findOneAndDelete({
    _id: id
  })

  res.status(200).json({
    message: "Note Deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id
  const username = req.body.username;
  await userModel.findOneAndUpdate({_id: id}, {username : username})

  res.status(200).json({
    message: "Note Updated Successfully",
  });
});

module.exports = app;
