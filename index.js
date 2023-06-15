
const {scraper} = require("./function");
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/scopus", async (req, res) => {
  try {
    
    const author_scopus = await scraper()

    res.status(200).json({
      meseage: author_scopus ,    
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to extract data",
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
