import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import ImageViewer from '@/components/ImageViewer'
import Button from '@/components/Button'

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary' onPress={pickImageAsync} />
        <Button label='Use this photo' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
})