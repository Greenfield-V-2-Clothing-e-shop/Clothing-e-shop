import React from "react";

import Head from "next/head";
import { AppBar,Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";


export default function layout({children}){
    return(
<div>
<Head>
<title>
    labasni
</title>
</Head>
<AppBar position="static">
<Toolbar>
<Typography>labasni</Typography>
</Toolbar>
</AppBar>
<Container>
    {children}
</Container>
<footer>
    <Typography>
        all rights reserved labasni
    </Typography>
</footer>

</div>
 )
}