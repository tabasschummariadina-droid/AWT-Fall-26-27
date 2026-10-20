# Lab Task 1: Product Management API and Employee API

## Student Information

- **Name:** Tabasschum Maria Dina
- **Student ID:** 23-53759-3
- **Section:** E
- **Course:** Advanced Programming in Web Technology

## Project Description

This project contains two REST APIs developed using NestJS, TypeScript, and PostgreSQL.

1. **Product API:** Manages product information.
2. **Employee API:** Manages employee information.

Both APIs support Create, Read, Update, and Delete (CRUD) operations.

## Technologies Used

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman for API testing

## Database Configuration

Create a PostgreSQL database named `krown_dex_db`.

Create a `.env` file in the project root using `.env.example` as a template. Update the database username and password according to your local PostgreSQL configuration.

Do not upload the actual `.env` file.

## Installation and Setup

Make sure Node.js, PostgreSQL, and pnpm are installed.

Install the project dependencies:

```bash
pnpm install
```

Configure the environment variables in `.env`, then start the development server:

```bash
pnpm start:dev
```

The API server runs at:

`http://localhost:5000`

## Product API

Product fields:

- `id`: Automatically generated ID
- `name`: Product name
- `category`: Product category
- `price`: Product price
- `quantity`: Available quantity

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

Example request body:

```json
{
  "name": "Notebook",
  "category": "Stationery",
  "price": 120,
  "quantity": 10
}
```

## Employee API

Employee fields:

- `id`: Automatically generated ID
- `name`: Employee name
- `email`: Employee email
- `phone`: Employee phone number
- `password`: Dummy password for this lab task
- `age`: Employee age
- `yearsOfWorking`: Years of working experience

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

Example request body:

```json
{
  "name": "Rahim Ahmed",
  "email": "rahim@example.com",
  "phone": "01700000000",
  "password": "dummy123",
  "age": 25,
  "yearsOfWorking": 2
}
```

## Testing

The Product and Employee APIs were tested locally for CRUD operations.

The `screenshots/` directory contains the API testing screenshots.

## Project Structure

```text
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

- Do not commit `.env`, `node_modules/`, or `dist/`.
- Use `.env.example` to configure the local environment.
- The employee password is dummy data for educational purposes only.
