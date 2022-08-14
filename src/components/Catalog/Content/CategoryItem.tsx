import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {ProductRapeseed as ProductRapeseedInterface} from "../../../data/categoryInterface";
import {ProductCorn as ProductCornInterface} from "../../../data/categoryInterface";
import {SITE_URL} from "../../../constants";

interface OwnProps {
  item: ProductRapeseedInterface | ProductCornInterface
}

const CategoryItem = (props: PropsFromRedux & OwnProps) => {
  const {item} = props;
  return (
    <div className={"product"}>
      <div className={"product-image"}>
        <img src={SITE_URL + item.image } alt=""/>
      </div>
      <div className={"product-content"}>
        <div className={"product-title"}>
          <h2>
            { item.title }
          </h2>
        </div>
        {"fao" in item && item.fao ?
          <div>
            ФАО: {item.fao}
          </div>
          : null
        }
        <div className={"product-sdescription"}>
          { item.shortDescription.map((item, index) => {
            return (
                <div key={index} className={"product-sdescription__item"}>
                  {item}
                </div>
              )
            })
          }
        </div>
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

export default connector(CategoryItem);