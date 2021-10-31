import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  GridList,
  TextField,
  ImageListItemBar,
  GridListTile,
} from "@material-ui/core";
import { AiFillPlayCircle } from "react-icons/ai";
import classes from "./Galery.module.scss";

const SearchVideos = () => {
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
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          fullWidth
          label="Search for videos!"
        />
      </form>

      {product
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          if (item.type === 1) {
            return (
              <div className={classes.row}>
                <GridList className={classes.list} cellHeight={200} cols={4}>
                  <GridListTile cols={(item.width / 2).toFixed(0)}>
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
                  </GridListTile>
                </GridList>
              </div>
            );
          }
        })}
    </div>
  );
};

export default SearchVideos;
