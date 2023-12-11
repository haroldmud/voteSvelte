import { writable } from "svelte/store";

export type Itodo = {
  completed: boolean;
  task: string
}

export const tasks = writable<Itodo[]>([{completed: true, task: 'whatever you want'}])
export const edit = writable<boolean>(false)
