// @ts-nocheck
import * as React from 'react';
import {useEffect} from 'react'
import { ProductContextType, Prods } from '../@types/products';
import axios from "axios"
import { ReactNode } from 'react';

export const TodoContext = React.createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<ReactNode> = ( children  ) => {
  const [products, setProducts] = React.useState<Prods[]>([])
function getData(){
  axios.get("http://localhost:5000/api/clothes").then(res =>{
    console.log(products)
    return setProducts(res.data)
  }).catch(err=> console.log(err))
}
useEffect(()=>getData(),[])
}





