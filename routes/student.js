const express = require("express")
const studentController = require("../controllers/student")

const router = express.Router();

router.post("/student",  studentController.studentEnrollment)
router.get("/student",  studentController.studentFind)
router.get("/student",studentController.studentUpdate);
router.get("/student",studentController.studentDelete)

module.exports = router;//this is default export