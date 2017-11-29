import React from 'react';
import PropTypes from 'prop-types';




//First react component
export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
       <div className="wrapper">
          <h1>{this.props.title}</h1>
          <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
       </div>

      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle'
};
