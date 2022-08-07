export interface CategoryProducts
  {
    title: string,
    products: ProductCorn[] | ProductRapeseed[]
  }

export interface Product
  {
    shortDescription: string[],
    title: string,
    image: string,
    fullDescription: string,
  }
export interface ProductRapeseed extends Product
  {
  }
export interface ProductCorn extends Product
  {
    fao: number
  }