const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const tankRoutes = require("./tankRoutes");
router.use("/api/tanks",tankRoutes)

const fishRoutes = require("./fishRoutes");
router.use("/api/fishes",fishRoutes)


module.exports = router;