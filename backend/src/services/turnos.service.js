const supabase = require("../config/supabase");

const crearTurno = async (data) => {

    const { data: turno, error } = await supabase
        .from("turnos")
        .insert([data])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return turno;
};

const obtenerTurnos = async () => {
	const { data, error } = await supabase
		.from("turnos")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) throw error;

	return data;
};
const actualizarTurno = async (id, datos) => {

	const { data, error } = await supabase
		.from("turnos")
		.update(datos)
		.eq("id", id)
		.select()
		.single();

	if (error) throw error;

	return data;
};
const eliminarTurno = async (id) => {
    const { error } = await supabase
        .from("turnos")
        .delete()
        .eq("id", id);
    if (error) throw error;
};
module.exports = {
    crearTurno,
    obtenerTurnos,
    actualizarTurno,
	eliminarTurno
};