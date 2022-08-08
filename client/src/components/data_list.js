import React from "react";
import { Link } from "react-router-dom";

const DataList = ({ data }) => {
  return (
    <div className="list-group">
      {data.map((data, index) => (
        <Link key={index}
          to={`/learners/${index}`}
          className="list-group-item list-group-item-action"
        >
          {data.firstName} <span></span> {data.lastName}
        </Link>
      ))}
    </div>
  );
};

export default DataList;
