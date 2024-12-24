import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput, Button } from 'react-native-paper';

export default function ContactUs() {
  const [name,setName] = useState();
  
  return(
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge">Contact Us</Text>
        <Divider/>
      </View>
      <View style={styles.body}>
        <Text variant='bodyMedium'>
          If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above. If a dedicated prop for a specific color is not available or the style prop does not allow color modification, you can customize it using the theme prop. It allows to override any color, within the component, based on the table above.
        </Text>
        <View style={styles.input}>
          <TextInput label="Name" mode='outlined' value={name} onChangeText={setName}/>
        </View>
        <View style={styles.input}>
          <TextInput label="Email" mode='outlined' keyboardType='email-address'/>
        </View>
        <View style={styles.input}>
          <TextInput label="Phone number" mode='outlined' keyboardType='phone-pad'/>
        </View>
        <View style={styles.input}>
          <TextInput label="Message" mode='outlined' multiline numberOfLines={5}/>
        </View>
        <View style={styles.input}>
          <Button mode='contained'>Contact</Button>
        </View>
        <Text>{name}</Text>
      </View>
      <View style={styles.footer}>
        <Text>MyApp © 2024</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    alignItems: 'center'
  },
  body:{
    flex: 5,
    width: "100%"
  },
  footer:{
    flex: 2,
    width: "100%",
    alignItems: 'center'
  },
  input:{
    padding: 8,
    marginBottom: 7
  }
});