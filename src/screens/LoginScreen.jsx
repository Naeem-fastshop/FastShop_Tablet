import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Switch,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/logo.png';
import {primaryColor} from '../utils/Color';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
const baseWidth = 375; // Base width for standard scaling (iPhone 6/7/8)
const baseHeight = 667; // Base height for standard scaling (iPhone 6/7/8)
const scaleWidth = deviceWidth / baseWidth;
const scaleHeight = deviceHeight / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight); // Use the smaller scale for better proportionality

const normalizeFontSize = size => {
  if (deviceWidth >= 768) {
    // Consider 768 as a breakpoint for tablets
    return Math.round(size * scale * 1); // Decrease size slightly for larger screens
  } else {
    return Math.round(size * scale); // Normal scaling for phones
  }
};

// Utility function to calculate chart size based on device dimensions
const normalizeChartSize = size => {
  if (deviceWidth >= 768) {
    return Math.round(size * scale * 1);
  } else {
    return Math.round(size * scale);
  }
};
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    // Check if username and password are stored in AsyncStorage
    const checkRememberedCredentials = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('password');
        const storedisRemember = await AsyncStorage.getItem('remember');

        if (storedUsername && storedPassword && storedisRemember) {
          setUsername(storedUsername);
          setPassword(storedPassword);
          setIsRememberMe(true);
        }
      } catch (error) {
        console.error('Error loading stored credentials:', error);
      }
    };
    checkRememberedCredentials();
  }, []);

  const handleRememberMeToggle = () => {
    setIsRememberMe(previousState => !previousState);
  };

  const loginFun = async () => {
    // if (username === '' || password === '') {
    //   ToastAndroid.show('Username & Password is required', ToastAndroid.SHORT);
    //   return;
    // }
    try {
      navigation.reset({
        index: 0,
        routes: [{name: 'Drawer'}],
      });

     
    } catch (error) {
      console.error('Error logging in:', error);
      ToastAndroid.show(
        'An error occurred. Please try again.',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#c3c3c3"
          value={username}
          onChangeText={setUsername}
          onFocus={() => console.log('Username focused')}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#c3c3c3"
          value={password}
          onChangeText={setPassword}
          onFocus={() => console.log('Password focused')}
        />
        <View style={styles.rememberMeContainer}>
          <View
            style={{
              transform: [
                {scaleX: normalizeChartSize(1)},
                {scaleY: normalizeChartSize(1)},
              ],
            }}>
            <Switch
              value={isRememberMe}
              onValueChange={handleRememberMeToggle}
              thumbColor="#fff"
              trackColor={{false: '#ccc', true: '#00ACED'}}
            />
          </View>
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={loginFun}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background
    marginTop: normalizeFontSize(-100),
  },
  logo: {
    width: normalizeChartSize(140),
    height: normalizeChartSize(140),
    marginBottom: normalizeFontSize(30),
  },
  form: {
    width: '80%',
    maxWidth: normalizeChartSize(400),
    padding: normalizeFontSize(20),
    backgroundColor: '#fff',
    borderRadius: normalizeFontSize(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1, // Ensure form is above other components
  },
  input: {
    height: normalizeChartSize(50),
    borderColor: '#ddd',
    borderWidth: normalizeFontSize(1),
    borderRadius: normalizeFontSize(10),
    marginBottom: normalizeFontSize(15),
    paddingHorizontal: normalizeFontSize(15),
    fontSize: normalizeFontSize(12),
    backgroundColor: '#fff', // Add background color to inputs
    color: 'black',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalizeFontSize(15),
  },
  rememberMeText: {
    marginLeft: normalizeFontSize(10),
    fontSize: normalizeFontSize(12),
    color: '#333',
  },
  button: {
    backgroundColor: primaryColor,
    paddingVertical: normalizeFontSize(12),
    borderRadius: normalizeFontSize(10),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: normalizeFontSize(15),
    fontWeight: 'bold',
  },
});

export default LoginScreen;
