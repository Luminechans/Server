import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView, ToastAndroid } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { UserContext } from '../UserContext';

const Login = (props) => {

    const { navigation } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const { onRegister } = useContext(UserContext);

    const register = async () => {
        if (!email || !password || email.trim().length == 0 || password.trim().length == 0 || !confirm_password || confirm_password.trim().length == 0) {
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.CENTER);
            return;
        }
        if (password != confirm_password) {
            ToastAndroid.show('Xác nhận mật khẩu không đúng', ToastAndroid.CENTER);
            return;
        }


        const res = await onRegister(email, password, confirm_password);
        if (res == false) {
            ToastAndroid.show('Đăng kí không thành công', ToastAndroid.CENTER);
            
        }else{
            navigation.navigate('Login');
            ToastAndroid.show('Đăng kí thành công', ToastAndroid.CENTER);
        }
    }

    return (
        <ScrollView showVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='cover' source={require('../../../../assets/images/Icon.png')} />
                </View>
                <View style={styles.welcomesign}>
                    <Text style={styles.welcome}>Let's Get Started</Text>
                    <Text style={styles.sign}>Create an new account</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputYourEmail}>
                        <TextInput style={styles.input} placeholder="Your Email"
                            value={email}
                            onChangeText={setEmail}
                        ></TextInput>
                        <MaterialIcons style={styles.iconGmail} name="email" size={24} color="black" />
                    </View>
                    <View style={styles.inputYourEmail}>
                        <TextInput style={styles.input} placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry></TextInput>
                        <MaterialIcons style={styles.iconPass} name="lock-outline" size={24} color="black" />
                    </View>
                    <View style={styles.inputYourEmail}>
                        <TextInput style={styles.input} placeholder="Confirm Password"
                            value={confirm_password}
                            onChangeText={setConfirm_password}
                            secureTextEntry></TextInput>
                        <MaterialIcons style={styles.iconPass} name="lock-outline" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Pressable style={styles.bottom} onPress={register}>
                        <Text style={styles.bottomText}>Sign Up</Text>
                    </Pressable>
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountText}>Don't have a account ? </Text>
                    <Text style={styles.accountRigister} onPress={() => navigation.goBack()}>Sign In</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    accountRigister: {
        color: '#40BFFF',

    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30

    },


    bottomContainer: {
        backgroundColor: '#40BFFF',
        height: 57,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 16,
        marginRight: 16

    },
    bottomText: {
        color: 'white',
        textAlign: 'center'
    },
    bottom: {
    },
    iconPass: {
        position: 'absolute',
        left: 6,
        top: 7,
    },
    iconGmail: {
        position: 'absolute',
        left: 6,
        top: 7,
    },
    input: {
        paddingLeft: 30
    },
    inputYourEmail: {
        position: 'relative',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#223263',
        borderRadius: 20,
    },
    inputContainer: {},
    sign: {},
    welcome: {
        fontSize: 20,
        color: '#223263'
    },
    welcomesign: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 75,
        height: 75,
        marginLeft: 157,
        marginTop: 112
    },
    container: {
        flex: 1,
    }
})
