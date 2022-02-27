import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { useAppDispatch } from '../../../app/reduxHooks/hooks'
import FeedsLoader from '../../../components/FeedsLoader'
import Following from '../../../components/Following'
import SearchHeader from '../../../components/SearchHeader'
import { feedData } from '../../../constants/Data'
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice'
import { homeStackProp } from '../../../Types'
import { styles } from './styles'

const Feeds = ({navigation}: homeStackProp) => {
    const dispatch = useAppDispatch();
    const [isLoaded, setIsLoader] = useState<boolean>(false)
    const renderFeeds = ({item}: any) => (
        <Following navigation={navigation} storeName={item.storeName} rating={item.rating} />
    )

    useEffect(() => {
    navigation.addListener("focus",()=> {
      dispatch(setBottomNav(false))
    })
  },[])
    return (
        <View style={styles.main}>
           {/* SEARCH BAR CONTENT */}
           <SearchHeader navigation={navigation}/>
           {
             isLoaded ? (
              <>
        <ScrollView style={styles.ContentContainer}>
           <Text style={styles.headerTitle}>Feed</Text>
            <FlatList 
            renderItem={renderFeeds}
            data={feedData}
            contentContainerStyle={{paddingBottom: 10}}
            showsVerticalScrollIndicator={false}
            />
          </ScrollView>
   
              </>
             ): (
               <View style={styles.loader}>
                 <FeedsLoader />
               </View>
             )
           }
       </View>
    )
}

export default Feeds
