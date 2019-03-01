import React from 'react';


export class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        <img src={this.props.element} style={{ display: this.props.display }} />
      </button>
    );
  }
}