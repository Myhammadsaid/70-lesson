import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ data }) => {
  let cards = data?.map((el) => (
    <div key={el.id} className="product-card">
      <Link to={`/product/${el.id}`} style={{ textDecoration: "none" }}>
        <img
          style={{ width: "246px", height: "246px", objectFit: "cover" }}
          src={el.thumbnail}
          alt=""
        />
      </Link>
      <p className="product-card-title">{el.title}</p>
      <p className="product-card-text" title={el.description}>
        {el.description}
      </p>
      <div className="product-stars">
        <h4>{el.rating}</h4>
        <p className="stack">({el.stock})</p>
      </div>
      <p className="product-brand">{el.brand}</p>
      <div className="product-prices">
        <p className="product-price">{el.price}$</p>
        <Button style={{ border: "1px solid blue" }}>Add</Button>
      </div>
    </div>
  ));

  return (
    <div>
      <Container maxWidth="xl">
        <div className="product-cards">{cards}</div>
      </Container>
    </div>
  );
};

export default Product;
