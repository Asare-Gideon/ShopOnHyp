import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ImageSourcePropType } from "react-native";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";

export type MainStackParams = {
  Initial: undefined;
  Login: undefined;
  Signup: undefined;
};
export type initialPageProp = NativeStackScreenProps<
  MainStackParams,
  "Initial"
>;

export type HomeTabParams ={
  Home: undefined,
  Carts: undefined,
  Profile: undefined,
  Orders: undefined,
  WishList: undefined,
};
export type homeScreenProps = BottomTabScreenProps<HomeTabParams, "Home">

export interface itemProp{
  image : ImageSourcePropType,
  text : string,
  title: string,
  price: number
}
export interface categoriesProp{
  title : string,
  toggle: boolean
}
export interface imageSliderProp {
  image : ImageSourcePropType
}



export type categoriesDataTyp = {
  id: string;
  title: string;
}[];

export type itemsDataType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  text: String;
  price: number;
}[];

