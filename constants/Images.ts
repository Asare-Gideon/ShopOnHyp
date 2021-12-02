import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
  
}

const images : ImageType = {
 introScreen : require("../assets/images/img2.jpg") ,
 
}


export default images;