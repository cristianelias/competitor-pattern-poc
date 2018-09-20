// traits
import { canGetStregth, canChallenge } from '../traits/fighting'
import { canGetName, canEqual } from '../traits/identification'

// fighter entity
const createFighter = ({ strength, name }) => {
  const instance = {
    state: {
      strength,
      name,
    },
  }

  return Object.assign(
    instance,
    canChallenge(instance),
    canGetStregth(instance),
    canGetName(instance),
    canEqual(instance)
  )
}

export default createFighter
