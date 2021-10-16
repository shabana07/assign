import React from "react";
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{
      heading : "Pet Animals",
      one : "cat",
      two : "cow",
      three : "goat",
      four : "camel"
    },
    {
      heading : "Wild Animals",
      one : "tiger",
      two : "lion",
      three : "zebra",
      four : "bear"
    }];
  }
  render() {
    return (
      <>
        {
          this.state.map((i) => {
            return(
              <div className="info">
                <ul>
                  <h1>{i.heading}</h1>
                  <ol><h4>{i.one}</h4></ol>
                  <ol><h4>{i.two}</h4></ol>
                  <ol><h4>{i.three}</h4></ol>
                  <ol><h4>{i.four}</h4></ol>
                </ul>
              </div>
            )
          })
        }
      </>
    );
  }
}
export default Info;