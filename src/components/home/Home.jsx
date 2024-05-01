import React, { useState } from "react";
import Header from "../header/Header";
import Product from "../product/Product";
import { useFetch } from "../../hooks/useHook";
import { Link } from "react-router-dom";
import axios from "../../api";
import "./Home.css";

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/products?limit=${4}&skip=${btn * 4}`)
  //     .then((res) => setData(res.data.products))
  //     .catch((err) => console.log(err));
  // }, [btn]);
  const [btn, setBtn] = useState(1);
  const [name, setName] = useState("");
  const { data: username } = useFetch(`/products/search?q=${name}`, name);
  const [categoryName, setCategoryName] = useState("all");
  const { data: categories } = useFetch("/products/categories");
  ///////////////////
  let url = `/products${
    categoryName === "all" ? "" : `/category/${categoryName}`
  }?limit=${btn * 4}`;
  //////////////////
  const { data } = useFetch(url, btn, categoryName);

  const searchItems = username?.data?.products?.map((el) => (
    <Link
      key={el.id}
      to={`/product/${el.id}`}
      style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
    >
      <img width={50} src={el.thumbnail} alt="" />
      <h4>{el.title}</h4>
    </Link>
  ));

  let options = categories?.data?.map((el, inx) => (
    <option key={inx} value={el}>
      {el}
    </option>
  ));
  return (
    <div>
      <Header />
      <form>
        <select
          name=""
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        >
          <option value="all">All</option>
          {options}
        </select>
        <div className="input-search">
          <input
            type="search"
            placeholder="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name?.trim() ? (
            <div className="search-content">{searchItems}</div>
          ) : (
            <></>
          )}
        </div>
      </form>
      <Product data={data?.data?.products} />
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px auto",
          border: "1px solid blue",
          padding: "10px 20px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => setBtn((p) => p + 1)}
      >
        Learn more
      </button>
    </div>
  );
};

export default Home;
