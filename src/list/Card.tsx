import { ReactElement } from 'react'
import {
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
  Linking,
  TouchableOpacity
} from 'react-native'
import Animated, { FadeOutDown, FadeInUp, Layout, Easing } from 'react-native-reanimated'

import { isPortraitOrientation } from 'src/utils'
import { CloseButton } from './CloseButton'
import { Title } from './Title'

const styles = StyleSheet.create({
  image: {
    borderRadius: 8
  }
})

type Props = {
  index: number
  marginHorizontal: number
  image: ImageSourcePropType
  author: string
  url: string
  onClose: (index: number) => void
}

export const Card = ({
  marginHorizontal,
  image,
  author,
  url,
  index,
  onClose
}: Props): ReactElement => {
  const { width: windowWidth } = useWindowDimensions()
  const cardsInRow = isPortraitOrientation() ? 2 : 4
  const gap = 8
  const width = (windowWidth - marginHorizontal * 2 - gap * cardsInRow) / cardsInRow
  const height = width

  const onCloseButton = () => {
    onClose(index)
  }

  const onTitle = () => {
    Linking.openURL(url)
  }

  return (
    <Animated.View
      layout={Layout.duration(200).delay(200)}
      entering={FadeInUp}
      exiting={FadeOutDown}
      style={{ width, height, margin: gap / 2 }}
    >
      <Image source={image} style={[styles.image, { width, height }]} resizeMode="cover" />

      <CloseButton onPress={onCloseButton} />

      <TouchableOpacity onPress={onTitle} activeOpacity={0.8}>
        <Title>{author}</Title>
      </TouchableOpacity>
    </Animated.View>
  )
}
