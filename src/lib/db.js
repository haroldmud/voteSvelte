import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.NEXT_PUBLIC_VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_VITE_SUPABASE_ANON_KEY;

export const supabase = createClient('https://teurhfjnskwrxugnxpuu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldXJoZmpuc2t3cnh1Z254cHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMTM5ODIsImV4cCI6MjAyMDg4OTk4Mn0.RfQcIUmIw0RfuH3d5WbUkxY9WHRp2PSfLWTHNpgmjBY')
