import { Component } from "react";

export default class Video extends Component {
    state = {
      html: "",
    };
    componentDidMount() {
      const src = this.props.src;
      const width = this.props.width;
      const html = `
          <video width=${width} autoPlay playsinline muted loop>
              <source src=${src} />
          </video>
        `;
      this.setState({ html });
    }
    render() {
      return <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>;
    }
  }