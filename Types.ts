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
}



export type dataType = {
  id: string;
  title: string;
  img: ImageSourcePropType;
}[];

export type postDatType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  description: String;
  name: String;
}[];

