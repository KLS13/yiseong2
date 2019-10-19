const fs = require('fs');

const openFileAndPirnt = path => fileName => fs.readFile(path +
fileName, (err,data) => {
    if(err) throw err;
    console.log(data.toString());
});

const thisDirOpenFileAndPrint = openFileAndPirnt('./');
const otherDirOpenFileAndPrint = openFileAndPirnt('../');

thisDirOpenFileAndPrint('104_curring_exmple.js');
otherDirOpenFileAndPrint('WebstormProjects ');