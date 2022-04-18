import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    bottom: 0,
    left: 0,
    right: 0
  },
  text: {
    letterSpacing: 0.5,
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.9)'
  }
})

type Props = {
  children: string
}

export const Title = ({ children }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
)
