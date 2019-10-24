import React, { Component } from "react";
import SCard from "../simbicards/SCard";
import { Consumer } from "../../context";
import axios from "axios";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          imageScr: "../picture.jpg",
          label: "sCommunity",
          title: "Painful Sex",
          name: "Adeosun Timothy",
          desc:
            " It was the voice of a young girl thanking the writer for her words and the strength they gave her.",
          btnColor: "btn-danger"
        },
        {
          id: 2,
          imageScr: "../picture1.jpeg",
          label: "sGist",
          title: "He Confessed His Love To Her",
          name: "Adeosun Timothy",
          desc:
            "He pulled me in, started reading a poem written inside of a photo book he made and proposed,",
          btnColor: "btn-warning"
        },

        {
          id: 3,
          imageScr: "../picture2.jpg",
          label: "sInformation",
          title: "Health Toolkits, for homes!!!",
          name: "Adeosun Timothy",
          desc:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          btnColor: "btn-success"
        },
        {
          id: 4,
          imageScr: "../picture3.jpg",
          label: "sAlert",
          title: "Geometrically rising addiction rates among northern youths",
          name: "Adeosun Timothy",
          desc:
            "An estimated 24.6 million youths aged 12—had used an illicit drug in the past month. This number is up from 8.3 percent in 2002.",
          btnColor: "btn-danger"
        },
        {
          id: 5,
          imageScr: "../picture.jpg",
          label: "sCommunity",
          title: "Painful Sex",
          name: "Adeosun Timothy",
          desc:
            " It was the voice of a young girl thanking the writer for her words and the strength they gave her.",
          btnColor: "btn-danger"
        },
        {
          id: 6,
          imageScr: "../picture1.jpeg",
          label: "sGist",
          title: "He Confessed His Love To Her",
          name: "Adeosun Timothy",
          desc:
            "He pulled me in, started reading a poem written inside of a photo book he made and proposed,",
          btnColor: "btn-warning"
        },
        {
          id: 7,
          imageScr: "../picture2.jpg",
          label: "sInformation",
          title: "Health Toolkits, for homes!!!",
          name: "Adeosun Timothy",
          desc:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          btnColor: "btn-success"
        },
        {
          id: 8,
          imageScr: "../picture3.jpg",
          label: "sAlert",
          title: "Geometrically rising addiction rates among northern youths",
          name: "Adeosun Timothy",
          desc:
            "An estimated 24.6 million youths aged 12—had used an illicit drug in the past month. This number is up from 8.3 percent in 2002.",
          btnColor: "btn-danger"
        }
      ]
    };
  }

  //CONSUME AN ENDPOINT WITH AXIOS
  // componentDidMount(){
  //   axios.get("").then(res => {
  //       const landing = res.data;
  //       this.setState({landing});
  //     })
  //}

  async componentDidMount() {
    // axios.get("https://simbi.herokuapp.com/community-api/get-gist-posts").then(res => {
    //     const landing = res.data;
    //     this.setState({landing});
    //   })

    const scommunity = await axios.get(
      "https://simbi.herokuapp.com/community-api/get-community-posts"
    );
    const sgist = await axios.get(
      "https://simbi.herokuapp.com/community-api/get-gist-posts"
    );
    const sInformation = await axios.get(
      "https://simbi.herokuapp.com/community-api/get-gist-posts"
    );

    const landing = [
      scommunity.data[0],
      sgist.data[0],
      sInformation.data[0],
      scommunity.data[1],
      sgist.data[1],
      sInformation.data[1]
    ];
    console.log(landing);
    console.log(scommunity);

    // this.setState({cards: scommunity.data})
  }

  render() {
    const { cards } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="row justify-content-center pt-2">
              {cards.map(card => (
                <SCard key={card.id} cardDetails={card} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Landing;
