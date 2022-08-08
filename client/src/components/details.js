import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../http-config";

const LearnerDetails = () => {
  const [data, setData] = useState([]);

  const { learnerId } = useParams("");
  //console.log(learnerId);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    client.get(`/fetch-data/${learnerId}`, config).then((response) => {
      const fetchedData = response.data;
      if (response.status === 422 || !fetchedData) {
        console.log("Error occurred while fetching data.");
      } else {
        //console.log("Data successfully fetched.");
        //console.log(fetchedData);
        setData(fetchedData);
      }
    });
  }, [learnerId]);

  return (
    <div className="container py-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h3 className="display-5 fw-bold">Learner Details</h3>
          <br />
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Grade</th>
                <th scope="col">School</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.grade}</td>
                <td>{data.school}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <Link to="/learners" className="btn btn-danger btn-md">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnerDetails;