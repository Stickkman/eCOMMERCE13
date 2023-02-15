# eCOMMERCE

An app for the back end of a e-commerce website that uses sequelize to interact with your mysql database. 

![License Type](https://shields.io/badge/license-MIT-blue)
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots-Videos](#screenshots-videos)


## Description
This app uses Node, Express, Dotenv, and Sequelize to interact with a MySql database.  With the use of .env files it keeps your login credentials secure.  The database is synced up automatically with the server once it is started.  Currently there is test data in the seeds folder that can be modified to suit your needs.  The routes are organized by in the api folder to keep things clean.  This application is useful for quickly creating, reading, updating, and deleting data in the working database that can be used for the backend of an e-commerce site and is scalable due to its design.

## Screenshots-Videos
Video Demonstration
 [*Video Demo Link*](https://drive.google.com/file/d/1XDwfPFmLvDp-3xTJvxMkeiRTxnJDZ7Hg/view)

ScreenShots Below

![Application Demo Screenshot1](https://github.com/Stickkman/eCOMMERCE13/blob/main/assets/screenshots/screenshot01.jpg?raw=true)

![Application Demo Screenshot2](https://github.com/Stickkman/eCOMMERCE13/blob/main/assets/screenshots/screenshot02.jpg?raw=true)

## Installation

1. Use 'npm install' from your preferred CLI to install dependencies. 
2. If you need to change database logins, users, etc, edit the .env file after install.
3. Open up the CLI and type 'mysql - u root -p' to login to mysql.
4. Type 'source./db/schema.sql' to create the database.
5. Type 'use ecommerce_db' to select the database for use.

6. To automatically seed the database with sample data type 'npm run seed'
7. Once seeded you can 'SELECT * ' followed by table name to see the sample data.
8. Type 'node server.js' to start the server.

From here you would switch over to Insomnia and run your create, read, update, or delete
api routes accordingly to manipulate the data.

## Usage

After installation, simply fire up Insomnia (or your preferred program) to start manipulating the data.
- You can Read all products/categories/tags by running GET commands, or a single one by id.
- You can Create products/categories/tags by running POST commands.
- You can Update products/categories/tags by running PUT commands with the associated id.
- You can Delete products/categories/tags by running DEL commands by the associated id.

All methods have validation checks built in to prevent mistakes.

## License
This license is covered under the MIT
 for more information visit https://mit-license.org/

## Contributing
If you would like to contribute please send me an email.

## Tests
Validation checks are built in to ensure unique keys, prevent duplicates, etc.

## Questions
Any questions regarding this repo can be sent to me directly at Stickkman@gmail.com

Github Username: Stickkman

Github Profle Link: (https://github.com/Stickkman)





