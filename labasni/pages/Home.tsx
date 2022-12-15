import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

   export default function Home() {
        return (
          <Carousel>
            <div>
              <img src="https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg" />
              <p className="legend">NIKE</p>
            </div>
            <div>
              <img src="https://i0.wp.com/cultofcalcio.com/wp-content/uploads/2020/09/higuain_1599006652.jpg?resize=900%2C400&ssl=1" />
              <p className="legend">Football</p>
            </div>
            <div>
              <img src="https://www.dontwasteyourmoney.com/wp-content/uploads/2022/03/AdobeStock_455693064-scaled-e1648762469950-900x400.jpeg" />
              <p className="legend">Basketball</p>
            </div>
            <div>
              <img src="https://underarmour.scene7.com/is/image/Underarmour/FW22_Gifting_Tile_Men_1_1?qlt=75&fmt=jpg&scl=1&" />
              <p className="legend">training</p>
            </div>
            <div>
              <p className="legend">UNDERARMOUR</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQOadd1mMitu3an90ysRj6HkHAKS032uUGA&usqp=CAU" />
            </div>
            {/* <div>
              <img src="https://cdn.about.puma.com/img/layout/Logo_PUMA-Cat_dark.svg"/>
              <p className="legend">PUMA</p>
            </div> */}
          </Carousel>
        );
    }

