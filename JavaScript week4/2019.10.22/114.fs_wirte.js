const fs = require('fs');

const contents = 'hello\nbye\n안녕';
fs.writeFile('./message.txt', contents);

// fs.write('파일명', '내용')