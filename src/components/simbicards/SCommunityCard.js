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
      commentCount: "",
      liked: false
    };
    this.likeRef = React.createRef();
  }

  componentDidMount(){
    // Array.from(document.querySelectorAll(`.likes`)).forEach(btn => {
    //     btn.addEventListener('click', function(e) {
    //       // console.log(this.classList.contains('liked'))
    //       // this.classList.add('liked')
    //           // console.log(e.target.classList, this)
    //           e.preventDefault()
    //           if(e.target.classList.contains('liked')){
    //             console.log('remoev')
    //             this.classList.remove('liked')
    //           }else{
    //             console.log('calleed off')
    //             this.classList.add('liked')
    //           }
    //   })
      
    // })
    // document.querySelector(`.likes`).addEventListener('click', function(e) {
      
    //   // if(this.classList.contains('liked')){
    //   //   this.classList.remove('liked')
    //   // }else{
    //   //   this.classList.add('liked')
    //   // }
    // })
  }

  componentWillUnmount(){
    // Array.from(document.querySelectorAll(`.likes`)).forEach(btn => {
    //   btn.remove('click', function(e) {
    //   })
    // })
  }
  toggleLike = e => {
    e.preventDefault();
    this.setState({
      liked: !this.state.liked
    })
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
    var date = new Date(created_at._seconds * 1000);
    // Hours part from the timestamp
    var day = date.getDate();
    var year = date.getFullYear();
    var month = 1 + +date.getMonth();
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime =
      hours + " : " + minutes.substr(-2) + " : " + seconds.substr(-2);

    return (
      <div className="container mb-5">
        <div className="row justify-content-center">
          {/* <i className="col-sm-1 fas fa-user fa-3x"></i> */}
          <img  src="https://www.poutstation.com/upload/photos/avatar.jpg" alt="avatart"
             style={{width: 60, height: 60, borderRadius: '50%'}}/>
          <div className="col-sm-10">
            <h5 className="text-primary">{username}</h5>
            <h6 className="text-grey">{`${year} / ${ month} / ${day} ${formattedTime}`}</h6>
            <h4 className="text-grey font-weight-bold mb-4">
              <span>{topic_title}</span>
            </h4>
            <h6 className="text-grey text-detail"> {topic_details}</h6>
            <div className="row justify-content-between p-3 pr-5">
              <span>
                <span onClick={this.toggleLike} className={`likes ${this.state.liked ? 'liked' : ''} fa-icons-wrapper`}><i  className={`far ${this.state.liked ? 'liked' : ''} fa-thumbs-up fa-2x`}></i></span>
                <span  className="icons">{likes}</span>
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
