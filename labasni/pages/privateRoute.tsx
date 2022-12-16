//@ts-nocheck
import React from "react";
import Link from '@mui/material/Link';
function PrivateRoute({ children }:any) {
const token = localStorage.getItem("token")
 
  if (!token) {
    return <Link href="/login"  />;
  }

  return children;
}

export default PrivateRoute;