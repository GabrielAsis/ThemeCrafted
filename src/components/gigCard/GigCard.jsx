import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link className="link theme-card" key={item.id} to="/gig/123">
      <div className="preview">
        <img className="desktop" src={item.img} alt="" />
        <img className="phone" src={item.phoneImg} alt="" />
      </div>
      <div className="details">
        <h4 className="title">{item.title}</h4>
        <p className="excerpt">{item.excerpt}</p>
        <p className="price">
          {item.discount ? (
            <>
              <span className="original">${item.price}</span>{" "}
              <span className="discount">${item.discount}</span>
            </>
          ) : (
            <>${item.price}</>
          )}
        </p>
      </div>
    </Link>
  );
};

export default GigCard;
