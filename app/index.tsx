import { View, Text, StyleSheet, Animated } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";


export default function SplashScreen() {
const fadeAnim = useRef(new Animated.Value(0)).current;
const scaleAnim = useRef(new Animated.Value(0.5)).current;
const router = useRouter();

useEffect(() => {
    Animated.parallel([
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }),
        Animated.spring(scaleAnim,{
            toValue: 1,
            tension: 10,
            friction: 2,
            useNativeDriver: true
        })
    ]).start();
    const timer = setTimeout(() => {
        router.replace('/auth');
        return () => clearTimeout(timer);
    },2000)
        
}, [])

    return (
        <View style={style.container}>
            <Animated.View style={[style.iconContainer,
             {
                opacity: fadeAnim,
                transform: [{scale: scaleAnim}]
             }
            ]}>
            <Ionicons name="medical" size={100} color="white"   />
            <Text style={style.appName}>Daily Dose</Text>
            </Animated.View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
       alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 20,
        letterSpacing:1
    }
})