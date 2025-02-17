import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://soxsrshrgapptjchpgua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNveHNyc2hyZ2FwcHRqY2hwZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MTI1OTcsImV4cCI6MjA1NTM4ODU5N30.VK1AQN-ha_QrkHr4lzlvxJPP27heKDjLkJuDTgYMJyU';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };