"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "@/context/CartContext";

type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: {
        id: number;
        name: string;
    };
};


export default function ProductDetails({ params }: { params: { productId: number } }) {
    const { productId } = params;
    const [product, setProduct] = useState<ProductType | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart } = useCart(); // Access addToCart function from CartContext
    const router = useRouter();

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    const handleAddToCart = () => {
        if (product && quantity > 0) { // Ensure quantity is greater than 0
            addToCart(product, quantity); // Pass the current quantity to addToCart
            alert("Item added to cart successfully!");
        } else {
            console.log('No product or invalid quantity');
        }
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 1 && product && typeof product.stock !== 'undefined' && value <= product.stock) {
            setQuantity(value);
        }
    };    

    const increaseQuantity = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, product?.stock || 1));
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4">
            <Link href="/products" className="block mt-4 text-blue-500 hover:underline">
                &lt; Back
            </Link>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                <img className="h-60 w-60 mb-4" src={`/images/${product.image.name}`} alt={`${product.image.name} image`} />
                <div className="p-6">
                    <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-2"><b>Description: </b>{product.description}</p>
                    <p className="text-gray-700 mb-2"><b>Price: </b>${product.price}</p>
                    <p className="text-gray-700 mb-2"><b>Stock: </b>{product.stock}</p>
                    <div className="flex justify-between items-center mt-6 mb-4">
                        <div>
                            <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                                -
                            </button>
                            <input type="number" className="mx-3 w-16 text-center" value={quantity} onChange={handleQuantityChange} />
                            <button onClick={increaseQuantity} className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                                +
                            </button>
                        </div>
                        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}