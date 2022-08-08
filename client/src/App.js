import React from 'react';
import {Link} from 'react-router-dom';

const App = () => {
  return (
    // <div>App</div>
    <div className="container py-4">
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h3 className="display-5 fw-bold">TASK</h3>
        <br />
        <p className="fs-6">Using HTML5 or any front end framework of your choice, build an app to show a list of learners from the “learners” REST endpoint.</p>
        <br/>
        <Link to='/learners' className="btn btn-primary btn-md">View Learners List</Link>
      </div>
    </div>
  </div>
  )
}

export default App