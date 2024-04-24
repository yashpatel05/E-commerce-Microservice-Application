package org._404notfound.adminservice.controller;

import org._404notfound.adminservice.dto.ProductDTO;
import org._404notfound.adminservice.model.Image;
import org._404notfound.adminservice.model.Order;
import org._404notfound.adminservice.model.Product;
import org._404notfound.adminservice.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = adminService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = adminService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {
        Product createdProduct = adminService.createProduct(productDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        adminService.deleteProduct(id);
        return ResponseEntity.ok("Product with id " + id + " deleted successfully");
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDTO updatedProduct) {
        Product product = adminService.updateProduct(id, updatedProduct);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> viewAllOrders() {
        List<Order> orders = adminService.viewAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/images/{imageId}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long imageId) {
        byte[] imageData = adminService.getImageData(imageId);
        if (imageData != null) {
            // Infer the MIME type based on the file extension
            // Assuming all images are in JPEG format for simplicity
            MediaType mediaType = MediaType.IMAGE_JPEG;
            return ResponseEntity.ok().contentType(mediaType).body(imageData);
        } else {
            return ResponseEntity.notFound().build(); // Image data not found
        }
    }

    @PostMapping("/images/add")
    public ResponseEntity<String> addImage(@RequestBody Map<String, String> requestBody) {
        try {
            // Extract the image name from the JSON data
            String imageName = requestBody.get("imageName");

            // Create a new Image object with the provided image name
            Image image = new Image();
            image.setName(imageName);

            // Save the image name to the database
            adminService.saveImage(image);

            return new ResponseEntity<>("Image name added successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add image name", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/images")
    public ResponseEntity<List<Image>> getAllImages() {
        List<Image> images = adminService.getAllImages();
        return ResponseEntity.ok(images);
    }

    @DeleteMapping("/images/{imageId}")
    public ResponseEntity<String> deleteImage(@PathVariable Long imageId) {
        adminService.deleteImage(imageId);
        return ResponseEntity.ok("Image with id " + imageId + " deleted successfully");
    }
}
