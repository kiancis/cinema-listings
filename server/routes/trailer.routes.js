import { Router } from "express";
import { getTrailers, createTrailer,updateTrailer,deleteTrailer,getTrailer } from "../controllers/trailer-controller.js";
const router = Router();

router.get("/trailers", getTrailers);

router.post("/trailers", createTrailer);

router.put("/trailers/:id", updateTrailer); 

router.delete("/trailers/:id", deleteTrailer);

router.get("/trailers/:id", getTrailer ); 

export default router;
