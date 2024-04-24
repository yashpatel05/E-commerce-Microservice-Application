import React, { createContext, useContext, useState, ReactNode } from "react";

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
}

type CartItem = {
    product: ProductType;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

type Action =
    | { type: "ADD_TO_CART"; payload: { product: ProductType; quantity: number } }
    | { type: "REMOVE_FROM_CART"; payload: { productId: number } };

type ContextType = {
    cart: CartState;
    addToCart: (product: ProductType, quantity: number) => void;
    removeFromCart: (productId: number) => void;
};

const CartContext = createContext<ContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartState>({ items: [] });

    const addToCart = (product: ProductType, quantity: number) => {
        const existingItemIndex = cart.items.findIndex(item => item.product.id === product.id);
    
        if (existingItemIndex !== -1) {
            // If the product already exists in the cart, update its quantity
            const updatedItems = [...cart.items];
            updatedItems[existingItemIndex].quantity += quantity;
            setCart({ items: updatedItems });
        } else {
            // If the product doesn't exist in the cart, add it as a new item
            const newItem: CartItem = { product, quantity };
            setCart(prevCart => ({
                items: [...prevCart.items, newItem]
            }));
        }
    };
    

    const removeFromCart = (productId: number) => {
        setCart(prevCart => ({
            items: prevCart.items.filter(item => item.product.id !== productId)
        }));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
