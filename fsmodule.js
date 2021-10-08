//const fs=require('fs');
//fs.readFile('file.txt','utf8',err,data)=>{
    //console.log(err,data)
//}
/*
import { readFile } from 'fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});*/
/*
import { stat } from 'fs';

const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  stat(pathsToCheck[i], (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
  });
}*/
import { readFileSync } from 'fs';

// macOS, Linux, and Windows
readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
readFileSync('<directory>'); // => <data>