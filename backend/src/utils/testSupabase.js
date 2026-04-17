const supabase = require("../config/supabase");

async function testConnection() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Conexión exitosa:", data);
  }
}

testConnection();