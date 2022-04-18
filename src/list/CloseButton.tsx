import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Images } from 'src/constants'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 4
  },
  image: {
    width: 24,
    height: 24
  }
})

type Props = {
  onPress: () => void
}

export const CloseButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image source={Images.close} style={styles.image} resizeMode="cover" />
  </TouchableOpacity>
)
