module.exports = {
  port: process.env.PORT || 3000,

  dbTaxiUser: process.env.DB_TAXI_USER || "",
  dbTaxiPassword: process.env.DB_TAXI_PASSWORD || "",
  dbTaxiServer: process.env.DB_TAXI_SERVER || "",
  dbTaxiDatabase: process.env.DB_TAXI_DATABASE || "",
};
