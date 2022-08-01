import {CATEGORY_CORN} from "../../../data/corn";
import {CATEGORY_RAPESEED} from "../../../data/rapeseed";
import {CategoryProducts} from "../../../data/categoryInterface";
import {PRODUCT_CATEGORIES} from "../../../state/reducers/navigationReducer";

export const getCategoryProducts = (category: string): CategoryProducts => {
  let productContent: CategoryProducts;
  switch(category) {
    case PRODUCT_CATEGORIES.corn:
      productContent = CATEGORY_CORN;
      break;
    case PRODUCT_CATEGORIES.rapeseed:
    default:
      productContent = CATEGORY_RAPESEED ;
      break;
  }

  return productContent
}