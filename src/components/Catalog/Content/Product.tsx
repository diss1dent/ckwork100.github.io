import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {Product as ProductInterface} from "../../../data/categoryInterface";

interface OwnProps {
  item: ProductInterface
}

const Product = (props: PropsFromRedux & OwnProps) => {
  const {item} = props;
  return (
    <div>
      <div>
        { item.title }
      </div>
      <div>
        ФАО: { item.fao }
      </div>
      <div>
        { item.shortDescription }
      </div>
    </div>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({

})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Product);