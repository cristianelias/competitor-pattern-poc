import { describe, it } from 'mocha'
import { expect } from 'chai'

import createFighter from '../src/entities/fighter'

describe('Tournament', () => {
  describe('First round', () => {
    it('should be won by Seiya 🦄', () => {
      // fighters
      const seiya = createFighter({ strength: 10, name: 'Seiya' })
      const ikki = createFighter({ strength: 9, name: 'Ikki' })
      const shiryu = createFighter({ strength: 8, name: ' Shiryu' })
      const hyoga = createFighter({ strength: 7, name: 'Hyoga' })

      // default fighter
      const shun = createFighter({
        strength: 2,
        name: 'Shun',
      })

      // creates a randomized list of fighters for our first round
      const round = [seiya, ikki, hyoga, shiryu].sort(() => Math.random() - 0.5)

      const champion = round.reduce(
        (fighterA, fighterB) => fighterA.challenge(fighterB),
        shun
      )

      expect(champion.getName()).to.equal(seiya.getName())
    })
  })

  describe('Second round', () => {
    it('should be won by Shun 👯‍', () => {
      // default fighter
      const shun = createFighter({
        strength: 2,
        name: 'Shun',
      })

      const round = []

      const champion = round.reduce(
        (fighterA, fighterB) => fighterA.challenge(fighterB),
        shun
      )

      expect(champion.getName()).to.equal(shun.getName())
    })
  })
})
