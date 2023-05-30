var Plantas = require('../models/plantas')

// Plantas list
module.exports.list = () =>{
    return Plantas.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlantas = id =>{
    return Plantas.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.especies = () =>{
    return Plantas.distinct("Espécie").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.freguesias = () =>{
    return Plantas.distinct("Freguesia").sort()
                .then(dados=>{
                    return dados
                })
                .catch(erro=>{
                   return erro
                })
}

module.exports.plantasEspecie = (especie) =>{
    return Plantas.find({"Espécie":especie})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.plantasImplantacao = (implant) =>{
    return Plantas.find({"Implantação":implant})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.addPlanta = (planta) => {
    return Plantas.collection.insertOne(planta)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.deletePlanta = id =>{
    return Plantas.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
