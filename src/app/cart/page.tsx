'use client';
import { useCart } from "@/context/CartContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface OrderItem {
    product: {
        id: number;
        name: string;
    };
    quantity: number;
}

interface OrderDetails {
    id: number;
    orderDate: string;
    totalPrice: number;
    orderItems: OrderItem[];
}

const ViewCart = () => {
    const { cart, removeFromCart } = useCart();
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null); // Define type for orderDetails
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            const orderItems = cart.items.map(item => ({
                productId: item.product.id,
                quantity: item.quantity
            }));
            const response = await axios.post<OrderDetails>("http://localhost:8082/orders", {
                orderItems
            });
            setOrderDetails(response.data); // Store order details in state
            setShowCheckoutPopup(true); // Show checkout popup
            clearCart();

        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    const handleEditQuantity = (id: number) => {
        removeFromCart(id)
        let productId = id;
        router.push(`/products/${productId}`)
    };

    const clearCart = () => {
        cart.items.forEach(item => removeFromCart(item.product.id));
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mb-8"><u>Your Cart</u></h1>
            {cart.items.length > 0 ? (
                <div>
                    {cart.items.map((cartItem, index) => (
                        <div key={index} className="border rounded-lg p-4 mb-4">
                            <div className="flex items-center">
                                <img src={`/images/${cartItem.product.image.name}`} alt={cartItem.product.name} className="w-20 h-20 mr-4 rounded-full" />
                                <div>
                                    <b><p>{cartItem.product.name}</p></b>
                                    <p>Quantity: {cartItem.quantity}</p>
                                    <p>Price: {cartItem.product.price}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={() => handleEditQuantity(cartItem.product.id)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Edit</button>
                                <button onClick={() => removeFromCart(cartItem.product.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-3xl font-semibold text-center mb-8">Cart is Empty.</p>
            )}
            {cart.items.length !== 0 && (
                <div className="text-center">
                    <button onClick={handleCheckout} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Checkout</button>
                </div>
            )}
            {showCheckoutPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Order Details</h2>
                        {orderDetails && (
                            <div className="text-gray-700">
                                <p className="mb-4"><span className="font-semibold">Order ID:</span> {orderDetails.id}</p>
                                <p className="mb-4"><span className="font-semibold">Order Date:</span> {orderDetails.orderDate}</p>
                                <p className="mb-6"><span className="font-semibold">Total Price:</span> ${orderDetails.totalPrice.toFixed(2)}</p>
                                <h3 className="text-xl font-semibold mb-2">Order Items:</h3>
                                {orderDetails.orderItems.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="mb-1"><span className="font-semibold">Product Name:</span> {item.product.name}</p>
                                        <p className="mb-1"><span className="font-semibold">Quantity:</span> {item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button onClick={() => setShowCheckoutPopup(false)} className="px-4 py-2 bg-blue-500 text-white text-center rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
