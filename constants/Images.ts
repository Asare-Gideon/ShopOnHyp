import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  introScreen : img; 
  addImage: img;
  carts: img;
  sliders : img[] ,
  items : img[]
}

const images : ImageType = {
 introScreen : require("../assets/images/img2.jpg") ,
addImage:  require("../assets/images/add.png") ,
carts:  require("../assets/images/carts.png") ,
 sliders : [
   require("../assets/images/slider1.png"),
   require("../assets/images/slider2.png"),
   require("../assets/images/slider3.png"),
 ],
items: [
  require("../assets/images/item1.jpg"),
  require("../assets/images/item2.jpg"),
  require("../assets/images/item3.jpg"),
  require("../assets/images/item4.jpg"),
  require("../assets/images/item5.jpg"),
  require("../assets/images/item6.jpg"),
]
 
}


export default images;