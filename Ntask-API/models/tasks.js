module.exports = (app) => {
  return {
    findAll: (params, callback) => {
      return callback([
        { title: 'Fazer Compras02' },
        { tilte: 'Consertar o pc' },
      ]);
    },
  };
};
