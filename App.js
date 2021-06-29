import React from 'react';
import { View, StyleSheet,
  StatusBar, Image,
  TextInput, TouchableOpacity,
  Text, Platform,
  KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback } from 'react-native';

export default function App() {
 return (
   <KeyboardAvoidingView 
   behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
   >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />

          <Image
          source={require('./src/assets/logo.png')}
          style={styles.logo}  />

          <TextInput 
          placeholder='Celular, username ou email'
          style={styles.input} />

          <TextInput 
          placeholder='Sua senha'
          style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFace}>
            <Text style={styles.faceText}>Continue com o Sávio</Text>
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.line}></View>
            <Text style={{ marginHorizontal: '3%'}}>OU</Text>
            <View style={styles.line}></View>
          </View>

          <View style={styles.signUpView}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpBtn}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
   forgotText: {
    color: '#399fff'
   },
   btnLogin: {
     marginTop: '5%',
     backgroundColor: '#399fff',
     width: '90%',
     borderRadius: 5,
     height: 42,
     justifyContent: 'center',
     alignItems: 'center', 
   },
   loginText: {
     color: '#fff',
     fontSize: 17
   },
   btnFace: {
     flexDirection: 'row',
     alignItems: 'center',
     marginTop: '15%',
   },
   faceText: {
     color: '#399fff',
     paddingLeft: 8,
     fontSize: 15
   },
   separator: {
     marginTop: '10%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
   },
   line: {
     width: '40%',
     height: 2,
     backgroundColor: '#efeded',
     borderRadius: 5,
   },
   signUpView: {
     flexDirection: 'row',
     marginTop: '10%'
   },
   signUpText: {
     color: '#c4c4c4',
     paddingRight: 5,
   },
   signUpBtn: {
     color: '#399fff',
     fontWeight: 'bold'
   }
})