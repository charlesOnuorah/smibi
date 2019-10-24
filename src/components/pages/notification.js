import React, { Component } from "react";

class Notification extends Component {
  render() {
    return (
    <div className="container">
        <div className="row justify-content-center col-sm-10 mt-5 mt-5"> 
        <div className="mb-5 mt-5">
        <h6 className="text-warning mt-5" > Recent Posts </h6>
        <hr  className="mb-5 mt-0" style={{ background: "white", width: "300%" }} /> 
        <h6 className="text-warning mt-5"  > Earlier Posts  </h6>
        <hr className="mb-5 mt-0" style={{ background: "white", width: "300%", marginTop: "100%" }} />
        </div> 
        </div >  
    </div>
    );
  }
}

export default Notification;
