import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Detail from '../screens/RidersScreens/DetailScreen/Detail'
import RiderHome from '../screens/RidersScreens/HomeScreen/RiderHome'
import { riderHomeParam} from '../Types'

const RidersHomeNav = () => {

const Stack = createNativeStackNavigator<riderHomeParam>();
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
      }} 
      initialRouteName='RidersHome' 
      >
          <Stack.Screen name="RidersHome" component={RiderHome} />
          <Stack.Screen name="RidersDetail" component={Detail} />
          
      </Stack.Navigator>
    )
}

export default RidersHomeNav