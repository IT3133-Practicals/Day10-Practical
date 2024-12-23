import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Divider />
        <Text variant="bodyMedium" style={styles.body}>
          If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above.
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    padding: 8,
    textAlign: 'justify'
  }
});
