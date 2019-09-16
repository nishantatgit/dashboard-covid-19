import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import { connect } from "react-redux";

import Card from "../../molecules/Card/Card";
import styles from "./CardList.scss";
import { FETCH_CARD_LIST_DATA_FROM_API } from "./CardList.actions";
import { setIndex } from "../../../actions/hotelIndex.action";
import setIntersectionObserver from "../../../utilities/setIntersectionObserver";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.getHotelIndex = this.getHotelIndex.bind(this);
  }

  componentWillMount() {
    // this.props.getCardListData([1,20]);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card-menu">
          {this.props.data.map((hotel, idx, hotels) => (
            <Card
              lastClass={idx === hotels.length - 1}
              key={hotel.Name}
              name={hotel.Name}
              city={hotel.City}
              rating={hotel.Rating}
            />
          ))}
        </div>
        <hr id="bottom-card-menu" style={{ visibility: "hidden" }} />
      </React.Fragment>
    );
  }

  getHotelIndex() {
    const { hotelDisplayIndex } = this.props;
    return hotelDisplayIndex;
  }

  componentDidMount() {
    const { getCardListData, setHotelIndex } = this.props;
    const { getHotelIndex } = this;

    const onTargetEnter = props => {
      const hotelIndexArray = getHotelIndex();
      console.log("hotelIndexArray ", hotelIndexArray);
      getCardListData(hotelIndexArray);
      setHotelIndex([1, hotelIndexArray[1] + 20]);
    };

    setIntersectionObserver(
      { rootMargin: "100px" },
      "bottom-card-menu",
      onTargetEnter
    );
  }
}

const mapStateToProps = state => {
  const { hotels: data, hotelDisplayIndex } = state;
  return {
    data,
    hotelDisplayIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCardListData: hotelDisplayIndex =>
      dispatch({
        type: FETCH_CARD_LIST_DATA_FROM_API,
        payload: hotelDisplayIndex
      }),
    setHotelIndex: hotelDisplayArray => dispatch(setIndex(hotelDisplayArray))
  };
};

const StyledCardList = withStyles(styles)(CardList);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledCardList);
