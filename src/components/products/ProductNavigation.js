import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeStack from './screens/HomeStack';
import Cart from './screens/Cart';
import SearchStack from './screens/SearchStack';
import Offer from './screens/Offer';
import ProfileStack from './screens/ProfileStack';


export default  function ProductNavigation  ()  {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                if(route.name =="HomeStack"){
                    return <Image source={require('../../../assets/images/home.png')}/>
                }else if(route.name=="SearchStack"){
                    return <Image source={require('../../../assets/images/search.png')}/>
                }else if(route.name=="Cart"){
                    return <Image source={require('../../../assets/images/cart.png')}/>
                }else if(route.name=="Offer"){
                    return <Image source={require('../../../assets/images/offer.png')}/>
                }else if(route.name=="ProfileStack"){
                    return <Image source={require('../../../assets/images/user.png')}/>
                }
            },
            tabBarLabel:({focused})=> {
                if(route.name =="HomeStack"){
                    if(focused){
                        return <Image source={require('../../../assets/images/dog.png')}/>
                    }
                    return null;
                }else if(route.name=="SearchStack"){
                    if(focused){
                        return <Image source={require('../../../assets/images/dog.png')}/>
                    }
                    return null;
                }else if(route.name=="Cart"){
                    if(focused){
                        return <Image source={require('../../../assets/images/dog.png')}/>
                    }
                    return null;
                }else if(route.name=="Offer"){
                    if(focused){
                        return <Image source={require('../../../assets/images/dog.png')}/>
                    }
                    return null;
                }else if(route.name=="ProfileStack"){
                    if(focused){
                        return <Image source={require('../../../assets/images/dog.png')}/>
                    }
                    return null;
                }
            },
            headerShown: false
        })}>
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            <Tab.Screen name="SearchStack" component={SearchStack}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Offer" component={Offer}/>
            <Tab.Screen name="ProfileStack" component={ProfileStack}/>
        </Tab.Navigator>
    )
}

