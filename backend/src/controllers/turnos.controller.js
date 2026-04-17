const turnosService = require("../services/turnos.service");

const crearTurno = async (req, res) => {
    try {

        const turno = await turnosService.crearTurno(req.body);

        res.status(201).json({
            success: true,
            data: turno
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }
};

const obtenerTurnos = async (req, res) => {
	try {
		const turnos = await turnosService.obtenerTurnos();
		res.json(turnos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}};

    const actualizarTurno = async (req, res) => {
	try {

		const { id } = req.params;

		const turno = await turnosService.actualizarTurno(id, req.body);

		res.json({
			success: true,
			data: turno
		});

	} catch (error) {

		res.status(500).json({
			success: false,
			error: error.message
		});

	}
};

const eliminarTurno = async (req, res) => {
    try {
        const { id } = req.params;
        await turnosService.eliminarTurno(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    crearTurno,
    obtenerTurnos,
    actualizarTurno,
	eliminarTurno
};