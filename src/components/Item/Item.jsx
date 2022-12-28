import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Item.scss";

export default function Item(props) {
  const { movie } = props;

  // const checkIfImageExists = (url) => {
  //   const img = new Image();
  //   img.src = url;

  //   if (img.complete) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div className="item">
      <LazyLoadImage
        className={`poster`}
        src={movie.EventImageUrl}
        alt={movie.EventName}
        effect="blur"
        delayTime={300}
        visibleByDefault={false}
      />
    </div>
  );
}
