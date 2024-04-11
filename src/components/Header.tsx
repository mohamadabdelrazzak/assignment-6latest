import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

const Header: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: 'white'
      }}>
      <View>
        <Image
          style={{height: 28, width: 110}}
          source={require('../assets/marhba.png') as ImageSourcePropType}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
          <Image source={require('../assets/Like.png') as ImageSourcePropType} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{position: 'relative'}}>
            <Image source={require('../assets/Messanger.png') as ImageSourcePropType} />
            <View style={{position: 'absolute', bottom: 12, left: 13}}>
              <Text
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 5,
                  borderRadius: 10,
                }}>
                5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;