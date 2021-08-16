const dataMapper = require('../dataMapper');

const mainController = {
  homePage: (request, response) => {
    dataMapper.getAllPokemons((error, result) => {
        if(error) {
          response.status(500).send('Erreur ! Aucun enregidtrement n\'a été créé');
        }else{
          const allPokemons = result.rows;
          response.render('index', {allPokemons});
      }
      });
    },
    pageOnePokemon: (request,response)=>{
      const pokemonId = Number(request.params.id);
       dataMapper.getOnePokemon(pokemonId, (error, result)=> {
        if(error){
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const onePokemon = result.rows[0];
          console.log(onePokemon);
          response.render('detailPokemon',{onePokemon});
        }
       });
    },
    type: (request, response) => {
      dataMapper.getAllTypes((error,result)=>{
        if(error){
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const allTypes = result.rows;
          response.render('type', {allTypes});
        }
      });
    },
    oneType: (request, response)=> {
      const typeName = request.params.id;
      dataMapper.getOneType(typeName,(error, result)=>{
        if(error){
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const oneType = result.rows;
          response.render('index', {allPokemons:oneType});
        }
      })
    }
    
  };

module.exports = mainController;