import { React, useState } from "react";
import ItemCard from "../components/itemCard";
import { Divider, TextField, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import data from "../data";
export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data.products);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    setSearchQuery(query);

    const filteredData = data.products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredData);
  };
  return (
    <div className="container  mx-auto mt-20">
      <div className="m-10">
        <Divider textAlign="center" className="text-black text-4xl">
          SHOP
        </Divider>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 m-2">
          <TextField
            label="Search Items"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* <div className="rounded h-10 bg-slate-300 hover:bg-slate-300"> */}
        <Button onClick={handleSearch}>
          <SearchIcon className="text-black" />
        </Button>
        {/* </div> */}
      </div>
      <div className="flex justify-evenly align-items-center flex-wrap">
        {filteredData.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
