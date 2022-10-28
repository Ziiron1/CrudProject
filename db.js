const pratoentrada = require("./data/pratoentrada");
const bebidas = require("./data/bebidas");
const sobremesa = require("./data/sobremesa");
const categoria = require("./data/categoria");

module.exports = {
  pratoentrada,
  bebidas,
  sobremesa,
  categoria
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };