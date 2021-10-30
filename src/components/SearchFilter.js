import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://dev-cognitive-dashboard-server.herokuapp.com/techtest"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {product
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return <p>{item.name} </p>;
        })}
    </div>
  );
};

export default SearchFilter;
