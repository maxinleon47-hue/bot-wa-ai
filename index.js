import express from "express";

const app = express();
app.use(express.json());

// TEST SERVER
app.get("/", (req, res) => {
  res.send("BOT WA AI AKTIF 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("BOT JALAN DI PORT", PORT);
});
