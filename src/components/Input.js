import React from "react";
import { TextField } from "@material-ui/core";
import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          onChange={props.change}
          fullWidth
          label="Search for anything!"
        />
      </form>
    </div>
  );
};

export default Input;

/*
import React from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import classes from "./Galery/GaleryVideos.module.scss";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";

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
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          fullWidth
          label="Search for anything!"
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
        })}
    </div>
  );
};

export default SearchFilter;
*/
