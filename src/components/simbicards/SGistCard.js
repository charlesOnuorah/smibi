import React, { Component } from "react";

class SGistCard extends Component {
  render() {
    const {
      gist_image,
      gist_title,
      username,
      gist_details,
      commentCount,
      index
    } = this.props.cardDetails;

    const cardWidth =
      index % 2 === 0
        ? "col-lg-8 col-md-8 col-sm-6 mb-4"
        : "col-lg-4 col-md-4 col-sm-6 mb-4";
    const imgHeight = index % 2 === 0 ? "20rem" : "13rem";
    return (
      <div className={cardWidth}>
        <div
          className="card"
          style={{
            background: "rgba(255, 255, 255, 0.0)",
            border: "none"
          }}
        >
          <div>
            <img
              alt=""
              className="img-height"
              style={{ height: imgHeight }}
              src={gist_image}
            />
          </div>
          <div className="card-body p-0">
            <h5 className="">{gist_title}</h5>
            <h6 className="text-primary font-italic">{username}</h6>
            <h6 className="gistContent" style={{ width: cardWidth }}>
              {gist_details}
            </h6>
            <p className="">
              <i className="fas fa-comment-alt text-dark" /> {commentCount}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SGistCard;
