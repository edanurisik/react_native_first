import React, { } from 'react';
import {
    StyleSheet
} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButton = () => {
    const onSignInGoogle = () => {
        console.warn('on Google Pressed');
    };

    return (
        <>
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />


        </>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    }
});



export default SocialSignInButton;
