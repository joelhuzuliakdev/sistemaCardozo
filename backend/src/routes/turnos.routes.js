const express = require("express");
const router = express.Router();

const turnosController = require("../controllers/turnos.controller");

router.post("/", turnosController.crearTurno);
router.get("/", turnosController.obtenerTurnos);
router.put("/:id", turnosController.actualizarTurno);
router.delete("/:id", turnosController.eliminarTurno);
module.exports = router;