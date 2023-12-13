import { writable } from "svelte/store";

export type IVote = {
  id: number;
  choiceOne: string;
  choiceTwo: string;
  votesOne: number;
  votesTwo: number;
}

export const Votes = writable<IVote[]>([
  {
    id: Number(new Date()),
    choiceOne: 'JavaScript',
    choiceTwo: 'Python',
    votesOne: 0,
    votesTwo: 0
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    votesOne: 0,
    votesTwo: 0
  },
])
