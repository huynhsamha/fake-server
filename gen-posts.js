const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=0;i<20;i++) db.push(faker.entity.post())

fs.writeFileSync(path.join(__dirname, './db', 'posts.json'), JSON.stringify(db, null, 4))