import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import Button from '../commons/Button';
import { strings } from '../Lang/String';

const { width, height } = Dimensions.get("window");

class Form extends Component {
  renderSection(text) {
    return(
      <View style={styles.section}>
        <View style={{ flex:1, justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={{ textAlign: 'center', flex: 9, width: (width)}}>{text}</Text>
        <Image
        source={require('../img/ok.png')}
        />

        </View>
      </View>
    );
  }
  renderPickerButton(text) {
    return(
      <View>
        <View style={styles.pickerButtonStyle}>
          <Image
          source={require('../img/add.png')}
          />
        </View>
        <Text style={styles.pickerTextStyle}>{text}</Text>
      </View>
    );
  }
  render() {
    return(
          <ImageBackground source={require('../img/bg.png')}
          style={{ width, height, alignItems: 'center',
          justifyContent: 'center'}}
          >

          <Image
          source={require('../img/logo.png')}
          />

          {this.renderSection(strings.location)}
          {this.renderSection(strings.herLocation)}

          <View style= { styles.PickerMainViewStyle }>
            {this.renderPickerButton(strings.yourPhoto)}
            {this.renderPickerButton(strings.herPhoto)}
          </View>

          <Button
          text={strings.buttontext}
          />

          </ImageBackground>
    );
  }
}
const styles = {
  PickerMainViewStyle: {
    flexDirection: 'row',
    marginTop: 20,
    width: width*0.59,
    justifyContent: 'space-between'
  },
  pickerButtonStyle: {
    width: width*0.24,
    height: width*0.24,
    borderRadius: (width*0.24) / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerTextStyle:{
    marginTop: 10,
    color: 'white',
    width: width*0.24,
    textAlign: 'center'
  },
  section: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: width*0.59,
    height: height*0.05,
    //flexDirection: 'row',  //yan yana getirir
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
}


export default Form;
