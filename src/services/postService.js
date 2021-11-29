
function getProducts() {
  return new Promise((resolve,reject) => {
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

function getProduct(id) {
  return new Promise((resolve,reject) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

module.exports = {
  getProduct,
  getProducts,
}