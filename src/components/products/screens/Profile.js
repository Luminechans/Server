import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


const Profile = (props) => {
    const { navigation } = props;
    const {_id, name, address,phone, avatar, email} = data;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.infoConainer}>
                <View style={styles.avatarContainer}>
                {
                    avatar.trim().length ==0 ?
                    <FontAwesome name="user-circle" size={24} color="black" />
                    : <Image source = {{uri: avatar}} style={styles.avatar} resizeMode = 'cover'/>
                }
                    
                </View>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                    <Text numberOfLines={1} style={styles.email}>{email}</Text>
                </View>
            </View>
            <View style ={styles.actionContainer}>
                    <Text style ={styles.actionTitle}>Chung</Text>
                    <Text onPress = {() => navigation.navigate('EditProfile')} style ={styles.action} >Chỉnh sửa thông tin</Text>
                    <Text onPress = {() => navigation.navigate('CartHistory')} style ={styles.action}>Lịch sử giao dịch</Text>
                    <Text style ={styles.actionTitle}>Ứng dụng</Text>
                    <Text style ={[styles.action,styles.logout]}>Đăng xuất</Text>
                </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    logout:{
        color:'red'
    },
    actionContainer:{
        marginTop:40,
    },
    actionTitle:{
        color:'#7F7F7F',
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'#ABABAB',
        marginTop:16
    },
    action:{
        fontSize:16,
        marginTop:15
    },
    email:{
        fontSize:14,
        color:'#7F7F7F'
    },
    name:{
        fontSize:16,
    },
    nameContainer:{},
    avatar:{
        width:'80%',
        height:'80%',
        borderRadius:20,
    },
    avatarContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        height:40,
    },
    infoConainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15,
        alignItems:'center'
    },
    title:{
        fontSize:18,
        textAlign:'center',
        textTransform:'uppercase',
    },
    container:{
        paddingHorizontal: 48,
        flex: 1,
        backgroundColor:'white',
        paddingTop:32,
    },
})

var data = {
    "_id": "61e82569ba79ff0016231d2b",
    "name":"Phạm Văn Diễn",
    "address":"Thái Bình",
    "phone":"0999999999",
    "avatar":"",
    "email": "dien9x5@gmail.com",
    "createdAt": "2022-01-19T14:51:21.489Z",
    "updatedAt": "2022-01-19T14:51:21.489Z",
    "__v": 0
}
