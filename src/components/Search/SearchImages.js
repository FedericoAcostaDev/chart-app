import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  GridList,
  TextField,
  ImageListItemBar,
  GridListTile,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import classes from "./Galery.module.scss";

const SearchImages = ({ name, id, url_original }) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://dev-cognitive-dashboard-server.herokuapp.com/techtest"
      );

      //console.log(data.data);
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
          label="Search for Images!"
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
          if (item.type === 0) {
            return (
              <div className={classes.row}>
                <GridList className={classes.list} cellHeight={200} cols={4}>
                  <GridListTile cols={(item.width / 3).toFixed(0)}>
                    <Link to={`/page-four/${item.id}`}>
                      <img
                        className={classes.item}
                        alt="alt"
                        src={item.url_original}
                        key={item.url_original}
                        loading="lazy"
                      />
                      <ImageListItemBar title={item.name} />
                    </Link>
                  </GridListTile>
                </GridList>
              </div>
            );
          }
        })}
    </div>
  );
};

export default SearchImages;
