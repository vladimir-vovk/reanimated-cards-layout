import { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { isPortraitOrientation } from 'src/utils'

import { CardType } from './types'
import { cards as CARDS } from './data'
import { Card } from './Card'
import { AddButton } from './AddButton'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export const List = () => {
  const [cards, setCards] = useState<CardType[]>(CARDS)
  const marginVertical = isPortraitOrientation() ? 44 : 12
  const marginHorizontal = isPortraitOrientation() ? 12 : 44

  const onCloseCard = (index: number) => {
    const _cards = [...cards]
    _cards.splice(index, 1)
    setCards(_cards)
  }

  const onAddCard = () => {
    const card = {
      ...CARDS[Math.floor(Math.random() * CARDS.length)],
      id: String(Math.random()).slice(2)
    }
    const _cards = [...cards, card]
    setCards(_cards)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={[styles.container, { marginVertical, marginHorizontal }]}>
        <View style={styles.row}>
          {cards.map((card: CardType, i: number) => (
            <Card
              {...card}
              {...{ marginHorizontal }}
              key={card.id}
              index={i}
              onClose={onCloseCard}
            />
          ))}
        </View>
      </ScrollView>

      <AddButton onPress={onAddCard} />
    </View>
  )
}
