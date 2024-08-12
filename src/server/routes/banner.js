import express from 'express';
import db from '../db.js'; 

const router = express.Router();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM banner_settings LIMIT 1';
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result[0]);
    });
});

router.post('/', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    const query = `UPDATE banner_settings SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1`;
    db.query(query, [description, timer, link, isVisible], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.sendStatus(200);
    });
});

export default router;
