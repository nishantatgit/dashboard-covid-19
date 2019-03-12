import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'isomorphic-style-loader';

import CardList from '../../components/organisms/CardList/CardList';
import styles from './HomePage.scss';
import configStore from '../../store/configureStore';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <CardList/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch({ type: 'GET_CATEGORIES'})
  }
}

const mapStateToProps = (state) => {
  const { hotels } = state;
  console.log('hotels ', hotels);
  return { hotels };
} 

export default connect(mapStateToProps)(HomePage);
