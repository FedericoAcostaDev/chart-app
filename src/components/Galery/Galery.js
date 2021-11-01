import React from "react";
import {
  CircularProgress,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";
import classes from "./Galery.module.scss";

export default class Galery extends React.Component {
  state = {
    loading: true,
    image: null,
  };

  async componentDidMount() {
    const url = "https://dev-cognitive-dashboard-server.herokuapp.com/techtest";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.filter((data) => data.type === 0)); // this filter is fine
    //console.log(data.map((data) => data.sector));

    this.setState({
      image: data.filter((elem) => elem.type === 0).splice(0, 100),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className={classes.icon}>
          <CircularProgress size={100} />
        </div>
      );
    }

    if (!this.state.image) {
      return <div>didn't get an image</div>;
    }

    return (
      <div>
        <ImageList className={classes.list} cellHeight={200} cols={4}>
          {this.state.image.map((image) => (
            <ImageListItem cols={(image.width / 2).toFixed(0)}>
              <a href="/page-four">
                <img
                  className={classes.image}
                  alt="alt"
                  src={image.url_original}
                  key={image.url_original}
                  loading="lazy"
                />
                <ImageListItemBar title={image.name} />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
}
