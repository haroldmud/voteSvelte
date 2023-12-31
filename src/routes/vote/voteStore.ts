import { writable } from "svelte/store";

export type IVote = {
  id: number;
  choiceOne: string;
  choiceTwo: string;
  leftVotes: number;
  rightVotes: number;
}

export const Votes = writable<IVote[]>([
  {
    id: Number(new Date()),
    choiceOne: 'JavaScript',
    choiceTwo: 'Python',
    leftVotes: 4,
    rightVotes: 7
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    leftVotes: 0,
    rightVotes: 0
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    leftVotes: 0,
    rightVotes: 0
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    leftVotes: 0,
    rightVotes: 0
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    leftVotes: 0,
    rightVotes: 0
  },
  {
    id: Number(new Date()),
    choiceOne: 'Xbox',
    choiceTwo: 'PS',
    leftVotes: 0,
    rightVotes: 0
  },
])
