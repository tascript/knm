import { writable } from 'svelte/store'

const createCounter = () => {
  const { subscribe, update } = writable(0)

  return {
    subscribe,
    countUp: () => update(v => v + 1),
  }
}

export const total = createCounter()
