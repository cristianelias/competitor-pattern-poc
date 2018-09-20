export const canGetStregth = instance => ({
  getStregth: () => instance.state.strength,
})

export const canChallenge = instance => ({
  challenge: rival => (instance.state.strength > rival.getStregth() ? instance : rival),
})
