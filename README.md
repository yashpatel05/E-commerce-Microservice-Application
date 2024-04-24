# E-commerce Microservice Application - Frontend

This branch contains the frontend code for the E-commerce Microservice Application. The frontend is developed using Next.js, a React framework, and provides a user interface for browsing products, viewing product details, managing cart, and placing orders.

## Features

- Browse products
- View product details
- Add products to cart
- Remove products from cart
- Place orders

## Getting Started

To run the frontend locally, follow these steps:

1. Clone this repository to your local machine.
2. Switch to the `frontend` branch.
3. Navigate to the `E-commerce-Microservice-Application` directory.
4. Install dependencies by running `npm install`.
5. Start the development server by running `npm run dev`.
6. Access the frontend application at `http://localhost:3000`.

## Folder Structure

The frontend codebase follows a standard Next.js project structure:

- `E-commerce-Microservice-Application`
  - `public`: Contains static assets such as images and stylesheets.
	  - `images`: Directory for image files used in the application.
	  - `styles`: Directory for CSS stylesheets used in the application.
  - `src`: Contains the source code of the frontend application.
	  - `app`: Directory for Next.js pages.
	  - `components`: Directory for reusable React components used throughout the application.
  - `...`: Other directories and files.

## Usage

Once the frontend server is running, you can access the application in your web browser. Here are some key endpoints:

- Home: `/` - Displays project description and team members' names
- All Products Details: `/products` - Displays all available products.
- Specific Product Detail: `/products/[productId]` - Displays details of a specific product.
- Cart: `/cart` - Displays the current cart contents and allows users to manage items.
- Checkout: `/checkout` - Allows users to place orders.

## Author

- **Yash Patel :** `N01537676`
