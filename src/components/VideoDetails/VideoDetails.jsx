import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./VideoDetails.scss";

const text = `The content would break out of your element and it would be 142px
wide, rather than 100px. Why is that? The box model is a core
foundation of CSS and understanding how it works, how it is affected
by other aspects of CSS and importantly, how you can control it will
help you to write more predictable CSS. The content would break out
of your element and it would be 142px wide, rather than 100px. Why
is that? The box model is a core foundation of CSS and understanding
how it works, how it is affected by other aspects of CSS and
foundation of CSS and understanding how it works, how it is affected
by other aspects of CSS and importantly, how you can control it will
help you to write more predictable CSS. The content would break out
of your element and it would be 142px wide, rather than 100px. Why
is that? The box model is a core foundation of CSS and understanding
how it works, how it is affected by other aspects of CSS and
foundation of CSS and understanding how it works, how it is affected
by other aspects of CSS and importantly, how you can control it will
help you to write more predictable CSS. The content would break out
of your element and it would be 142px wide, rather than 100px. Why
is that? The box model is a core foundation of CSS and understanding
how it works, how it is affected by other aspects of CSS and
importantly, how you can control it will help you to write more
predictable CSS.`;

function VideoDetails(props) {
  const {
    details: {
      EventName,
      EventLanguage,
      ShowDate,
      totalVotes,
      wtsCount,
      maybeCount,
      dwtsCount,
      EventGenre,
    },
  } = props;
  const [showMore, setShowMore] = useState(false);

  console.log("EventGenre------>", EventGenre.split("|"));
  return (
    <div className="video-details">
      <h3 className="vedio-name">{EventName}</h3>
      <p className="vedio-language">{EventLanguage}</p>
      <div className="action-scifi">
        {EventGenre.split("|").length
          ? EventGenre.split("|").map((genre) => {
              return <div key={genre}>{genre}</div>;
            })
          : null}
      </div>
      <div className="vote-date">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
        </div>
        <div>Date</div>
      </div>
      <div className="vedio-description">
        <div className="show-more">
          <p>{showMore ? text : `${text.substring(0, 150)}`}</p>
        </div>
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Read more"}
        </span>
      </div>
      <div className="like-unlike">Like and Unlike</div>
    </div>
  );
}

export default VideoDetails;
