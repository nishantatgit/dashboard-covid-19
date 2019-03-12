import React from 'react';
import styles from './Card.scss';
import withStyles from 'isomorphic-style-loader/withStyles';
import classnames from 'classnames';

class Card extends React.Component{
  render(){
    const className = classnames('card', { 'last-class' : this.props.lastClass })
    return(<article className={className}>
      <h2 className="name h4">{this.props.name}</h2>
      <span className="city">{this.props.city}</span>
      <span className="rating">{this.props.rating}</span>
      <span className="no-of-reviews">{this.props.reviewCount}</span>
    </article>);
  }
}

export default withStyles(styles)(Card);