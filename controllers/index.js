const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const tankRoutes = require("./tankRoutes");
router.use("/api/tanks",tankRoutes)


module.exports = router;