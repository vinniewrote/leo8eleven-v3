import React, { Component } from 'react';
import propTypes from 'prop-types';

class PortfolioCard extends Component {
  static propTypes = {
    slate: propTypes.shape({
      businessName: propTypes.string,
      imgUrl: propTypes.string,
      siteUrl: propTypes.string,
    }),
  };

  render() {
    const {
      slate: { businessName, imgUrl, siteUrl },
    } = this.props;
    return (
      <figure className="cardItem">
        <img src={imgUrl} alt={businessName} />
        <figcaption>
          <h4>{businessName}</h4>
          <button type="button">
            <a href={siteUrl}>Visit</a>
          </button>
        </figcaption>
      </figure>
    );
  }
}

export default PortfolioCard;
