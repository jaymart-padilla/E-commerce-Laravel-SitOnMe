# E-commerce Project for ELEC 1 | SitOnMe 🪑

## Setup

### Database

-   Create a new database named `laravel_ecommerce`.
-   Configure the database connection settings in the `.env` file.

### .env File Setup

-   Create a new .env file in the root directory
-   Copy and paste .env.example contents to your .env file
-   You can adjust .env variable values to your needs
-   Run these commands

```bash
php artisan key:generate
php artisan config:cache
```

### Laravel Commands

```bash
php artisan migrate --path=database/migrations/2023_04_07_085718_create_payment_methods_table.php
php artisan migrate
php artisan db:seed
php artisan serve
```

### Node Commands:

```bash
npm install
npm run dev
```

## User's Account Sample

Use the following credentials to access a sample user account:

-   Name: Lorem Ipsum
-   Address: Bolaney, Alaminos City, Pangasinan
-   Email: lorem@gmail.com
-   Password: 123123123

## Super/Head Admin's Account

Use the following credentials to access the super/head admin account:

-   Name: Head Admin
-   Address: Bolaney, Alaminos City, Pangasinan
-   Email: SitOnMe@gmail
-   Password: 123123123

Feel free to fork this code and customize it to suit your specific needs. 🐱‍👤
