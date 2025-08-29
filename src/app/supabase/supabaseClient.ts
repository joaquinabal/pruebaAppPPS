    import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fakltylhrzynongpwecz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZha2x0eWxocnp5bm9uZ3B3ZWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNDUxNjEsImV4cCI6MjA3MTYyMTE2MX0.rG9OZuzeWlqiejbI07hLlF51xncs8wgWufPzLLnpDFU   ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
