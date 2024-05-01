import React, { useState } from "react";
import Header from "../header/Header";
import Product from "../product/Product";
import { useFetch } from "../../hooks/useHook";
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
  const [categoryName, setCategoryName] = useState("all");
  const [name, setName] = useState("");
  const { data: categories } = useFetch("/products/categories");
  ///////////////////
  let url = `/products${
    categoryName === "all" ? "" : `/category/${categoryName}`
  }?limit=${btn * 4}`;
  //////////////////
  const { data } = useFetch(url, btn, categoryName);

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
            type="text"
            placeholder="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name?.trim() ? (
            <ul>
              <li>An apple mobile which</li>
              <li>OPPO F19 is officially announced </li>
              <li>Huawei’s re-badged P30 Pro</li>
              <li>MacBook Pro 2021 with mini-LED</li>
            </ul>
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
