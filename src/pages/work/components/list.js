import { Searchbox } from "../../../components/searchbox";
import React, { useState } from "react";

const cards = [
  { type: "Customer", value: "1000", direction: "up", net: "15%" },
  { type: "Order", value: "1000", direction: "down", net: "-15%" },
  { type: "Revenue", value: "1000", direction: "up", net: "15%" },
  { type: "Net Profit", value: "1000", direction: "down", net: "-15%" },
];

const tableHead = ["No", "Item", "Quality", "Revenue", "Net Profit"];

const tableData = [
  { item: "sashmi", quality: "30", revenue: "$432.02", np: "$654.89" },
  { item: "sashmi", quality: "30", revenue: "$432.02", np: "$654.89" },
  { item: "sashmi", quality: "30", revenue: "$432.02", np: "$654.89" },
  { item: "sashmi", quality: "30", revenue: "$432.02", np: "$654.89" },
];

const WorkList = () => {
  return (
    <>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between`}
      >
        {cards.map((card) => {
          return (
            <div
              className="p-3 m-3"
              style={{ backgroundColor: "#fff", flex: 1 }}
            >
              <div className="d-flex justify-content-between mb-2">
                <h6>{card.type}</h6>
                {card.direction === "up" ? (
                  <i class="bi bi-arrow-up" style={{ color: "green" }}></i>
                ) : (
                  <i class="bi bi-arrow-down" style={{ color: "red" }}></i>
                )}
              </div>
              <div className="d-flex justify-content-between">
                <span>{card.value}</span>
                <span>{card.net}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          width: "95%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: "0 24px",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((head) => {
                return <th scope="col">{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{data.item}</td>
                    <td>{data.quality}</td>
                    <td>{data.revenue}</td>
                    <td>{data.np}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default WorkList;
