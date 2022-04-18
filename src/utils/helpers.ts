import { useWindowDimensions } from 'react-native'

export const isPortraitOrientation = (): boolean => {
  const { width, height } = useWindowDimensions()
  return height > width
}
