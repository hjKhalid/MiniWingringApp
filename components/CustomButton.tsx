// components/CustomButton.tsx
import React from 'react';
import { Button } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <Button mode="contained" onPress={onPress} style={style}>
      {title}
    </Button>
  );
};

export default CustomButton;
