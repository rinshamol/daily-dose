import { useState, useEffect, use } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const {width} = Dimensions.get('window');
export default function AuthScreen(){
    const [hasBiometric, setHasBiometric] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        checkBiometrics();
    }, []);
    const checkBiometrics = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEntrolled = await LocalAuthentication.isEnrolledAsync();
        setHasBiometric(hasHardware && isEntrolled);
    }
    const authenticate = async () => {
        try{
            setIsAuthenticated(true);
            setError(null);
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            const isEntrolled = await LocalAuthentication.isEnrolledAsync();
            const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
            //handle supported types
            const auth = await LocalAuthentication.authenticateAsync({
                promptMessage: hasHardware && isEntrolled ? 'Use Face ID/Touch ID' : 'Enter your PIN to access medications',
                fallbackLabel: 'Use PIN',
                cancelLabel: 'Cancel',
                disableDeviceFallback: false
            })
            if(auth.success){
                router.replace('/home');
            }else{
                setError('Authentication failed. Please try again.');
            }
        }catch(error){
        }
    }
    return(
    <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={styles.container}>
        <View style={styles.content}>
            <View style={styles.iconContent}>
                <Ionicons name="medical" size={80} color="white" />
            </View>
            <Text style={styles.title}>Daily Dose</Text>
            <Text style={styles.subtitle}>Your Personal Medical Reminder</Text>
            <View style={styles.card}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.instructionText}>
                    {hasBiometric? 'Use face ID/Touch ID/PIN to access your medications' : 'Enter your PIN to access your medications'}
                </Text>
                <TouchableOpacity onPress={authenticate} style={[styles.button, isAuthenticated && styles.buttonDisabled]} disabled={isAuthenticated}>
                    <Ionicons style={styles.buttonIcon} name={hasBiometric ? 'finger-print-outline' : 'keypad-outline'}  size={24} color='white' />
                    <Text style={styles.buttonText}>{isAuthenticated ? 'Verifying...' : hasBiometric ? 'Authenticate' : 'Enter PIN'}</Text>
                </TouchableOpacity>
                {error && <View style={styles.errorContainer}>
                    <Ionicons name="alert-circle" size={20} color="#f44336" />
                    <Text>{error}</Text>
                    </View>}
            </View>
        </View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContent: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3
    },
    subtitle: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 40,
        textAlign: 'center'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        width: width - 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    instructionText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonIcon: {
        marginRight: 10,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',

    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#ffebee',
        borderRadius: 8,
    },
    errorText: {
        color: '#f44336',
        fontSize:14,
        marginLeft: 8,
    }
})