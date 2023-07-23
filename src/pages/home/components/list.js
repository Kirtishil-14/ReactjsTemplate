import { Searchbox } from "../../../components/searchbox";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchData } from "../../../thunks/home";

const tabs = ["All", "Food", "Drinks", "Snack", "Package"];
const cards = [
  {
    type: "Food",
    data: [
      { name: "Sashimi", value: "$22" },
      { name: "Sashimi", value: "$22" },
      { name: "Sashimi", value: "$22" },
    ],
  },
  {
    type: "Drinks",
    data: [
      { name: "Amazake", value: "$22" },
      { name: "Amazake", value: "$22" },
      { name: "Sashimi", value: "$22" },
    ],
  },
];

const HomeList = () => {
  const [search, changeSearch] = useState("");
  const [tab, setTab] = useState("All");
  const dispatch = useDispatch();
  const onChangeSearch = (e) => {
    let value = e.target.value;
    changeSearch(value);
  };
  return (
    <>
      <div className="">
        <Searchbox
          value={search}
          onChange={onChangeSearch}
          placeholder={"Search here"}
        />
        <div className="d-flex flex-row justify-content center">
          {tabs.map((elem, index) => {
            return (
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setTab(elem)}
                >
                  {elem}
                </h3>
                <div
                  className="hline"
                  style={{
                    height: "5px",
                    backgroundColor: tab == elem ? "#5541D7" : "#E2E2EA",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="cardHolder"
        style={{
          margin: "20px 20px 0 20px",
        }}
      >
        {cards.map((card, index) => {
          return (
            <>
              <div className="type text-start">
                <h3>{card.type}</h3>
              </div>
              <div className="d-flex flex-row">
                {card.data.map((data, index) => {
                  return (
                    <>
                      <div className="card m-3" style={{ flex: 1 }}>
                        <div className="card-body">
                          <div
                            className="img"
                            style={{
                              height: 100,
                              backgroundColor: "#E2E2EA",
                              borderRadius: 5,
                            }}
                          ></div>
                          <div className="text-start mt-3">
                            <h6>{data.name}</h6>
                            <h6 style={{ color: "#42BDA1" }}>{data.value}</h6>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default HomeList;
