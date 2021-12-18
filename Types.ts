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
  HomeMain: undefined,
  Carts: undefined,
  Account: undefined,
  Feeds: undefined,
  WishList: undefined,
};
export type homeScreenProps = BottomTabScreenProps<HomeTabParams, "HomeMain">

export interface itemProp{
  image : ImageSourcePropType,
  text : string,
  title: string,
  price: number,
  like?: boolean,
  navigation: NativeStackNavigationProp<homeStackParams> 
}
export interface categoriesProp{
  title : string,
  toggle: boolean,
  handle : any
}
export interface imageSliderProp {
  image : ImageSourcePropType,
  isDetail: boolean
}

export interface cartsProp {
  image: ImageSourcePropType,
  title : string,
  text : string,
  price: number,
  navigation: NativeStackNavigationProp<homeStackParams>

}

export type categoriesDataTyp = {
  id: string;
  title: string;
  selected: boolean
}[];

export type itemsDataType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  text: String;
  price: number;
  
}[];

export type homeStackParams = {
  Home: undefined,
  Notification: undefined,
  Detail : undefined,
  Chat: undefined,
  SellerHome: undefined,
}

export type homeStackProp = NativeStackScreenProps<homeStackParams>

export interface sliderProp {
  data: any,
  isDetail?: boolean
}

export interface headerProp {
  title: string,
  navigation? : any 
}

export interface followingProp {
 storeName: string;
 rating: number,
 navigation: NativeStackNavigationProp<homeStackParams>
}

export interface searchHeaderProp {
  navigation: NativeStackNavigationProp<homeStackParams> 
}

export interface accountComponentProp {
  Icon?: any,
  IconName?: string,
  title: string
}