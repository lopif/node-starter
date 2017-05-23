# Node Starter
A bolierplate for Node.js web applications

### Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `yarn install` or `npm i`
4. Run the server: `yarn run local` or `npm run local`
5. Visit `http://localhost:5000/`

### Directory Structure

```
.
├── README.md
├── api
│   ├── app.js
│   ├── controllers
│   │   └── UserController.js
│   └── routes
│       ├── index.js
│       └── user.js
├── app
│   ├── config
│   │   ├── db.js
│   │   └── index.js
│   ├── db
│   │   ├── migrations
│   │   └── seeds
│   ├── middlewares
│   │   └── Logger.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   ├── api
│   │   │   └── users.js
│   │   └── index.js
│   ├── server.js
│   └── services
├── index.js
├── package.json
├── test
├── web
│   ├── app.js
│   ├── controllers
│   │   └── SiteController.js
│   ├── public
│   │   ├── assets
│   │   ├── scripts
│   │   │   └── app.js
│   │   └── styles
│   │       └── main.css
│   ├── routes
│   │   └── index.js
│   ├── styles
│   │   └── main.scss
│   └── views
│       ├── layouts
│       │   └── main.hbs
│       ├── pages
│       └── site
│           └── index.hbs
└── yarn.lock
```

### Linting

This boilerplate project includes ESLint configuration.

```
npm run lint
```

### Dependencies

* Node 7.10.x or above
* NPM 4.2.x or above
