const rateLimit= require("express-rate-limit")

const createAccountLimiter= rateLimit({
    windowMs: 60*60*1000, max: 5,
    message: {error: "limite de connexion par heure atteinte! Patientez 1h!"}
})

module.exports= createAccountLimiter 