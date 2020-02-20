# Data Peace A.I .Technology Backend Developer Assignment

## Problem Statement

Create REST APIs using Python (Flask, Django, any other web framework of your choice) for managing the user’s data. You can use database(i.e SQL, NOSQL) of your choice to store the data. Take sample data from here.

User should have the following attributes:-

- ID
- First Name
- Last Name
- Company Name
- Age
- City
- State
- Zip
- Email
- Web

## Overview

Assignment provided by Data Peace AI technology on 18th of February, 5:00 PM to me (Aditya Priyam). The task was to be finished within 48 hours with utmost carefulness and attention to detail. The link to the task is:

- https://docs.google.com/document/d/17caULJaphkkb3ktTmx1dSOdeESUwGBxLNszcEw4XFUY/edit#

## Requirements for the software

- Node JS
- Git Bash

## Installation

Clone the repository and install the dependencies. Follow the commands given below to complete the installation process.

```
$ git clone https://github.com/iAmPriyam/datapeace-backend-assignment
$ cd datapeace-backend-assignment
$ npm install
$ node index
```

The terminal will be prompted with the following messages:

```
App is listening on port 5000
Connected to database
```

The server is now running on the localhost at `port 5000`:

This will a `status:200` along side a JSON with a msg _"User route working"_

## Usage

The services of the applications are routed at a single endpoint via different method. All the endpoints of this application is exposed at `/api/users`

### GET

> **Available at** `GET:api/user` \
> **Description** To be used to retrieve the list of the users on different criterias

| Method | Parameter type | Parameter value           | Success Status code | Result                                                                                 |
| ------ | -------------- | ------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| GET    | Blank          | None                      | 200                 | 5 entries from the top of the table                                                    |
| GET    | Query          | Paging, Limit, Name, Sort | 200                 | Entries of 'limit' number having 'name' as substring in their firstname and last name' |
| GET    | Param          | ID                        | 200                 | Entry of the user with the given ID                                                    |

### POST

> **Available at** `POST:api/user` \
> **Description** To create new user entry in the database on the basis of the JSON value submitted to the url

| Method | Parameter type               | Parameter value                                                            | Success Status code | Result                                               |
| ------ | ---------------------------- | -------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------- |
| POST   | Body (x-www-form-urlencoded) | id, first name, last_name, company_name, city, state, zip, email, web, age | 201                 | Entry of a user in the database with the given value |

### PUT

> **Available at** `PUT:api/user` \
> **Description** To update the details of an existing user using it's ID.

| Method | Parameter type | Parameter value                                       | Success Status code | Result                                  |
| ------ | -------------- | ----------------------------------------------------- | ------------------- | --------------------------------------- |
| PUT    | Param + Body   | _id_ (through header) and payload _JSON_ through body | 200                 | The resultant updated entry of the user |

### DELETE

> **Available at** `DELETE:api/user` \
> **Description** To delete the details of an existing user from the database using it's ID.

| Method | Parameter type | Parameter value | Success Status code | Result                                                |
| ------ | -------------- | --------------- | ------------------- | ----------------------------------------------------- |
| DELETE | Param          | _id_            | 200                 | The resultant entry will be deleted from the database |
