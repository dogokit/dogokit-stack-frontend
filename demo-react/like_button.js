"use strict";

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

root.render(e(LikeButton));
