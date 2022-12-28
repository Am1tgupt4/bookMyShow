import React, { useState } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./ListItems.scss";
import Item from "../Item/Item";
import VideoDetails from "../VideoDetails/VideoDetails";

function ListItems(props) {
  const { movies } = props;
  const [trailerUrl, setTrailerUrl] = useState("");
  const [videoDetails, setVideoDetails] = useState({});

  const options = {
    height: "490",
    width: "97%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    movieTrailer(movie?.EventName || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(movie.TrailerURL).search);
        setTrailerUrl(urlParams.get("v"));
        setVideoDetails(movie);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="list-items">
      {trailerUrl ? (
        <div className="video-item">
          <div className="video-item-view">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
          </div>
          <div className="video-item-details">
            <VideoDetails details={videoDetails} />
          </div>
        </div>
      ) : null}
      <div className="lists">
        {movies.map((movie) => (
          <div
            className="lists-items"
            key={movie.EventCode}
            onClick={() => handleClick(movie)}
          >
            <Item movie={movie} />
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
