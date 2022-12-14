import * as React from 'react';
import {useEffect} from 'react'
import { ProductContextType, Prods } from '../@types/products.ts';
import axios from "axios"

export const TodoContext = React.createContext<ProductContextType | null>(null);

const ProductProvider: React.FC<React.ReactNode> = ({ children:any }) => {
  const [products, setProducts] = React.useState<Prods[]>([])
function getData(){
  axios.get("http://localhost:5000/api/clothes").then(res =>{
    console.log(res.data)
  }).catch(err=> console.log(err))
}
useEffect(()=>getData(),[])
console.log(getData())
}

