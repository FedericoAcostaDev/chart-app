import React from "react";
import {
  CircularProgress,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";

export default class GaleryVideos extends React.Component {
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
      image: data.filter((elem) => elem.type === 1).splice(0, 100),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </div>
      );
    }

    if (!this.state.image) {
      return <div>didn't get an image</div>;
    }

    return (
      <div>
        <ImageList
          cellHeight={200}
          cols={4}
          style={{
            flexGrow: "1",
            justifyContent: "center",
          }}
        >
          {this.state.image.map((image) => (
            <ImageListItem cols={(image.width / 2).toFixed(0)}>
              <a href={"http://google.com"}>
                <video
                  alt="alt"
                  src={image.url_original}
                  key={image.url_original}
                  loading="lazy"
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
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
