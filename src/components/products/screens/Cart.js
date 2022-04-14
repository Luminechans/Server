import React from 'react'
import { StyleSheet, Text, View, Image,TextInput,Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Your Cart</Text>
            <Text style={styles.line}></Text>
            <View style={styles.productContainer}>
                <Image style={styles.image} resizeMode='cover' source={require('../../../../assets/images/ima.png')}/>
                <View style={styles.product}>
                    <View style={styles.nikeContainer}>
                        <Text style={styles.textNike} numberOfLines={2}>Nike Air Zoom Pegasus 36 Miami</Text>
                        <Image style={styles.imageHeart} resizeMode='cover' source={require('../../../../assets/images/love.png')}/>
                        <MaterialIcons name="delete-outline" size={24} color="black" /> 
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.price}>$299,43</Text>
                        <View style={styles.total}>
                            <Text style={styles.removeAction}>-</Text>
                            <Text style={styles.quantity}>1</Text>
                            <Text style={styles.addAction}>+</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image style={styles.image} resizeMode='cover' source={require('../../../../assets/images/imageTuii.png')}/>
                <View style={styles.product}>
                    <View style={styles.nikeContainer}>
                        <Text style={styles.textNike} numberOfLines={2}>Nike Air Zoom Pegasus 36 Miami</Text>
                        <Image style={styles.imageHeart} resizeMode='cover' source={require('../../../../assets/images/love.png')}/>
                        <MaterialIcons name="delete-outline" size={24} color="black" /> 
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.price}>$299,43</Text>
                        <View style={styles.total}>
                            <Text style={styles.removeAction}>-</Text>
                            <Text style={styles.quantity}>1</Text>
                            <Text style={styles.addAction}>+</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput placeholder='Enter Cupon Code' style={styles.textInput}/>
                <Pressable style={styles.textInputbuttom}>
                    <Text style={styles.buttomText}>Apply</Text>
                </Pressable>
            </View>
            <View style={styles.totalPriceContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Items (3)</Text>
                    <Text style={styles.itemPrice}>$598.86</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Shipping</Text>
                    <Text style={styles.itemPrice}>$40.00</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Import charges</Text>
                    <Text style={styles.itemPrice}>$128.00</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.items}>Total Price</Text>
                    <Text style={styles.itemPrices}>$766.86</Text>
                </View>
            </View>
            <Pressable style={styles.buttomContainer}>
                <Text style={styles.textButtom}>Check out</Text>
            </Pressable>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    textButtom:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
    },
    buttomContainer:{
        height:60,
        borderRadius:5,
        backgroundColor:'#40BFFF',
        marginHorizontal: 20,
        marginVertical: 25,
        justifyContent:'center',
        alignItems:'center'
    },
    itemPrices:{
        color:'#40BFFF',
        fontSize:16
    },
    items:{
        color:'#223263',
        fontWeight:'700',
        // textTransform:'uppercase',
        fontSize:16
    },
    itemPrice:{
        color:'#223263'
    },
    item:{
        color:'#9098B1'
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        marginVertical:15,
    },
    totalPriceContainer:{
        borderWidth:1,
        borderColor:'#EBF0FF',
        marginHorizontal:20,
        borderRadius:5,
        marginTop:25
    },
    buttomText:{
        color:'white',
        fontWeight:'700'
    },
    textInputbuttom:{
        width:90,
        backgroundColor:'#40BFFF',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:5,
        borderTopRightRadius:5
    },
    textInput:{
        color:'#9098B1',
        fontSize:14,
        fontWeight:'400',
        marginLeft:10
    },
    textInputContainer:{
        flexDirection:'row',
        height:60,
        // paddingHorizontal:10,
        // paddingVertical:10,
        borderColor:'#EBF0FF',
        borderWidth:1,
        borderRadius:5,
        marginTop:32,
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:25
    },
    addAction: {
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderWidth: 1,
        borderColor:'#EBF0FF',
        width: 25.5,
        height: 25.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: '#9098B1'
      },
      quantity: {
        color: '#9098B1',
        borderColor:'#EBF0FF',
        borderWidth: 1,
        backgroundColor:'#EBF0FF',
        width: 40,
        height: 25.5,
        textAlign: 'center',
        lineHeight: 20.5,
      },
      removeAction: {
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        borderWidth: 1,
        borderColor:'#EBF0FF',
        width: 25.5,
        height: 25.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: '#9098B1'
      },
    total:{
        flexDirection:'row',
    },
    price:{
        color:'#40BFFF'
    },
    totalContainer:{

        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    imageHeart:{
        marginHorizontal:6,
        marginLeft:15
    },
    textNike:{
        width:160,
        color:'#223263',
        fontSize:13,
        textTransform: 'uppercase',
        fontWeight:'700'
    },
    nikeContainer:{
        flexDirection:'row'
    },
    product:{
        marginLeft:8
    },
    image:{
        borderRadius:5,
        width:75,
        height:75
    },
    productContainer:{
        flexDirection:'row',
        borderColor:'#EBF0FF',
        borderWidth:1,
        marginTop:15,
        paddingHorizontal:10,
        paddingVertical:10,
        marginHorizontal:20,
        borderRadius:5
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#EBF0FF'
    },
    title:{
            marginTop: 40,
            textAlign: 'left',
            fontSize: 20,
            textTransform: 'uppercase',
            marginBottom: 20
    },
    container:{
        flex:1
    },
})
