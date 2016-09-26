import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us"/>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Aenean pellentesque molestie purus, eu gravida erat aliquam id.
         Praesent eu cursus turpis. In hac habitasse platea dictumst.
         Suspendisse in ligula fermentum, finibus ipsum nec, malesuada ipsum.
          Morbi porta maximus purus id condimentum. Integer feugiat ultricies elementum.
          Suspendisse potenti. Nunc congue odio tempus tortor commodo convallis.
          Nullam posuere orci lectus, a fringilla ante mollis eget.
        </p>

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
