import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Detail from '../screens/VendorsScreens/DetailScreen/Detail';
import Home from '../screens/VendorsScreens/HomeScreen/Home';
import { riderHomeParam, vendorHomeParam} from '../Types'

const VendorHomeNav = () => {

const Stack = createNativeStackNavigator<vendorHomeParam>();
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
      }} 
      initialRouteName='VendorHome' 
      >
          <Stack.Screen name="VendorHome" component={Home} />
          <Stack.Screen name="VendorDetail" component={Detail} />
          
      </Stack.Navigator>
    )
}

export default VendorHomeNav