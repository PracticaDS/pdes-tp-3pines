export const TICK = 'TICK'

const tick = () => {
  return {
    type: TICK,
    payload: 1
  }
}

export default tick
