const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=3001;i<=3050;i++) {
    db.push({
        id: i,
        ...faker.entity.company()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'companies.json'), JSON.stringify(db, null, 4))