const http = require("http");
const { runInNewContext } = require("vm");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.end("Welcome to our About Page");
  } else {
    res.write(`<h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back to home</a>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Server is running at ${5000}`);
});
