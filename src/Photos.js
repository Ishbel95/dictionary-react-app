import React from "react";
import "./Photos.css";

// map through pexels api response and slice array to 16 els, render and img for each response.
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos photo-grid">
        {props.photos.slice(0, 16).map(function(photo, index) {
          return (
            <div className="photos-results" key={index}>
              <img
                src={photo.src.landscape}
                alt="photos of word search"
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
