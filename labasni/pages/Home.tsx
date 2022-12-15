import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

   export default function Home() {
        return (
          <Carousel>
            <div>
              <img src="https://www.dontwasteyourmoney.com/wp-content/uploads/2022/03/AdobeStock_455693064-scaled-e1648762469950-900x400.jpeg" />
              <p className="legend">Basketball</p>
            </div>
            <div>
              <img src="https://i0.wp.com/cultofcalcio.com/wp-content/uploads/2020/09/higuain_1599006652.jpg?resize=900%2C400&ssl=1" />
              <p className="legend">Football</p>
            </div>
            <div>
              <img src="https://images.squarespace-cdn.com/content/v1/5ca9152c70468037cc354f1b/1574495425642-EAQLWFPYRD9X2Q4BT7EZ/workout+wear+ideas.jpg" />
              <p className="legend">Stretch</p>
            </div>
            <div>
              <img src="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2019/Categories/Men/Performance-gamewear/desktop-subcat-mm-gamewear-nishikori-190816.jpg" />
              <p className="legend">Tennis</p>
            </div>
            <div>
              <img src="https://www.merthyrtownfc.co.uk/media/2768/jpeg-image-00cad84a1353-1.jpeg?width=900&height=400&mode=crop" />
              <p className="legend">Rugby</p>
            </div>
            <div>
              <img src="https://contents.mediadecathlon.com/s810022/k$5a51edfbb53c3708c2fb350e3610ad3b/1180x0/450pt200/900xcr400/SG-Content-1-10-essentials-for-a-ski-trip.jpg?format=auto&quality=80" />
              <p className="legend">Ski</p>
            </div>
          </Carousel>
        );
    }

