const router = require("express").Router();
const injector = require("../services/injector_request");
const userRoutes = require("../controllers/usersControllers");

router.post("/api/v1/create-user", injector(userRoutes.createUser));

router.put("/api/v1/edit-user/:id", injector(userRoutes.editUser));
router.post("/api/v1/delete-user/:id", injector(userRoutes.deleteUser));

router.get("/api/v1/get-all-user", injector(userRoutes.getAllUsers));
router.get("/api/v1/get-user-by-id/:id", injector(userRoutes.getUserById));




module.exports = router;
