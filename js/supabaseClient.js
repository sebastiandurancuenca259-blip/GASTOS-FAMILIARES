(function () {
  const SUPABASE_URL = "https://qitolcbkkdsuskemgwyg.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdG9sY2Jra2RzdXNrZW1nd3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0OTAzMzgsImV4cCI6MjEwMjA2NjMzOH0.vKVQFtjo75OxVXjlU9g8Tsfg5CnhUVVCzfxgNoRB70M";

  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();