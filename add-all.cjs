const git = require('isomorphic-git');
const fs = require('fs');
const path = require('path');

async function addAll(dir) {
  const walk = (d) => {
    let list = [];
    const items = fs.readdirSync(d);
    for (const item of items) {
      if (item === '.git' || item === 'node_modules') continue;
      const fullPath = path.join(d, item);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        list = list.concat(walk(fullPath));
      } else {
        list.push(path.relative(dir, fullPath).replace(/\\/g, '/'));
      }
    }
    return list;
  };

  const files = walk(dir);
  console.log(`Found ${files.length} files to add.`);

  for (const file of files) {
    if (file === '.gitignore') {
        // Special case to ensure .gitignore is added first or handled
    }
    await git.add({ fs, dir, filepath: file });
  }
  console.log('All files added successfully.');
}

addAll(process.cwd()).catch(err => {
  console.error(err);
  process.exit(1);
});
