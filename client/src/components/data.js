import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./spinner";
import DataList from './data_list';
import client from "../http-config";

const LearnersList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.get("/fetch-data").then((result) => {
      //console.table(result.data);
      setData(result.data);
    });
  }, []);
  return (
    <div className="container py-4">
      {data ? (
        <>
          {" "}
          <div className="list-group">
            <Link
              to="/learners-list"
              className="list-group-item list-group-item-action active display-5"
              aria-current="true"
            >
              Names of All Learners.
            </Link>
          </div>
          <DataList data={data} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default LearnersList;
