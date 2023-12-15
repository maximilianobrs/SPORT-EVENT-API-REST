import { Router } from "express";
import { getTeam, getTeamsDESC, getTeamsASC, postTeam, putTeam, deleteTeam } from "../controllers/team.controllers.js";

const router = Router();

router.get('/team/DESC', getTeamsDESC);
router.get('/team/ASC', getTeamsASC);
router.get('/team/:id', getTeam);
router.post('/team', postTeam);
router.put('/team/:id', putTeam);
router.delete('/team/:id', deleteTeam);

export default router;