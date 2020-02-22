import React, { Component } from "react";
import SCommunityCard from "../simbicards/SCommunityCard";
import { connect } from "react-redux";
import * as actions from "../../actions";
import axios from "axios";
class SCommunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 2,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },

        {
          id: 3,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 4,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 5,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 6,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 7,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 8,
          title: "Painful Sex",
          nameLabel: "Adeosun Timothy",
          date: "26-08",
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        }
      ],
      loading: true
    };
  }

  async componentDidMount() {
    // axios.get("https://simbi.herokuapp.com/community-api/get-gist-posts").then(res => {
    //     const landing = res.data;
    //     this.setState({landing});
    //   })
    const scommunity = await axios.get(
      "https://simbi.herokuapp.com/community-api/get-community-posts"
    );
     await this.props.stopLoading()
    await this.setState({ cards: scommunity.data, loading: false });
  }

  render() {
    const { cards } = this.state;
    return !this.state.loading ? (
      <div
              className="container pt-4"
              style={{ background: "rgba(255, 255, 255, 0.6)" }}
            >
              <h2 className="text-center mb-4 font-weight-bold ">sCOMMUNITY</h2>
              <div className="row">
                <div
                  className="col-sm-2 order-sm-2"
                  style={{
                    fontSize: "4rem",
                    color: "#00b0f3",
                    marginTop: "-3rem"
                  }}
                >
                  <a style={{width:'100%', textAlign:'center'}}  href="#exampleModal"
                     data-toggle="modal" data-target="#exampleModal">
                    <i className="fas fa-plus-circle"></i>
                    
                  </a>
                 
                  <p
                    className="font-weight-light"
                    style={{
                      fontSize: "1rem",
                      marginTop: "0rem",
                      color: "#000",
                      marginLeft:'-0.9rem',
                      fontFamily: 'cursive, sans-serif'
                    }}
                  >
                    Ask a question
                  </p>
                </div>
                <div className="col-sm-10">
                  {cards.map(card => (
                    <SCommunityCard
                      key={card.id}
                      cardDetails={{ ...card, likes: 0, comments: 0 }}
                    />
                  ))}
                </div>
              </div>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Leave A Comment</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Enter Comment</label>
                          <textarea class="form-control" placeholder="Leave a comment" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Post</button>
                    </div>
                  </div>
                </div>
            </div>
            </div>
    ): (<div style={{minHeight: '100vh'}}>
        
    </div>)
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, actions)(SCommunity);
