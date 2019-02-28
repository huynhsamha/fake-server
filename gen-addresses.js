const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=4001;i<=4050;i++) {
    db.push({
        id: i,
        ...faker.entity.address()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'addresses.json'), JSON.stringify(db, null, 4))