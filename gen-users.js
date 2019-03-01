const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=1001;i<=1200;i++) {
    db.push({
        id: i,
        ...faker.entity.user()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'users.json'), JSON.stringify(db, null, 4))