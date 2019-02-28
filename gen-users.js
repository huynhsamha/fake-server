const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=0;i<50;i++) db.push(faker.entity.user())

fs.writeFileSync(path.join(__dirname, './db', 'users.json'), JSON.stringify(db, null, 4))