import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  const { numOfIceCream, buyIceCream } = props;
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
