// # reads a JavaScript file ,requiring path and fs modules
const fs = require("fs");
const path = require("path");

// 1# create file
// fs.writeFileSync('notes.txt', 'my name is Jawad')

// 2# copy file
// fs.copyFileSync('notes.txt','notesCopy.txt',1)

// 3# rename file
// fs.renameSync('notes.txt','renamedNotes.txt')

// 4# get a list of the files
//joining path of directory
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});
