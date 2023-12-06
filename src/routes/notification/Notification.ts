import { writable } from "svelte/store";

export const notification = writable<string[]>([])
export const count = writable<number>(0)

export function toast(message: string) {
  notification.update((state) => [message, ...state])
  setTimeout(() => {
    notification.update((state)=> {
      state.shift()
      return state
    })
  }, 2000);
}

export function inc() {
  count.update(state => state + 1)
}

export function dec() {
  count.update(state => state - 1)
}
