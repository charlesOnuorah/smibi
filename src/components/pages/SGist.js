import React, { Component } from "react";
import axios from "axios";
import SGistCard from "../simbicards/SGistCard";
import { Consumer } from "../../context";

class SGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          imageScr: "../picture.jpg",
          timeLabel: "sCommunity",
          title: "Painful Sex",
          commentCount: "68 comments",
          gist:
            " It was the voice of a young girl thanking the writer for her words and the strength they gave her.",
          width: true
        },
        {
          id: 2,
          imageScr: "../picture1.jpeg",
          timeLabel: "sGist",
          title: "He Confessed His Love To Her",
          commentCount: "68 comments",
          gist:
            "He pulled me in, started reading a poem written inside of a photo book he made and proposed,"
        },

        {
          id: 3,
          imageScr: "../picture2.jpg",
          timeLabel: "sInformation",
          title: "Health Toolkits, for homes!!!",
          commentCount: "68 comments",
          gist:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.'
        },
        {
          id: 4,
          imageScr: "../picture3.jpg",
          timeLabel: "sAlert",
          title: "Geometrically rising addiction rates among northern youths",
          commentCount: "68 comments",
          gist:
            "An estimated 24.6 million youths aged 12—had used an illicit drug in the past month. This number is up from 8.3 percent in 2002."
        },
        {
          id: 5,
          imageScr: "../picture.jpg",
          timeLabel: "sCommunity",
          title: "Painful Sex",
          commentCount: "68 comments",
          gist:
            " It was the voice of a young girl thanking the writer for her words and the strength they gave her."
        },
        {
          id: 6,
          imageScr: "../picture1.jpeg",
          timeLabel: "sGist",
          title: "He Confessed His Love To Her",
          commentCount: "68 comments",
          gist:
            "He pulled me in, started reading a poem written inside of a photo book he made and proposed,",
          width: true
        },
        {
          id: 7,
          imageScr: "../picture2.jpg",
          timeLabel: "sInformation",
          title: "Health Toolkits, for homes!!!",
          commentCount: "68 comments",
          gist:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.'

          //{this.state.landing}
        },
        {
          id: 8,
          imageScr: "../picture3.jpg",
          timeLabel: "sAlert",
          title: "Geometrically rising addiction rates among northern youths",
          commentCount: "68 comments",
          gist:
            "An estimated 24.6 million youths aged 12—had used an illicit drug in the past month. This number is up from 8.3 percent in 2002.",
          width: true
        }
      ]
    };
  }

  //CONSUME AN ENDPOINT WITH AXIOS
  async componentDidMount() {
    // axios.get("https://simbi.herokuapp.com/community-api/get-gist-posts").then(res => {
    //     const landing = res.data;
    //     this.setState({landing});
    //   })
    const gists = await axios.get(
      "https://simbi.herokuapp.com/community-api/get-gist-posts"
    );

    this.setState({ cards: gists.data });
  }

  render() {
    const { cards } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <h2 className="text-center text-light my-4">sGIST</h2>
              <div className="row">
                {cards.map((card, index) => (
                  <SGistCard key={card.id} cardDetails={{ ...card, index }} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SGist;
