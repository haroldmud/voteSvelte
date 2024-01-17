import type { User, Session, WeakPassword } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export type IVote = {
  id: number;
  choiceOne: string;
  choiceTwo: string;
  votesOne: number;
  votesTwo: number;
  readyToVote: boolean
}

export const Votes = writable<IVote[]>([])

export const error = writable<any>(null);

export const thatUser = writable<
  { user: User; session: Session; weakPassword?: WeakPassword | undefined; } | 
  { user: null; session: null; weakPassword?: null | undefined; } | 
  { user: User | null; session: Session | null; } | { user: null; session: null; } | any
  >(undefined)
