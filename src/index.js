const { server } = require("./server/server.js");

const PORT = process.env.PORT || 3000;
const app = server();
app.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
