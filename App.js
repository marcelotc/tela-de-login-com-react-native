import React, { Component } from 'react';

import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

export default class MainProject extends Component {

  constructor(props) {

    super(props)

    this.state = {

      UserName: '',
      UserEmail: '',
      UserPassword: ''

    }

  }

  UserRegistrationFunction = () => {


    const { UserName } = this.state;
    const { UserEmail } = this.state;
    const { UserPassword } = this.state;



    fetch('http://192.168.95.18/userInfo/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        name: UserName,

        email: UserEmail,

        password: UserPassword

      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });


  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Login</Text>

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Nome de usuário"

          onChangeText={UserName => this.setState({ UserName })}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Email"

          onChangeText={UserEmail => this.setState({ UserEmail })}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />

        <TextInput

          // Adding hint in Text Input using Place holder.
          placeholder="Senha"

          onChangeText={UserPassword => this.setState({ UserPassword })}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}

          secureTextEntry={true}
        />

        <Button title="Registre-se" onPress={this.UserRegistrationFunction} color="#2196F3" />



      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: '#2196F3',

    // Set border Radius.
    borderRadius: 5,

    // Set border Radius.
    //borderRadius: 10 ,
  }

});

AppRegistry.registerComponent('MainProject', () => MainProject);