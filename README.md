# marketplace-backend

## Base URL https://buildweekproject.herokuapp.com

## Auth

### POST (Register)
<details>
    <summary>https://buildweekproject.herokuapp.com/api/auth/register</summary>

    Body Requirements:

    username (string) (required)
    password (string) (required)
    user_picture (string) (optional)
    market_id (integer) (required)

    You will recieve a registered user object.

    Example Result:

    { 
        "user_id": 3,
        "username": "neville",
        "password": "$2a$08$eVblG7WByjvUTGkXnJVQKOD2E9w34DV1I0MDJ9CTlLfkpCu/UOAju",
    }
</details>

### POST (Login)
<details>
    <summary>https://buildweekproject.herokuapp.com/api/auth/login</summary>

    Body Requirements:

    username (string) (required)
    password (string) (required)

    You will recieve a welcome back message with the user's token.

    Example Result:

    {
        "message": "neville is back!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5ldmlsbGUiLCJpYXQiOjE2MjczMTgyNzcsImV4cCI6MTYyNzQwNDY3N30.-fR-iAg5RggE9HpWAScdHxlxwknxw7wx0nMxGgQbqpI"
    }
</details>

## Users

### GET

<details>
    <summary>https://buildweekproject.herokuapp.com/api/users</summary>

    You will recieve an array of user objects.

    Example Result:

    [
      { 
        username: 'harry',
        password: '1234',
        user_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
        "created_at": "2021-07-25T23:36:57.454Z",
        "updated_at": "2021-07-25T23:36:57.454Z"
      },
      { 
        username: 'hermione',
        password: '1234',
        user_picture: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301',
        "created_at": "2021-07-25T23:36:57.454Z",
        "updated_at": "2021-07-25T23:36:57.454Z"
      }
    ]
    
</details>

### POST
<details>
    <summary>https://buildweekproject.herokuapp.com/api/items</summary>

    Body Requirements:

    username (string) (required)
    password (string) (required)
    user_picture (string) (optional)

</details>

### PUT
<details>
    <summary>https://buildweekproject.herokuapp.com/api/users/:id</summary>

    Body Update Options:

    username (string)
    password (string)
    user_picture (string)

    You will recieve a an updated user object.

    Example Result:

    {
        "user_id": 2,
        "username": "barry",
        "user_picture": "picture.url",
    }

</details>

### DELETE
<details>
    <summary>https://buildweekproject.herokuapp.com/api/users/:id</summary>

    You will recieve an object containing data from the deleted user.

    Example Result:

    {
        "user_id": 1,
        "username": "harry",
        "password": "1234",
        "user_picture": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
        "created_at": "2021-07-29T03:14:40.713Z",
        "updated_at": "2021-07-29T03:14:40.713Z",
    }
    
</details>


## Items

### GET
<details>
    <summary>https://buildweekproject.herokuapp.com/api/items</summary>

    You will recieve an array of item objects.

    Example Result:

    [
        {
            item_id: 1,
            item_name: 'Eggs',
            item_category: 'Animal Products',
            item_price: 2,
            item_description: 'Fresh, organic, cage-free eggs',
            market_id: 1
        },
        {
            item_id: 2,
            item_name: 'Ham',
            item_category: 'Animal Products',
            item_price: 8.50,
            item_description: 'Fresh, organic, cage-free ham',
            market_id: 1
        }
    ]

</details>

### POST

<details>
    <summary>https://buildweekproject.herokuapp.com/api/items</summary>

    Body Requirements:

    item_name (string) (required)
    item_category (string) (required)
    item_price (float) (required)
    item_description (string) (required)
    market_id (integer) (required)

</details>

### PUT
<details>
    <summary>https://buildweekproject.herokuapp.com/api/items/:id</summary>

    Item Update Options:

    item_name (string)
    item_category (string)
    item_price (float)
    item_description (string)
    market_id (integer)

    You will recieve a an updated item object.

    Example Result:

    {
        item_id: 2,
        item_name: Eggs,
        item_category: Animal Products,
        item_price: 3000,
        item_description: Fresh, organic, cage-free eggs,
        market_id: 1
    }

</details>

### DELETE
<details>
    <summary>https://buildweekproject.herokuapp.com/api/items/:id</summary>

    You will recieve an object containing data from the deleted item.

    Example Result:

    {
        item_id: 1,
        item_name: Eggs,
        item_category: Animal Products,
        item_price: 2,
        item_description: Fresh, organic, cage-free eggs,
        market_id: 1
    }
    
</details>

## Markets

### GET
<details>
    <summary>https://buildweekproject.herokuapp.com/api/markets</summary>

    You will recieve an array of market objects.

    Example Result:

    [
        {
            market_id: 1,
            market_name: South Africa
        },
        {
            market_id: 2,
            market_name: Middle Africa
        },
        {
            market_id: 3,
            market_name: East Africa
        },
        {
            market_id: 4,
            market_name: West Africa
        },
        {
            market_id: 5,
            market_name: North Africa
        }
    ]
    
</details>

## Need some dummy data?

https://buildweekproject.herokuapp.com/api/users/userDummyData
https://buildweekproject.herokuapp.com/api/items/itemDummyData

## Market Legend

Each market_id corresponds to a different region in Africa:

1 = South Africa

2 = Middle Africa

3 = East Africa

4 = West Africa

5 = North Africa







## Build Week Scaffolding for Node and PostgreSQL

## Video Tutorial

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://img.youtube.com/vi/kTO_tf4L23I/maxresdefault.jpg)](https://www.youtube.com/watch?v=kTO_tf4L23I)

## Requirements

- [PostgreSQL, pgAdmin 4](https://www.postgresql.org/download/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed in your local machine.
- A Heroku app with the [Heroku PostgreSQL Addon](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres) added to it.
- Development and testing databases created with [pgAdmin 4](https://www.pgadmin.org/docs/pgadmin4/4.29/database_dialog.html).

## Starting a New Project

- Create a new repository using this template, and clone it to your local.
- Create a `.env` file and follow the instructions inside `knexfile.js`.
- Fix the scripts inside `package.json` to use your Heroku app.

## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

## Hot Tips

- Figure out the connection to the database and deployment before writing any code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- If your frontend devs are clear on the shape of the data they need, you can quickly build provisional endpoints that return mock data. They shouldn't have to wait for you to build the entire backend.

- Keep your endpoints super lean: the bulk of the code belongs inside models and other middlewares.

- Validating and sanitizing client data using a library is much less work than doing it manually.

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin in their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.
