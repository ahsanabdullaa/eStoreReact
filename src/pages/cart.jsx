import React, { useState, useEffect } from "react";

export default function Cart() {
  // Initialize cart state with an empty array
  const [cart, setCart] = useState([]);

  // Initialize total price and total quantity state variables
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Retrieve cart data from localStorage and parse it
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);

    // Calculate total price and total quantity when cart changes
    let totalPrice = 0;
    let totalQuantity = 0;
    for (const item of cartData) {
      totalPrice += item.price;
      totalQuantity += 1; // Assuming each item has a quantity of 1, you can modify this based on your data structure
    }
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  }, [cart]); // This effect runs when the component mounts and whenever the cart changes

  const handleDeleteItem = (index) => {
    // Create a copy of the current cart, remove the item at the specified index, and update state and localStorage
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="mt-20">
      <h1 className="text-black text-2xl font-semibold mb-4">Cart</h1>
      <div>
        <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
        <div className="m-10 flex justify-center">
          <ul className="divide-y divide-gray-200 shadow-lg m-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 py-2 bg-gray-100 mt-2 w-80"
              >
                <div className="w-16 h-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold p-2">{item.name}</h3>
                  <div className="flex-grow flex-row justify-between">
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-lg font-semibold mb-2">
          Total Quantity: {totalQuantity}
        </div>
        <div className="text-lg font-semibold mb-2">
          Total Price: ${totalPrice.toFixed(2)}{" "}
          {/* Format to two decimal places */}
        </div>
      </div>
    </div>
  );
}
