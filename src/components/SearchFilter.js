import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { AiFillPlayCircle } from "react-icons/ai";
import classes from "./Galery/Galery.module.scss";

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
          if (item.type === 0) {
            return (
              <div>
                <ImageList className={classes.list} cellHeight={200} cols={4}>
                  <ImageListItem cols={(item.width / 2).toFixed(0)}>
                    <a href="/page-four">
                      <img
                        className={classes.item}
                        alt="alt"
                        src={item.url_original}
                        key={item.url_original}
                        loading="lazy"
                      />
                      <ImageListItemBar title={item.name} />
                    </a>
                  </ImageListItem>
                </ImageList>
              </div>
            );
          }
          if (item.type === 1) {
            return (
              <div>
                <ImageList className={classes.list} cellHeight={200} cols={4}>
                  <ImageListItem cols={(item.width / 2).toFixed(0)}>
                    <a href="/page-four">
                      <AiFillPlayCircle className={classes.playIcon} />
                      <video
                        className={classes.video}
                        alt="alt"
                        src={item.url_original}
                        key={item.url_original}
                        loading="lazy"
                      />

                      <ImageListItemBar title={item.name} />
                    </a>
                  </ImageListItem>
                </ImageList>
              </div>
            );
          }
        })}
    </div>
  );
};

export default SearchFilter;
