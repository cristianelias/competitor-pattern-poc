/* eslint-disable-next-line */
export const canGetName = instance => ({
  getName: () => instance.state.name,
})

export const canEqual = instance => ({
  isEqualTo: otherInstance => instance.getName() === otherInstance.getName(),
})
