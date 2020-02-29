import React from 'react';
import './FancyHeader.css';

export class FancyHeader extends React.Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <thead className="fancy-header">
        {this.props.children}
      </thead>
    )
  }
}