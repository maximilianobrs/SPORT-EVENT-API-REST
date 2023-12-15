import { Router } from "express";
import { getChampionship, getChampionshipsDESC, getChampionshipsASC, postChampionship, putChampionship, deleteChampionship } from "../controllers/championship.controllers.js";

const router = Router();

router.get('/championship/DESC', getChampionshipsDESC);
router.get('/championship/ASC', getChampionshipsASC);
router.get('/championship/:id', getChampionship);
router.post('/championship', postChampionship);
router.put('/championship/:id', putChampionship);
router.delete('/championship/:id', deleteChampionship);

export default router;