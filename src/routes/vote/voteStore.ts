import { writable } from "svelte/store";

export type IVote = {
  id: number;
  choiceOne: string;
  choiceTwo: string;
  votesOne: number;
  votesTwo: number;
  readyToVote: boolean
}

export const Votes = writable<IVote[]>([
  {
    id: Number(new Date()),
    choiceOne: 'JavaScript',
    choiceTwo: 'Python',
    votesOne: 4,
    votesTwo: 7,
    readyToVote: false
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    votesOne: 0,
    votesTwo: 0,
    readyToVote: false
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    votesOne: 0,
    votesTwo: 0,
    readyToVote: false
  },
  {
    id: Number(new Date()),
    choiceOne: 'Asake',
    choiceTwo: 'Burna',
    votesOne: 0,
    votesTwo: 0,
    readyToVote: false
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    votesOne: 0,
    votesTwo: 0,
    readyToVote: false
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    votesOne: 0,
    votesTwo: 0,
    readyToVote: false
  },
])

export const error = writable<any>(null);