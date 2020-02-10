import React, { Component } from "react";

class SCommunityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      image: "",
      title: "",
      timeLabel: "",
      gist: "",
      commentCount: ""
    };
  }

  render() {
    const {
      username,
      created_at,
      topic_title,
      topic_details,
      likes,
      comments
    } = this.props.cardDetails;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(created_at * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return (
      <div className="container mb-5">
        <div className="row justify-content-center">
          <i className="col-sm-1 fas fa-user fa-3x"></i>

          <div className="col-sm-10">
            <h5 className="text-primary">{username}</h5>
            <h6 className="text-grey">{formattedTime}</h6>
            <h4 className="text-grey font-weight-bold mb-4">
              <span>{topic_title}</span>
            </h4>
            <h7 className="text-grey text-detail"> {topic_details}</h7>
            <div className="row justify-content-between p-3 pr-5">
              <span>
                <span className="fa-icons-wrapper"><i className="far fa-thumbs-up fa-2x"></i></span>
                <span className="icons">{likes}</span>
              </span>
              <span>
                <span className="fa-icons-wrapper"><i className="fas fa-comment-alt fa-2x"></i></span>
                <span className="icons">{comments}</span>
              </span>
              <span className="fa-icons-wrapper"><i className="fas fa-reply fa-flip-horizontal fa-2x"></i></span>
              <span className="fa-icons-wrapper"><i className="far fa-flag fa-2x"></i></span>
              <span className="icons"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SCommunityCard;
