import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
  sliders : img[] 
}

const images : ImageType = {
 introScreen : require("../assets/images/img2.jpg") ,
 sliders : [
   require("../assets/images/slider1.png"),
   require("../assets/images/slider2.png"),
   require("../assets/images/slider3.png"),
 ]
 
}


export default images;