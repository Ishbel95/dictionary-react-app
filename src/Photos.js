import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos photo-grid">
        {props.photos.map(function(photo, index) {
          return (
            <div className="photos-results" key={index}>
              <img src={photo.src.landscape} alt="" className="img-fluid" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
