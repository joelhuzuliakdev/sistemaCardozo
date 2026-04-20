const express = require("express");
const { supabase } = require("../config/supabase");

const router = express.Router();

router.get("/", async (req, res) => {
    const { data, error } = await supabase
        .from("bloqueos")
        .select("*")
        .order("fecha", { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

router.post("/", async (req, res) => {
    const { fecha, horario, motivo } = req.body;
    if (!fecha) return res.status(400).json({ error: "Fecha requerida" });

    const { data, error } = await supabase
        .from("bloqueos")
        .insert([{ fecha, horario: horario || null, motivo: motivo || null }])
        .select()
        .single();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from("bloqueos")
        .delete()
        .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ ok: true });
});

module.exports = router;
