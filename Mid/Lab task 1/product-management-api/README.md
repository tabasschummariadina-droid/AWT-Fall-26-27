# Lab Task 1: Product and Employee API

## Student Information

- **Name:** Tabasschum Maria Dina
- **Student ID:** 23-53759-3
- **Section:** E
- **Course:** Advanced Programming in Web Technology

## Introduction

In this lab task, two APIs have been developed using NestJS, TypeScript, and PostgreSQL. One API is used to manage products, and the other is used to manage employees.

CRUD operations have been implemented for both APIs.

## Technologies Used

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman

## Database Setup

A PostgreSQL database named `krown_dex_db` is used.

## How to Run the Project

First, install the required dependencies:

```bash id="45okfk"
pnpm install
```

Then, configure the `.env` file and start the server:

```bash id="8wd3nj"
pnpm start:dev
```

The server runs at:

`http://localhost:5000`

## Product API

The following information is stored for each product:

- ID
- Name
- Category
- Price
- Quantity

The following operations are supported:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Employee API

The following information is stored for each employee:

- ID
- Name
- Email
- Phone
- Password (dummy data)
- Age
- Years of working experience

The following operations are supported:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## Testing

Both APIs were tested using Postman. All CRUD operations were checked, and screenshots of the requests and responses were saved in the `screenshots/` folder.

## Project Structure

```text id="5h9vmb"
product-management-api/
├── screenshots/
├── src/
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```
