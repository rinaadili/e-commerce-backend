# Backend E-commerce Application README

This repository contains the source code for a e-commerce backend application written in TypeScript.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js, npm, and PostgreSQL installed on your machine.

### Installation

1. Clone this repository to your local machine:
   ```sh
    https://github.com/rinaadili/e-commerce-backend.git
   
2. Navigate to the project directory:
   ```sh
   cd e-commerce-backend
3. Install the dependencies:
   ```sh
   npm install
   

### Configuration
1. Create a `.env` file in the root directory of the project.
2. Add the necessary environment variables to the .env file based on the .env.example file.
3. Create a Postgres database and add the database configuration to the .env file.
4. After creating the database, for creating the tables you only need to run the application once. The tables will be created automatically, since `synchronize` is set to `true` in the datasource options. For production we make sure that `synchronize` is set to `false`.

### Running the Application
#### Production

To build the application from TypeScript source files, use:
```sh
npm run build
```
This will compile TypeScript files into JavaScript files and output them into the 'dist' directory.

To run the application in production mode, use:

```sh
npm start
```

#### Development
```sh
npm run dev
```

## Why TypeORM?

TypeORM was chosen as the ORM for this project for the following reasons:

- **TypeScript Support**: TypeORM is fully compatible with TypeScript, allowing for type-safe database interactions.

- **Cross-Database Support**: TypeORM supports multiple relational databases including PostgreSQL, MySQL, MariaDB, SQLite, and others.

## Simplifying Database Interactions for E-commerce

In the context of an e-commerce application, TypeORM simplifies database interactions in several ways:

- **Entity Modeling**: TypeORM allows developers to define entities that represent database tables. This abstraction simplifies database operations by providing an object-oriented interface to interact with database entities. For example, a `Product` entity can directly map to a `products` table in the database, making it easy to perform CRUD operations on products.
- **Transaction Support**: TypeORM supports transactions, which are essential for maintaining data integrity in complex database operations. In an e-commerce application, transactions can be used to ensure that multiple database operations (such as updating inventory and processing orders) are performed atomically.
- **Query Builder**: TypeORM provides a query builder API that allows developers to construct complex database queries in a simple way.

Some of these features were not used in this project, but they demonstrate role of TypeORM in simplifying database interactions for e-commerce applications.

## Product Variants Logic
In an e-commerce application, products often come with variants such as size, color, or style. In my application, a variant consists of a unique color and size combination. 

Each product can have multiple variants, and each variant can have its own quantity.

When a product is created, a unique barcode is generated and assigned to the product. Each variant of the product inherits the same barcode, adding one more digit to the end of it. This allows for easy tracking of inventory. 

## Postman Collection

The link to the Postman Collection where you can find all the endpoints is [here](https://api.postman.com/collections/18622322-2bf0cccb-f882-4abc-a8e1-1ffa496633b6?access_key=PMAT-01HXPRP5PE7PSV5W4EWSS5ZQ0H).

### Creating a product

In order to create a product with its variants, you need to first create a category, color and size. Then, you can create a product with its variants in the /create-product endpoint. 

 I have provided the endpoints for creating a category, color and size in the Postman Collection.