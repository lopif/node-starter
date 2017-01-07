# Node Starter
A bolierplate for Node.js web applications

### Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run the server: `npm run local`
5. Visit `http://localhost:5000/`

### Directory Structure

```
.
├── README.md
├── app
│   ├── auth
│   ├── db
│   │   ├── migrations
│   │   └── seeds
│   ├── models
│   ├── routes
│   │   ├── api
│   │   │   └── users.js
│   │   └── index.js
│   ├── server.js
│   ├── styles
│   │   └── main.scss
│   └── views
│       └── index.ejs
├── config
├── index.js
├── package.json
├── public
│   ├── scripts
│   │   └── app.js
│   └── styles
│       └── main.css
└── test
```

### Linting

This boilerplate project includes ESLint configuration.

```
npm run lint
```

### Dependencies

* Node 6.3.x or above
* NPM 3.10.x or above
