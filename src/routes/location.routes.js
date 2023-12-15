import { Router } from "express";
import { getLocation, getLocationsDESC, getLocationsASC, postLocation, putLocation, deleteLocation } from "../controllers/location.controllers.js";

const router = Router();

router.get('/location/DESC', getLocationsDESC);
router.get('/location/ASC', getLocationsASC);
router.get('/location/:id', getLocation);
router.post('/location', postLocation);
router.put('/location/:id', putLocation);
router.delete('/location/:id', deleteLocation);

export default router;