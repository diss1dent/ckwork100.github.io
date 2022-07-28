import {connect, ConnectedProps} from "react-redux";

const Products = (props: PropsFromRedux) => {
    return (
      <div>
      </div>
    );
}
type PropsFromRedux = ConnectedProps<typeof connector>
const stateToProps = () => {

}
const dispatchToProps = () => {

}

const connector = connect(stateToProps, dispatchToProps);
export default connector(Products);