async function registrar(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

async function iniciarSesion(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

supabase.auth.onAuthStateChange((event, session) => {
  const enLogin = window.location.pathname.endsWith("login.html");
  if (!session && !enLogin) {
    window.location.href = "login.html";
  }
});
