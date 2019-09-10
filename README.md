# node-export-dir
Export contents of a given directory

## Usage  

### Require the contents of a directory  
```javascript
// somedir/index.js
const exportDir = require(`node-export-dir`);
module.exports = exportDir();
// or…
module.exports = require(`node-export-dir`)();
```

### Require the contents of another directory  
If you wanted to do this for some reason.  
```javascript
// otherdir/index.js
// Using optional path
const exportDir = require(`node-export-dir`);
module.exports = exportDir(`${__dirname}/../somedir`);
```

### Example Directory Structure  
```bash
tree test
test
├── path0
│   ├── index.js
│   ├── p0file0.js
│   ├── p0file1.json
│   ├── p0file2.json
│   └── p0file3.js
├── path1
│   ├── index.js
│   ├── p1file0.js
│   ├── p1file1.txt
│   ├── p1file2.jpg
│   └── p1file3.md
└── path2
    ├── index.js
    └── p2file0.js
```

## Development  
```bash
npm test
```
