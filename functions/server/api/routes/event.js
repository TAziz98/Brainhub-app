import express from "express";
import { errors } from "celebrate";
import {
  postEvent,
} from "../controller/event";

import { postEvent as postEventValidation } from "../../middleware/validation/event";

const router = express.Router();

router
  .route("/:id")
  .post(postEventValidation, postEvent);

router.use(errors());
export default router;
