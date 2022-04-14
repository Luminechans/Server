
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { ProductContext } from '../ProductContext'

export default function Home(props) {
    const { navigation } = props;

    const isLoading = false;

    const { products, onGetProducts } = useContext(ProductContext);

    // const { onGetProductForHomePage } = useContext(ProductContext);
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        await onGetProducts();
        return () => {
            res;
        }
    }, []);

    const renderItem = ({ item }) => {
        const { _id, name, price, image, } = item;
        return (
            <View style={styles.categoryContainer}>
                {/* <View>
                    <Text style={styles.categoryName}>__{name}__</Text>
                </View> */}
                <View style={styles.productsContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('Detail', {_id:_id })} style={styles.product}>
                        <View style={styles.productImageContainer}>
                            <Image style={styles.productImage} resizeMode='cover'
                                source={{ uri: image }} />
                        </View>
                        <View >
                            <Image
                                source={require('../../../../assets/images/Group391.png')} />
                        </View>
                        <View style={styles.productNameContainer}>
                            <Text numberOfLines={1} style={styles.productName}>{name}</Text>
                        </View>
                        <View style={styles.productPriceContainer}>
                            <Text style={styles.productPrice}>${price}</Text>
                        </View>
                        <View style={styles.productSaleContainer}>
                            <Text style={styles.productSale}>$534.33</Text>
                            <Text style={styles.productSaleOff}>24% Off</Text>

                        </View>
                    </Pressable>
                </View>
            </View>
        )
    }

    const renderHeader = ({ item }) => {
        return (
            <View style={styles.imageContainer}>

                <Image style={styles.image} resizeMode='cover'
                    source={require('../../../../assets/images/header.png')} />
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText1}>Recomended</Text>
                    <Text style={styles.imageText1}>Product</Text>
                    <Text style={styles.imageText2}>We recommend the best for you</Text>
                </View>
            </View>

        )
    }
    return (
        <View style={styles.container}>
            {
                isLoading == true ? <Text style={styles.loadingText}>Đang tải giữ liệu</Text> :
                    <FlatList data={products}
                        renderItem={renderItem}
                        keyExtractor={Math.random}
                        ListHeaderComponent={renderHeader} />
            }

        </View>
    )
}


const styles = StyleSheet.create({
    productSaleOff: {
        marginLeft: 8,
        fontSize: 10,
        color: '#FB7181'
    },
    productSale: {
        fontSize: 10,
        fontWeight: '400',
        textDecorationLine: 'line-through',
        color: '#9098B1'
    },
    productSaleContainer: {
        flexDirection: 'row',
        marginTop: 4
    },
    loadingText: {

    },
    categoryName: {
        color: 'red',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 34,
        marginTop: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#EBF0FF',
    },
    productPrice: {
        color: '#40BFFF',
        fontSize: 14,
        fontWeight: '700'
    },
    productPriceContainer: {
        marginTop: 16
    },
    productName: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '500'
    },
    productNameContainer: {
        marginTop: 4,
    },
    categoryContainer: {
        paddingHorizontal: 24,
    },
    productImage: {
        width: 100,
        height: 100
    },
    productImageContainer: {
        height: 134,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginBottom: 8
    },
    product: {
        borderWidth: 0.5,
        borderColor: '#EBF0FF',
        width: '48%',
        marginTop: 12,
        borderRadius: 8,
        padding: 10,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'

    },
    imageText2: {
        color: 'white',
        marginTop: 16

    },
    imageText1: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
    },
    imageTextContainer: {
        position: 'absolute',
        marginTop: 48,
        marginLeft: 24
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    imageContainer: {
        width: '100%',
        height: 205,
        marginTop: 30,
        position: 'relative'
    },
    container: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'white'
    },
})

var data = [
    {
        "_id": "61d11c4b86511f0016f490ed",
        "name": "LIST OF FEATURED PRODUCTS",
        "products": [
            {
                "_id": "61d12f0c555401c8610fb8da",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "Russia",
                "quantity": 4593942547,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image1.png'),
                "sold": 372,
                "size": "S",
                "createdAt": "2021-09-09T10:51:16.000Z",
                "updatedAt": "2021-11-03T17:51:12.000Z"
            },
            {
                "_id": "61d12f0c555401c8610fb8d2",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "Russia",
                "quantity": 4639829816,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image2.png'),
                "sold": 307,
                "size": "3XL",
                "createdAt": "2021-07-25T08:56:22.000Z",
                "updatedAt": "2021-08-21T13:12:26.000Z"
            },
            {
                "_id": "61d12f0c555401c8610fb8dc",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "Finland",
                "quantity": 6045438052,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image3.png'),
                "sold": 107,
                "size": "M",
                "createdAt": "2021-04-17T09:05:36.000Z",
                "updatedAt": "2021-06-16T06:42:00.000Z"
            },
            {
                "_id": "61d12f0c555401c8610fb8dd",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "Armenia",
                "quantity": 2518305581,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image4.png'),
                "sold": 104,
                "size": "S",
                "createdAt": "2021-05-24T19:12:38.000Z",
                "updatedAt": "2021-12-27T15:12:21.000Z"
            },
            {
                "_id": "61d12f0c555401c8610fb8df",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "Ireland",
                "quantity": 4194160884,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image1.png'),
                "sold": 137,
                "size": "3XL",
                "createdAt": "2021-03-18T14:52:14.000Z",
                "updatedAt": "2021-01-28T02:59:57.000Z"
            },
            {
                "_id": "61d12f0c555401c8610fb8d5",
                "name": "Nike Air Max 270 React ENG",
                "price": 299.43,
                "madein": "China",
                "quantity": 6865976422,
                "category": "61d11c4b86511f0016f490ed",
                "images": require('../../../../assets/images/image4.png'),
                "sold": 109,
                "size": "L",
                "createdAt": "2021-07-27T12:19:46.000Z",
                "updatedAt": "2021-05-12T02:18:43.000Z"
            }
        ]
    },
]
// import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
// import React, { useContext, useEffect } from 'react'
// import { ProductContext } from '../ProductContext'

// const Home = (props) => {
//   const { navigation } = props;
//   const { products, onGetProducts } = useContext(ProductContext);

//   useEffect(async () => {
//     await onGetProducts();
//     return () => { }
//   }, []);

//   const renderItem = ({ item }) => {
//     const { _id, name, price, image } = item;
//     return (
//       <View>
//         <Image
//           source={{ uri: image }}
//           resizeMode={'cover'}
//           style={{ width: 100, height: 100 }}
//         />
//         <Text>Name: {name}</Text>
//         <Text>Price: {price}</Text>
//       </View>
//     )
//   }
// console.log(products);
//   return (
//     <View style={styles.container}>
//       <Text>List</Text>
//       <FlatList 
//         data={products}
//         renderItem={renderItem}
//         keyExtractor={Math.random}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 32,
//   }
// })