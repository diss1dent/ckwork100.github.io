import React from "react";
import {connect, ConnectedProps,} from "react-redux";
import {Product as ProductInterface} from "../../../data/categoryInterface";
import CategoryItem from "./CategoryItem";

interface OwnProps { products: ProductInterface[] }

const CategoryItems = (props: PropsFromRedux & OwnProps) => {
  const {products} = props;
  return (
    <ul>
      {
        products.map((product: ProductInterface, index: number) => {
          return <li key={index}>
            <CategoryItem item={product}/>
          </li>
        })
      }
    </ul>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({

})

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(CategoryItems);