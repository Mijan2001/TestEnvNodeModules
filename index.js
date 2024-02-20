const app = require("./app");
require("dotenv").config();
const config = require("./config/config");
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`this app is runnig at port : ${PORT}`);
});
