import { Router } from "express";
import { getTrailers, createTrailer,updateTrailer } from "../controllers/trailer-controller.js";
const router = Router();

router.get("/trailers", getTrailers);

router.post("/trailers", createTrailer);

router.put("/trailers/:id", updateTrailer); 

router.delete("/trailers/:id", );

router.get("/trailers/:id", ); 

export default router;
