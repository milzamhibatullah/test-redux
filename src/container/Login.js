import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { EmailChanged, PasswordChanged } from '../redux/action/index';
class Login extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <TextInput style={{ width: '100%', height: 40, backgroundColor: '#F0F0F0' }}
            placeholder={'input email'}
            onChangeText={(val) => this.props.EmailChanged(val)}
            value={this.props.email} />
          <TextInput style={{ width: '100%', height: 40, marginVertical: 10, backgroundColor: '#F0F0F0' }}
            placeholder={'input password'}
            secureTextEntry={true}
            onChangeText={(val) => this.props.PasswordChanged(val)}
            value={this.props.password} />
        </View>
        <TouchableOpacity style={{ width: '100%', backgroundColor: '#F5F5F5', height: 40, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        >
          <Text>simpan</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}
export default connect(mapStateToProps, { EmailChanged, PasswordChanged })(Login);

