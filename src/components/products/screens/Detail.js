

import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';

// const PartialView = (props) => {
//     // const { name, size, price, madein, quantity } = props;
//     const {navigation , route:{params: {_id}}} = props
//     const { product, onGetProductById} = useContext(ProductContext);
//     useEffect(async() => {
//         await onGetProductById(_id);
//       return () => {
//       }
//     }, [])

//     const [number, setNumber] = useState(0);
//     const onNumberChage = (isAdd) => {
//         if (isAdd == true) {
//             setNumber(number + 1);
//         } else if (isAdd == false && number >= 1) {
//             setNumber(number - 1);
//         }
//     }
//     return (
//         <>
//             <View style={styles.productInfoContainer}>
//                 <Text style={styles.productNamename}>{product.name}</Text>
//                 <View style={styles.productImageStar}>
//                     <Image source={require('../../../../assets/images/Group391.png')} />
//                 </View>
//                 <Text style={styles.productPrice}>${product.price}</Text>
//                 <Text style={styles.productTitle}>Chi tiết sản phẩm</Text>
//                 <View style={styles.productDetail}>
//                     <Text style={styles.productDetailText}>Kích cơ</Text>
//                     <Text style={styles.productDetailText}>{product.quantity}</Text>
//                 </View>
//                 <View style={styles.productDetail}>
//                     <Text style={styles.productDetailText}>Xuất sứ</Text>
//                     <Text style={styles.productDetailText}>{product.category}</Text>
//                 </View>
//                 <View style={styles.productDetail}>
//                     <Text style={styles.productDetailText}>Tình trạng</Text>
//                     <Text style={styles.productDetailText}>Còn:  sp</Text>
//                 </View>
//             </View>
//             <View style={styles.cartProcessContainer}>
//                 <View style={styles.processQuantity}>
//                     <Text style={styles.quantityText}>Đã chọn {number} sản phẩm</Text>
//                     <View style={styles.quantityAction}>
//                         <Text onPress={() => onNumberChage(false)} style={styles.removeAction}>-</Text>
//                         <Text style={styles.quantity}>{number}</Text>
//                         <Text onPress={() => onNumberChage(true)} style={styles.addAction}>+</Text>
//                     </View>
//                 </View>
//                 <View style={styles.processTotal}>
//                     <Text style={styles.totalText}>Tạm tính</Text>
//                     <Text style={styles.total}>{number * price}đ</Text>
//                 </View>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Pressable style={[styles.button, number > 0 ? styles.checkColor : null]}>
//                     <Text style={styles.buttonText}>Chọn mua</Text>
//                 </Pressable>
//             </View>
//         </>
//     )
// }


