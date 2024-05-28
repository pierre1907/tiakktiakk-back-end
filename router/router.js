

const express= require("express");
const router= express.Router();
const auth= require("../middleware/auth");
const multer= require("../middleware/multer-config");
const limiter= require("../middleware/limit");

const userCtrl= require("../controller/userCtrl");
const vehiculeCtrl= require("../controller/vehiculeCtrl");
const trajetCtrl= require("../controller/trajetCtrl");
const roleCtrl= require("../controller/roleCtrl");
const paiementCtrl= require("../controller/paiementCtrl");
const factureCtrl= require("../controller/factureCtrl");
const commandeCtrl= require("../controller/commandeCtrl");

// user
router.get("/user/all", auth, userCtrl.getAll)
router.get("/user/one/:id", auth, userCtrl.getOne)
router.get("/user/status/pass/:password/:id", userCtrl.passwordCheck)
router.post("/user/login", limiter, userCtrl.login)
router.post("/user/signin", multer, auth, userCtrl.signin)
router.put("/user/reset/:id", auth, userCtrl.resetPassword)
router.put("/user/update", auth, userCtrl.misAjour)
router.delete("/user/:id", auth, userCtrl.remove)


//vehicule
router.get("/vehicule/all", auth, vehiculeCtrl.getAll)
router.post("/vehicule/new", auth, vehiculeCtrl.create)
router.get("/vehicule/one/:id", auth, vehiculeCtrl.getOne)
router.put("/vehicule/update", auth, vehiculeCtrl.misAjour)
router.delete("/vehicule/:id", auth, vehiculeCtrl.remove)


//trajet
router.get("/trajet/all", auth, trajetCtrl.getAll)
router.post("/trajet/new", auth, trajetCtrl.create)
router.get("/trajet/one/:id", auth, trajetCtrl.getOne)
router.get("/trajet/commande/:id", auth, trajetCtrl.getByCommande)
router.get("/trajet/facture/:id", auth, trajetCtrl.getByFacture)
router.get("/trajet/user/:id", auth, trajetCtrl.getByUser)
router.put("/trajet/update", auth, trajetCtrl.misAjour)
router.delete("/trajet/:id", auth, trajetCtrl.remove)


//role
router.get("/role/all", auth, roleCtrl.getAll)
router.post("/role/new", auth, roleCtrl.create)
router.get("/role/one/:id", auth, roleCtrl.getOne)
router.put("/role/update", auth, roleCtrl.misAjour)
router.delete("/role/:id", auth, roleCtrl.remove)



//paiement
router.get("/paiement/all", auth, paiementCtrl.getAll)
router.get("/paiement/facture/:id", auth, paiementCtrl.getByFacture)
router.post("/paiement/new", auth, paiementCtrl.create)
router.get("/paiement/one/:id", auth, paiementCtrl.getOne)
router.put("/paiement/update", auth, paiementCtrl.misAjour)
router.delete("/paiement/:id", auth, paiementCtrl.remove)



//facture
router.get("/facture/all", auth, factureCtrl.getAll)
router.get("/facture/commande/:id", auth, factureCtrl.getByCommande)
router.get("/facture/paiement/:id", auth, factureCtrl.getByPaiement)
router.get("/facture/trajet/:id", auth, factureCtrl.getByTrajet)
router.post("/facture/new", auth, factureCtrl.create)
router.get("/facture/one/:id", auth, factureCtrl.getOne)
router.put("/facture/update", auth, factureCtrl.misAjour)
router.delete("/facture/:id", auth, factureCtrl.remove)



// commande
router.get("/commande/all", auth, commandeCtrl.getAll)
router.get("/commande/facture/:id", auth, commandeCtrl.getByFacture)
router.get("/commande/trajet/:id", auth, commandeCtrl.getByTrajet)
router.get("/commande/user/:id", auth, commandeCtrl.getByUser)
router.post("/commande/new", auth, commandeCtrl.create)
router.get("/commande/one/:id", auth, commandeCtrl.getOne)
router.put("/commande/update", auth, commandeCtrl.misAjour)
router.delete("/commande/:id", auth, commandeCtrl.remove)




module.exports= router


