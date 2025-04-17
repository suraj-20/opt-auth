const app = require("./apiRoute");
const port = process.env.PORT || 3000;
const AppError = require("./utils/appError");

app.get("/", (req, res) => {
  return res.send("Hello Developer!");
});

// app.all("*", async (request, response, next) => {
//   return response.status(404).json({
//     success: false,
//     message: "Can't find " + request.originalUrl + " on this server",
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
