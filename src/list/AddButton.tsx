import { ReactElement } from 'react'
import { TouchableOpacity, StyleSheet, Image, Platform } from 'react-native'

import { Images } from 'src/constants'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgb(85,	124, 244)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 24,
    height: 24
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowRadius: 4,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 0 }
  },
  elevation: {
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 1)'
  }
})

type Props = {
  onPress: () => void
}

export const AddButton = ({ onPress }: Props): ReactElement => (
  <TouchableOpacity
    style={[styles.container, Platform.OS === 'ios' ? styles.shadow : styles.elevation]}
    onPress={onPress}
  >
    <Image source={Images.plus} style={styles.image} />
  </TouchableOpacity>
)
