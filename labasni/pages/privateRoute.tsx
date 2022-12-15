//@ts-nocheck
import React from "react";
import Link from '@mui/material/Link';
function PrivateRoute({ children }:any) {
//   const LocalStorage = ({ type, keys, value, onLocalStorage }:any) => {
// 		switch (type) {
// 			case 'set':
// 				keys !== undefined && window.localStorage.setItem(keys, value)
// 				break
// 			case 'get':
// 				keys !== undefined && onLocalStorage(window.localStorage.getItem(keys))
// 				break
// 			case 'remove':
// 				keys !== undefined && window.localStorage.removeItem(keys)
// 				break
// 			case 'clear':
// 				keys !== undefined && window.localStorage.clear()
// 				break
// 			default:
// 				alert('localStorage type undefined')
// 				break
// 		}
// 	}
const token = localStorage.getItem("token")
 
  if (!token) {
    return <Link href="/login"  />;
  }

  return children;
}

export default PrivateRoute;