import { writable } from "svelte/store";

export type Itodo = {
  completed: boolean;
  task: string
  edit: boolean;
}

export const tasks = writable<Itodo[]>([{completed: true, task: 'whatever you want', edit: true}])