const Detail = (props) => {
    const { navigation, route: { params: { _id } } } = props
    const { product, onGetProductById } = useContext(ProductContext);
    

    const [number, setNumber] = useState(0);
        const onNumberChage = (isAdd) => {
            if (isAdd == true) {
                setNumber(number + 1);
            } else if (isAdd == false && number >= 1) {
                setNumber(number - 1);
            }
        }

    console.log(
        product);
    useEffect(async () => {
        await onGetProductById(_id);
        return () => {
        }
    }, [])
    if(!product._id) return(<></>)
    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.productNameContainer}>
                    <View style={styles.productNameIcon}>
                        <AntDesign name="left" size={24} color="#9098B1" style={{ marginLeft: 15 }}
                            onPress={() => navigation.navigate('Home')} />
                        <Text style={styles.productName}>{product.name}</Text>
                    </View>
                    <View style={styles.productNameIcons}>
                        <Feather name="search" size={24} color="#9098B1" style={{ marginRight: 15 }} />
                        <Entypo name="dots-three-vertical" size={24} color="#9098B1" style={{ marginRight: 15 }} />
                    </View>

                </View>
                <View style={styles.productImagesContainer}>
                    <Image source={{ uri: product.image }}
                        style={styles.image} resizeMode='cover' />
                </View>
                <View style={styles.productImagesSlideShow}>
                    <Image source={require('../../../../assets/images/SlideShow.png')} />
                </View>
                {/* <PartialView name={product.name} price={product.price} quantity={product.quantity} category={product.category}  /> */}
           
            <View style={styles.productInfoContainer}>
                <Text style={styles.productNamename}>{product.name}</Text>
                <View style={styles.productImageStar}>
                    <Image source={require('../../../../assets/images/Group391.png')} />
                </View>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productTitle}>Chi tiết sản phẩm</Text>
                {/* <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Kích cơ</Text>
                    <Text style={styles.productDetailText}>{product.released}</Text>
                </View> */}
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Danh mục</Text>
                    <Text style={styles.productDetailText}>{product.name}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Tình trạng</Text>
                    <Text style={styles.productDetailText}>Còn:{product.category_id.name}  sp</Text>
                </View>
                <View style={styles.productDescription}>
                    <Text style={styles.productDescriptionText}>Mô tả</Text>
                    <Text style={styles.productDetailText}>{product.description} </Text>
                </View>
            </View>
            <View style={styles.cartProcessContainer}>
                <View style={styles.processQuantity}>
                    <Text style={styles.quantityText}>Đã chọn {number} sản phẩm</Text>
                    <View style={styles.quantityAction}>
                        <Text onPress={() => onNumberChage(false)} style={styles.removeAction}>-</Text>
                        <Text style={styles.quantity}>{number}</Text>
                        <Text onPress={() => onNumberChage(true)} style={styles.addAction}>+</Text>
                    </View>
                </View>
                <View style={styles.processTotal}>
                    <Text style={styles.totalText}>Tạm tính</Text>
                    <Text style={styles.total}>{number *product.price}đ</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, number > 0 ? styles.checkColor : null]}>
                    <Text style={styles.buttonText}>Chọn mua</Text>
                </Pressable>
            </View>
            </ScrollView>
        </View>
        
    );
};

export default Detail;

const styles = StyleSheet.create({
    productDescriptionText:{
        fontWeight:'700'
    },
    productDescription:{
        marginTop:8
    },
    productImageStar: {
        marginBottom: 16
    },
    productNamename: {
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '700',
        color: '#223263'
    },
    checkColor: {
        backgroundColor: '#007537',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#ABABAB',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonContainer: {
        paddingHorizontal: 24,
        height: 50,
        marginTop: 24,
    },
    total: {
        marginTop: 4,
        textAlign: 'right',
        fontWeight: '500',
        fontSize: 24,
    },
    totalText: {
        color: 'black',
        opacity: 0.6,
    },
    processTotal: {

    },
    addAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 25.5,
        height: 25.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black'
    },
    quantity: {
        color: 'black'
    },
    removeAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 25.5,
        height: 25.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black'
    },
    quantityAction: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantityText: {
        fontSize: 14
    },
    processQuantity: {},
    cartProcessContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    productDetailText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3A3A3A',
    },
    productDetail: {
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: '700',
        color: '#40BFFF',
    },
    productInfoContainer: {
        paddingHorizontal: 48,
        paddingVertical: 32,
    },
    image: {
        width: 200,
        height: 200,
    },

    productImagesPager: {
        flex: 1,
    },
    productImagesSlideShow: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImagesContainer: {
        width: '100%',
        height: 270,
    },
    productNameIcon: {
        flexDirection: 'row',
    },
    productNameIcons: {
        flexDirection: 'row',
    },
    productNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 55,
        marginTop: 40,
        paddingTop: 10
    },
    productName: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    }

});

var product = {
    "sold": 90,
    "images":
        require('../../../../assets/images/image5.png')
    ,
    "_id": "61d12d14555401c8610cfa3b",
    "name": "Nike Air Max 270 React ENG",
    "price": 299.33,
    "madein": "Indonesia",
    "quantity": 3801758691,
    "category": "61d11bf386511f0016f490c9",
    "size": "43",
    "createdAt": "2021-03-25T23:21:45.000Z",
    "updatedAt": "2021-10-07T08:02:19.000Z"
}

