import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ShoppingCart } from "@mui/icons-material";
export default function ItemCard(props) {
  const { item } = props;
  // Retrieve the cart from localStorage and parse it
  let initialCart = [];
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    try {
      initialCart = JSON.parse(cartData);
    } catch (error) {
      // Handle the case where data in localStorage is not valid JSON
      console.error("Error parsing cart data:", error);
      localStorage.removeItem("cart"); // Remove invalid data
    }
  }
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item) => {
    console.log(item);
    const newItem = {
      name: item.name,
      price: item.price,
      image: item.image,
    };
    const updatedCart = [...cart, newItem];
    console.log(updatedCart);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="m-4">
      <div>
        <div className="flex items-center justify-center">
          <CardMedia
            component="img"
            image={item.image}
            alt="green iguana"
            className="md:max-h-96 ld:max-h-96 max-w-fit"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nisi.
          </Typography>
        </CardContent>
        <div className="flex justify-evenly items-center p-4">
          <button
            className="bg-slate-200 rounded text-black p-2 hover:bg-slate-300"
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to
            <ShoppingCart />
          </button>
          <p>${item.price}</p>
        </div>
      </div>
    </Card>
  );
}
