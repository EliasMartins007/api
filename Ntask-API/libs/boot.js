module.exports = (app) => {
  app.db.sync().done(() => {
    app.listen(app.get(3000), () => {
      //COLOQUEI VALOR FIXO DA PORTA 3000 E FUNCIONOU !! 02/10/2020
      console.log('Ntask API = porta', 3000); //console.log("Ntask API = porta ${app.get("port")}");
    });
  });
};
