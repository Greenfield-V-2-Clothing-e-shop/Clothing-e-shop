import { ProductProvider,products } from "./Context/ProductsContext"

export default function Aboutus(){
  ProductProvider()
  console.log(products)
  return <div>
    This is about us page
  </div>
}