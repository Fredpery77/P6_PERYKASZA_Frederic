const passwordValidator = require('password-validator');

// création d'un schéma pour le mot de passe, pour renforcer la sécurité
const passwordSchema = new passwordValidator();

// ajout de propriétés que le mot de passe doit respecter
passwordSchema
.is().min(8)                                            // minimum 8 caratères
.has().uppercase()                                      // doit contenir une lettre majuscule
.has().lowercase()                                      // doit contenir une lettre minuscule
.has().digits()                                         // doit contenir un chiffre
.is().not().oneOf(['Passw0rd', 'Password123']);         // Blacklist these values

module.exports = passwordSchema;
