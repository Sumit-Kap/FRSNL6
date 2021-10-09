const url = require("url");

const newUrl = new URL("http://google.com:8000/my-page?data=abc&res=pqr");

console.log(newUrl.searchParams);
