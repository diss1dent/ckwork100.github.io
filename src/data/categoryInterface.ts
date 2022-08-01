export interface CategoryProducts
  {
    title: string,
    products: Product[]
  }

export interface Product
  {
    fao: number,
    shortDescription: string,
    title: string,
    fullDescription: string,
  }