db.produtos.updateMany(
    { nome: { $eq: "Big Mac" } },
    { $set: { ultimaModificacao: {
        $type: "date",
    },
  } },
  );
  
  db.produtos.find(
    { ultimaModificacao: { $exists: true } },
    { nome: 1, _id: 0 },
  );