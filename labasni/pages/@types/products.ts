// @types.products.ts
export interface Prods {
    name: String;
    categorie:String;
    brand:String;
    price:Number;
    imageUrl:String;
    size:String;
    color:String;
}
export type ProductContextType = {
  products: Prods[];
  saveTodo: (product: Prods) => void;
};