const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=0;i<50;i++) {
    db.push({
        id: i,
        ...faker.entity.company()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'companies.json'), JSON.stringify(db, null, 4))