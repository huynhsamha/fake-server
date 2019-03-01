const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
for (let i=2001;i<=2600;i++) {
    db.push({
        id: i,
        userId: faker.random.number(1001, 1200),
        ...faker.entity.post()
    })
}

fs.writeFileSync(path.join(__dirname, './db', 'posts.json'), JSON.stringify(db, null, 4))