import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from 'react-native';
import Logo from '../../../assets/images/logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    function getAllUsers() {
        const [UserList, setUserList] = useState([])
        const fetchData = async () => {
            let response = await axios.get('https://fakestoreapi.com/users')
            setUserList(response.data.users)
            console.log("users: " + response.data.users)
        }
        useEffect(() => {
            fetchData()
        }, [])


    }
    let onSignInPressed = () => {
        //navigation.navigate('Home');
        /* const [UserList, setUserList] = useState([]);
 
         useEffect(() => {
             const fetchData = async () => {
                 const response = await axios.get('https://fakestoreapi.com/users/1');
                 setUserList(response.UserList);
             }
             fetchData()
         }, []);*/
    }


    const onForgotPasswordPressed = () => {
        console.warn('on Forgot Password Pressed');
    };
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.2 }]}
                    resizeMode="contain" />
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='TERTIARY' />
                <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type='TERTIARY' />
                <SocialSignInButton />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

});



export default SignInScreen;
