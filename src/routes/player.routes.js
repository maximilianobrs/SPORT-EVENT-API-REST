import { Router } from "express";
import { getPlayer, getPlayersDESC, getPlayersASC, postPlayer, putPlayer, deletePlayer } from "../controllers/playercontrollers.js";

const router = Router();

router.get('/player/DESC', getPlayersDESC);
router.get('/player/ASC', getPlayersASC);
router.get('/player/:id', getPlayer);
router.post('/player', postPlayer);
router.put('/player/:id', putPlayer);
router.delete('/player/:id', deletePlayer);

export default router;