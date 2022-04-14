import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Flash = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.containerImage}>
            <Image style ={styles.image} resizeMode='cover' source = {require('../../../../assets/images/iconapp.png')}/>
            </View>
            <Text style={styles.welcome}>Welcome to Lafyuu</Text>
        </View>
    )
}

export default Flash

const styles = StyleSheet.create({
    welcome:{
        color:'white',
        marginTop: 20,
        fontSize:35,
        fontWeight:'700'
    },
    image:{
        height:'100%',
        width:'100%'
    },
    containerImage:{
        height:80,
        width:80,
        borderRadius: 8
    },
    container:{
        flex: 1,
        backgroundColor:'#40BFFF',
        justifyContent:'center',
        alignItems:'center',
    }
})
