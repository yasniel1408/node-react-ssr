import React, { useEffect, useState  } from 'react';

function Form(){
  return(
    <div>
      <h4>Form customer</h4>
      <hr/>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" className="form-control" placeholder="1234 Main St" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Phone </label>
          <input type="text" className="form-control" placeholder="123467890" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
