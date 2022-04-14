import React, {useState , useContext} from 'react'
import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView ,ToastAndroid} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {UserContext} from '../UserContext';

const Login = (props) => {

    const { navigation } = props;

    const [email, setEmail] = useState('dat@gmail.com');
    const [password, setPassword] = useState('1');
    const {onLogin} = useContext(UserContext);

    const login = async () =>{
        if (!email || !password || email.trim().length ==0 || password.trim().length ==0) {
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin',ToastAndroid.CENTER);
            return;
        }
        const res = await onLogin(email,password);
        if (res == false) {
            ToastAndroid.show('Đăng nhập không thành công',ToastAndroid.CENTER);
        }
    }

    return (
        <ScrollView showVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='cover' source={require('../../../../assets/images/Icon.png')} />
                </View>
                <View style={styles.welcomesign}>
                    <Text style={styles.welcome}>Welcome to Lafyuu</Text>
                    <Text style={styles.sign}>Sign in to continue</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputYourEmail}>
                        <TextInput style={styles.input} 
                                    placeholder="Your Email" 
                                    value={email}
                                    onChangeText={setEmail}></TextInput>
                        <MaterialIcons style={styles.iconGmail} name="email" size={24} color="black" />
                    </View>
                    <View style={styles.inputYourEmail}>
                        <TextInput style={styles.input} 
                                    placeholder="Password"
                                    value={password}
                                    onChangeText={setPassword}></TextInput>
                        <MaterialIcons style={styles.iconPass} name="lock-outline" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Pressable style={styles.bottom} onPress={login}>
                        <Text style={styles.bottomText}>Sign in</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.or}>OR</Text>
                </View>
                <View style={styles.loginContainer}>
                    <FontAwesome style={styles.iconGoogle} name="google-plus" size={24} color="black" />
                    <Text style={styles.logingoogle}>Login with Google</Text>

                </View>
                <View style={styles.loginContainer}>
                    <FontAwesome style={styles.iconGoogle} name="facebook-square" size={24} color="black" />
                    <Text style={styles.loginface}>Login with facebook</Text>
                </View>

                <Text style={styles.forgotText}>Forgot Password ?</Text>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountText}>Don't have a account ? </Text>
                    <Text style={styles.accountRigister} onPress={()=> navigation.navigate('Register')}>Register</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    or: {
        textAlign: 'center',
        marginTop: 10
    },
    accountRigister: {
        color: '#40BFFF',

    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    forgotText: {
        marginVertical: 10,
        color: '#40BFFF',
        textAlign: 'center'
    },

    loginContainer: {
        borderColor: '#9098B1',
        borderWidth: 0.5,
        height: 40,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 5
    },
    loginface: {
        color: '#9098B1',
        textAlign: 'center',
        marginLeft: 90
    },
    iconGoogle: {
        marginLeft: 20
    },
    logingoogle: {
        color: '#9098B1',
        textAlign: 'center',
        marginLeft: 80
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
