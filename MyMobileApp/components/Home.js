import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button } from 'react-native-paper';

export default function Home() {
  return(
    <View>
      <Text variant="headlineLarge">Headline Large</Text>
      <Divider />
      <Text variant="bodyMedium" style={styles.body}>
          If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above.
      </Text>
      <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    padding: 8,
    textAlign: 'justify'
  }
});