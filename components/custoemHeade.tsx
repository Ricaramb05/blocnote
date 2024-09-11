import { View, Text, StyleSheet } from 'react-native';

export const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text>Mon header personnalisé</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40, // Ajustez la hauteur selon vos besoins
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});