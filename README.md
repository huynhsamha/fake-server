# fake-server

Full fake REST APIs for frontend test. Powered by JSON Server

## Quickstart

+ Clone project
+ Install packages
```
npm install
```

+ Generate database (optional)
```
npm run gen
```

+ Start `json-server`
```
npm start
```

Output:
```
➜ npm start
> json-server --watch db.json


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/companies
  http://localhost:3000/posts
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```