const fs = require('fs');
const path = require('path');
const fakerator = require('fakerator');
const faker = fakerator();

const db = []
let id = 5000;

for (let i=2001;i<=2200;i++) { // loop posts
    const num = faker.random.number(0, 15);
    for (let j=0;j<num;j++) {
        db.push({
            id: ++id,
            userId: faker.random.number(1001, 1200),
            postId: i,
            createdAt: faker.date.recent(50),
            content: j%4!=0 ? faker.lorem.sentence() : faker.lorem.paragraph()
        })
    }
}

fs.writeFileSync(path.join(__dirname, './db', 'comments.json'), JSON.stringify(db, null, 4))