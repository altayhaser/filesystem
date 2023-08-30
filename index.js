const fs = require("fs");

fs.writeFile("index.txt", "test1", (err) => {
  if (err) {
    console.log("error on write file" , err);
  }
  console.log("file created");
});

fs.readFile("index.txt", (err, data) => {
    if (err) {
        console.log("error on read file" , err);
    }
    console.log("content of file", data);
});

fs.appendFile("index.txt", "test2", (err) => {
    if (err) {
        console.log("error on append file" , err);
    }
    console.log("file updated");
});


fs.unlink('index.txt', (err) => {
    if (err) {
        console.log("error on delete file" , err);
    } else {
        console.log("file deleted");
    }
});
