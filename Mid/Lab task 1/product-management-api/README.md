# Lab Task 1: Product Management API and Employee API

## Student Information

- **Name:** Tabasschum Maria Dina
- **Student ID:** 23-53759-3
- **Section:** E
- **Course:** Advanced Programming in Web Technology

## Project Overview

As part of this lab task, two REST APIs have been developed using NestJS, TypeScript, and PostgreSQL. The Product API has been created to manage product information, while the Employee API has been developed to manage employee information.

Create, Read, Update, and Delete (CRUD) operations have been implemented for both APIs.

## Technologies Used

The following technologies have been used in this project:

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman

## Database Configuration

A PostgreSQL database named `krown_dex_db` is used for this project.



## Installation and Setup

Before running the project, Node.js, PostgreSQL, and pnpm should be installed.

The project dependencies can be installed by running the following command in the project directory:

bash
pnpm install


After the environment variables have been configured, the development server can be started using:

bash
pnpm start:dev


The API server is available at:

`http://localhost:5000`

## Product API

The Product API has been developed to manage product information.

The following fields are included:

- `id`: A unique ID generated automatically for each product
- `name`: The name of the product
- `category`: The category of the product
- `price`: The price of the product
- `quantity`: The available quantity of the product

The following endpoints have been implemented:

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| POST | `/products` | A new product is created |
| GET | `/products` | All products are retrieved |
| GET | `/products/:id` | A product is retrieved by ID |
| PATCH | `/products/:id` | Product information is updated |
| DELETE | `/products/:id` | A product is deleted |

Example request body:

json
{
  "name": "Notebook",
  "category": "Stationery",
  "price": 120,
  "quantity": 10
}


## Employee API

The Employee API has been developed to manage employee information.

The following fields are included:

- `id`: A unique ID generated automatically for each employee
- `name`: The name of the employee
- `email`: The email address of the employee
- `phone`: The phone number of the employee
- `password`: A dummy password used for this lab task
- `age`: The age of the employee
- `yearsOfWorking`: The employee's years of working experience

The following endpoints have been implemented:

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| POST | `/employees` | A new employee is created |
| GET | `/employees` | All employees are retrieved |
| GET | `/employees/:id` | An employee is retrieved by ID |
| PATCH | `/employees/:id` | Employee information is updated |
| DELETE | `/employees/:id` | An employee is deleted |

Example request body:

json
{
  "name": "Karim Hasan",
  "email": "karim@example.com",
  "phone": "01812345678",
  "password": "dummy123",
  "age": 25,
  "yearsOfWorking": 2
}


## API Testing

Both APIs were tested locally using Postman. The create, retrieve, update, and delete operations were checked for products and employees.

Screenshots of the API requests and responses have been included in the `screenshots/` directory as evidence of the testing process.

## Project Structure

text
product-management-api/
├── screenshots/
├── src/
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md
├── nest-cli.json
└── tsconfig.json
```

## Notes

- The `.env` file should be kept private and should not be committed to GitHub.
- The `.env.example` file has been included to show the required environment variables.
- The employee password is used as dummy data for educational purposes.

