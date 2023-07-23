import React, { useState } from "react";
import { Searchbox } from "../../../components/searchbox";

const tableHead = [
  "ID",
  "Name",
  "Join Date",
  "Total Visit",
  "Purchased Item",
  "Total Spend",
];

const tableData = [
  {
    name: "sashmi",
    jdate: "1 Feb 2021",
    visit: "30",
    purchase: "latte(8);vanilla latte(5)",
    total: "$654.89",
  },
  {
    name: "sample 2",
    jdate: "1 Feb 2021",
    visit: "30",
    purchase: "latte(8);vanilla latte(5)",
    total: "$654.89",
  },
  {
    name: "sample 3",
    jdate: "1 Feb 2021",
    visit: "30",
    purchase: "latte(8);vanilla latte(5)",
    total: "$654.89",
  },
  {
    name: "sample 4",
    jdate: "1 Feb 2021",
    visit: "30",
    purchase: "latte(8);vanilla latte(5)",
    total: "$654.89",
  },
];

const TeamList = () => {
  return (
    <>
      <h3 className="text-start mb-4">Customer</h3>
      <div
        style={{
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: "0 20px",
        }}
      >
        <div className="d-flex flex-column">
          <Searchbox placeholder={"Search here"} />
        </div>
        <table className="table">
          <thead>
            <tr style={{ background: "#F7F7FC" }}>
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
                    <th scope="row">XXX{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.jdate}</td>
                    <td>{data.visit}</td>
                    <td>
                      <p className="text-start">{data.purchase} </p>
                      <p
                        className="text-start fw-bold"
                        style={{ color: "#5541D7" }}
                      >
                        See Details
                      </p>
                    </td>
                    <td>{data.total}</td>
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
export default TeamList;
