const client = require('./database');


const dataMapper = {
    getAllPokemons: (callback) => {
        const allPokemons = {
            text:'SELECT * FROM "pokemon";',
        }
    client.query(allPokemons, callback);
    },
    getOnePokemon: (id, callback) => {
        const onePokemon = {
            text:'SELECT * FROM "pokemon" JOIN "pokemon_type" ON pokemon.numero = pokemon_type.pokemon_numero JOIN "type" ON pokemon_type.type_id = type.id WHERE pokemon.numero=$1;', 
            values: [id]
        }
        client.query(onePokemon, callback);
    },
    getAllTypes:(callback) => {
        const allTypes = {
            text:'SELECT * FROM "type";'
        }
    client.query(allTypes, callback);
    },
    getOneType:(typeName,callback) => {
        const oneType = {
            text:'SELECT * FROM "pokemon" JOIN "pokemon_type" ON pokemon.numero = pokemon_type.pokemon_numero JOIN "type" ON pokemon_type.type_id = type.id WHERE type.name=$1;', 
            values: [typeName]
        }
    client.query(oneType, callback);
    }
};



module.exports = dataMapper;