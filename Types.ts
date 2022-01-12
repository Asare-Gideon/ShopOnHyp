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

export type HomeTabParams = {
  HomeMain: undefined;
  Carts: undefined;
  AccountNav: undefined;
  Feeds: undefined;
  WishList: undefined;
};
export type VendorHomeTabParams = {
  VendorsHome: undefined;
  Post: undefined;
  Chat: undefined;
  Account: undefined;
};
export type RiderTabParams ={
  RiderMain : undefined,
  Offers: undefined,
  Notification: undefined,
  Account: undefined,
}
export type homeScreenProps = BottomTabScreenProps<HomeTabParams, "HomeMain">;

export interface itemProp {
  image: ImageSourcePropType;
  text: string;
  title: string;
  price: number;
  like?: boolean;
  navigation: NativeStackNavigationProp<homeStackParams>;
}
export interface categoriesProp {
  title: string;
  toggle: boolean;
  handle: any;
}
export interface imageSliderProp {
  image: ImageSourcePropType;
  isDetail: boolean;
}

export interface cartsProp {
  image: ImageSourcePropType;
  title: string;
  text: string;
  price: number;
  navigation: NativeStackNavigationProp<homeStackParams>;
}

export type categoriesDataTyp = {
  id: string;
  title: string;
  selected: boolean;
}[];

export type itemsDataType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  text: String;
  price: number;
}[];

export type homeStackParams = {
  Home: undefined;
  Notification: undefined;
  Detail: undefined;
  Chat: undefined;
  SellerHome: undefined;
  Order: undefined;
};

export type homeStackProp = NativeStackScreenProps<homeStackParams>;

export interface sliderProp {
  data: any;
  isDetail?: boolean;
}

export interface headerProp {
  title: string;
  navigation?: any;
}

export interface followingProp {
  storeName: string;
  rating: number;
  navigation: NativeStackNavigationProp<homeStackParams>;
}

export interface searchHeaderProp {
  navigation: NativeStackNavigationProp<homeStackParams>;
}

export interface accountComponentProp {
  Icon?: any;
  IconName?: string;
  title: string;
  navigation: NativeStackNavigationProp<AccountParams, "Account">;
  navigateTo: any;
}

export type AccountParams = {
  Account: undefined;
  Orders: undefined;
  Inbox: undefined;
  PendingReview: undefined;
  Help: undefined;
  ChangePassword: undefined;
};

export type accouontProp = NativeStackScreenProps<AccountParams, "Account">;

export type avatarProp = {
  image: ImageSourcePropType | undefined;
  abv: string;
};

export type textInputProp = {
  name: string;
};
export type messageProp = {
  message: string;
  image: ImageSourcePropType;
  time: any;
  name: string;
  handle: () => void;
  number: number;
};

export type cardProp = {
  title: string,
  text: string,
  Icon: any,
  color? : string,
  lightColor?: string,
  iconName: string, 
}

export type vendorChatNavParams = {
  ChatHome: undefined,
  ActiveChat : undefined,
  ChatScreen: undefined
}

export type vendorChatProp = NativeStackScreenProps<vendorChatNavParams, "ChatHome">  

export type riderNavParam  = {
  RiderHome: undefined,
}

export type riderHomeParam = {
  RidersHome: undefined,
  RidersDetail : undefined,
}
export type riderHomeProp =  NativeStackScreenProps<riderHomeParam, "RidersHome">

export type vendorHomeParam = {
  VendorHome: undefined,
  VendorDetail : undefined,
}
export type vendorHomeProp =  NativeStackScreenProps<vendorHomeParam, "VendorHome">


export type offerComponentProp = {
  image: ImageSourcePropType,
  storeName: string,
  productName: string,
  time: any,

}
export type notProp = {
  name : string,
  message: string,
  time: any
}