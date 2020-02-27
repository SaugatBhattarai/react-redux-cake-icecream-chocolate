import React from "react";
import { connect } from "react-redux";
import { buyChocolate } from "../redux";

function ChocolateContainer(props) {
  const { numOfChocolate, buyChocolate } = props;
  return (
    <div>
      <h2>Number of Chocolate - {numOfChocolate}</h2>
      <button onClick={buyChocolate}>Buy Chocolate</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfChocolate: state.chocolate.numOfChocolate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyChocolate: () => dispatch(buyChocolate())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);
