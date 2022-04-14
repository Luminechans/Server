import React ,{useContext}from 'react'
import {UserContext} from '../user/UserContext';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import UserNavigation from '../user/UserNavigation';
import ProductNavigation from '../products/ProductNavigation';

export default function Navigation  ()  {
    const {isLoggedIn} = useContext(UserContext);
    // const isLoggedIn =false;
    return (
        <NavigationContainer>
            {
                isLoggedIn ==true ?
                <ProductNavigation/> :
                <UserNavigation/>
            }
        </NavigationContainer>
    )
}

