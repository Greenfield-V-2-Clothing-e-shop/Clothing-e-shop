import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <h2 className="Labbesni">Labbesni</h2>
      <Carousel>
        <div>
          <img
            className="taswira"
            src="https://www.febsport.com/media/x490/Nike_Air_Max_Shoes/Air_Max_270/Nike_Air_Max_270_Gs_Black_Volt_Oil_Grey_943345-011.jpg"
            alt="image1"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img
            className="taswira"
            src="https://www.febsport.com/media/x490/Nike_Air_Max_Shoes/Air_Max_270/Nike_Air_Max_720_SE_Galaxy_Black_Flash_Crimson_Silt_Red_CW0904-001.jpg"
            alt="image2"
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img
            className="taswira"
            src="https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:250,width:375,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/MncvobOSbqsm59QlSs9P"
            alt="image3"
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img
            className="taswira"
            src="https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:250,width:375,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/5qMi9EgPSIqETbQO19cf"
            alt="image4"
          />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img
            className="taswira"
            src="https://cdn.shopify.com/s/files/1/0746/5359/products/298823_5f076736039df8.73525996_2_large_79d51d8d-cf80-4657-9042-05e9320ac3d7_2000x.png?v=1642800741"
            alt="image5"
          />
          <p className="legend">Image 5</p>
        </div>
      </Carousel>
    </div>
  );
}
