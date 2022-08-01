import React from "react";
import {connect, ConnectedProps,} from "react-redux";
import {Product as ProductInterface} from "../../../data/categoryInterface";
import Product from "./Product";

interface OwnProps { products: ProductInterface[] }

const Products = (props: PropsFromRedux & OwnProps) => {
  const {products} = props;
  return (
    <ul>
      {
        products.map((product: ProductInterface, index: number) => {
          return <li key={index}>
            <Product item={product}/>
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
export default connector(Products);