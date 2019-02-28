# fake-server

🚦Full fake REST APIs for frontend test 🏓 Powered by [JSON Server](https://github.com/typicode/json-server) 🚀🚀

Created with ❤️ for front-end developers who need a quick back-end for prototyping and mocking.

No setup required, available database and REST APIs on heroku.

All features powered by [JSON Server](https://github.com/typicode/json-server)


## Quickstart

+ Clone or download the project
+ Install NPM packages
```
npm install
```
+ Generate your database if you want (optional)
```
npm run gen
```
+ Start `json-server` (Please see `package.json` for more detail)
```bash
npm run start:dev
# or use `npm start`
```

Output:
```
➜ npm start
> json-server --watch db.json

  Resources
  http://localhost:3000/companies
  http://localhost:3000/posts
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

## Available APIs

### Endpoints

Endpoints: `users`, `posts`, `companies`

Examples:

+ http://fakapi.herokuapp.com/users
+ http://fakapi.herokuapp.com/posts
+ http://fakapi.herokuapp.com/companies

### GET one

Examples:
+ http://fakapi.herokuapp.com/users/4
+ http://fakapi.herokuapp.com/posts/7

### Filter

`?[field]=[value]`

Examples:
+ http://fakapi.herokuapp.com/users?id=1
+ http://fakapi.herokuapp.com/users?status=true
+ http://fakapi.herokuapp.com/users?address.country=Japan
+ http://fakapi.herokuapp.com/users?address.country=Japan&status=true
+ http://fakapi.herokuapp.com/posts?userId=5

### Paginate

`_page`, `_limit`

Examples:
+ http://fakapi.herokuapp.com/posts?_page=3
+ http://fakapi.herokuapp.com/posts?_page=3&limit=15

### Sort

`_order`, `_sort`

Examples:
+ http://fakapi.herokuapp.com/users?_sort=userName&&_order=asc
+ http://fakapi.herokuapp.com/users?_sort=userName&&_order=asc&_page=5&limit=20
+ http://fakapi.herokuapp.com/users?_sort=userName,id&_order=desc,asc
+ http://fakapi.herokuapp.com/users?_sort=userName,id&_order=desc,asc&_page=1

### Operators

`_gte`, `_lte`, `_ne`, `_like`

Examples:
+ http://fakapi.herokuapp.com/posts?userId_lte=10&userId_gte=5
+ http://fakapi.herokuapp.com/posts?userId_lte=10&userId_gte=5&_sort=userId
+ http://fakapi.herokuapp.com/posts?userId_ne=5&_sort=userId&_page=2
+ http://fakapi.herokuapp.com/users?email_like=de
+ http://fakapi.herokuapp.com/users?email_like=de&userName_like=de

### Full-text search

`?q=`

Examples:
+ http://fakapi.herokuapp.com/users?q=ala
+ http://fakapi.herokuapp.com/posts?q=pro
+ http://fakapi.herokuapp.com/companies?q=new

### Donate
<a href="https://www.buymeacoffee.com/harisk" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>