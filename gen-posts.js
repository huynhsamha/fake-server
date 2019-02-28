const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=0;i<500;i++) {
    db.push({
        id: i,
        userId: faker.random.number(1, 100),
        ...faker.entity.post()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'posts.json'), JSON.stringify(db, null, 4))