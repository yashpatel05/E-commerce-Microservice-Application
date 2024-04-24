# E-commerce Microservice Application

This project implements a basic e-commerce application using microservices architecture with Spring Framework in Java. The application allows users to browse products, view product details, add products to a cart, and complete purchases. The microservices are containerized using Docker, and communication between them is managed via REST APIs and Kafka.

## Functional Requirements

### Frontend

**Branch Name:-** [Frontend](https://github.com/yashpatel05/E-commerce-Microservice-Application/tree/frontend)

A simple user interface (UI) is provided for users to interact with the application. Users can:

- Browse products
- View product details
- Add products to cart
- Complete purchases

### Backend

**Branch Name :-** [main](https://github.com/yashpatel05/E-commerce-Microservice-Application/tree/main)

### Products Service

Manages product information including name, description, price, image id, and stock availability. Endpoints include:

- Create product
- Delete product
- Fetch all products
- Fetch product by ID
- Update product

### Admin Service

Manages admin operations such as creating, deleting, viewing, and updating products. Admins can also view all orders. Admin operations can be performed via Postman. Endpoints include:

- Create product
- Delete product
- Fetch all products
- Fetch product by ID
- Update product
- Create image
- Get all images
- Fetch image by ID
- Delete image
- Fetch all orders

### Orders Service

Processes customer orders including receiving product selections and quantities, calculating total price, and updating product stock. Endpoints include:

- Create order
- Delete order
- Fetch all orders
- Fetch order by ID

### Image Service

Retrieves product images based on image ID. Endpoints include:

- Create image
- Fetch image by ID

## Technical Requirements

### Microservices

Separate, independent microservices are developed for Products, Orders, Admin, and Image using Spring Framework.

### Containerization

Docker containers are utilized for each microservice and their respective databases.

### API Gateway

An API Gateway is implemented to manage external requests and route them to appropriate microservices, hiding internal service endpoints.

### Database

Separate Docker containers are used for each microservice's database. MySQL is chosen as the database.

### Communication

- RESTful APIs are used for communication between the API Gateway and microservices.
- Kafka is used for asynchronous communication between microservices when processing orders.

## Deployment

Docker Compose is used to simplify deploying all microservices and their databases as a single unit.

## Testing Routes

### Product Service

Access product service endpoints through the gateway:

- **Test GET all products:** `http://localhost:8080/products`
- **Test GET product by ID:** `http://localhost:8080/products/{id}`
- **Test POST create product:** `http://localhost:8080/products` (with JSON body)
- **Test DELETE delete product:** `http://localhost:8080/products/{id}`
- **Test PUT update product:** `http://localhost:8080/products/{id}` (with JSON body)

### Order Service

Access order service endpoints through the gateway:

- **Test GET all orders:** `http://localhost:8080/orders`
- **Test GET order by ID:** `http://localhost:8080/orders/{id}`
- **Test POST create order:** `http://localhost:8080/orders` (with JSON body)
- **Test DELETE delete order:** `http://localhost:8080/orders/{id}`

### Admin Service

Access admin service endpoints through the gateway:

- **Test GET all products:** `http://localhost:8080/admin/products`
- **Test GET product by ID:** `http://localhost:8080/admin/products/{id}`
- **Test POST create product:** `http://localhost:8080/admin/products` (with JSON body)
- **Test DELETE delete product:** `http://localhost:8080/admin/products/{id}`
- **Test PUT update product:** `http://localhost:8080/admin/products/{id}` (with JSON body)
- **Test GET all orders:** `http://localhost:8080/admin/orders`
- **Test POST create image:** `http://localhost:8080/admin/images/add` (with JSON body)
- **Test GET all images:** `http://localhost:8080/admin/images`
- **Test GET image by ID:** `http://localhost:8080/admin/images/{imageId}`
- **Test DELETE delete image:** `http://localhost:8080/admin/images/{imageId}`

### Image Service

Access image service endpoint through the gateway:

- **Test POST create image:** `http://localhost:8080/images/add` (with JSON body)
- **Test GET image by ID:** `http://localhost:8080/images/{imageId}`

### Author

- **Yash Patel :** `N01537676`
