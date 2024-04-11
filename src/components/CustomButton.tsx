/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import { AppColors } from '../utils/AppColors';

interface CustomButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonTitle,
  onPress,
  disabled,
}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    borderRadius: 5,
   
  },
  textStyle: {
    color: 'white',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomButton;
