const store = require('./store');

function addProduct() {
    return new Promise((resolve, reject) => {
        if (object.entries(product).length ---0) {
            console.log("[ProductsController]: Product doesn't have content, the product is empty");
            reject('there is no product')
        }
    store.add(product);
    resolve(product);    
    });
};

function getProducts() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
};

function getOnlyProduct(tittleProduct) {
    return new Promise((resolve, reject) => {
        if (!tittleProduct) {
            console.log("[ProductsController]: Product doesn`t have tittle for search, the tittle product is empty");
            reject('There is no tittle product');
        };

        resolve(sotre.only(tittleProduct));
    });
}   


function updateProduct(id, changeProduct) {
    return new Promise(async(resolve, reject) => {
        if (!id || !changeProduct) {
            console.log('[UpdateProduct] Error Data');
            reject('Data invalid in metod patch');
        };
        const result = await store.update(id, changeProduct);
        resolve(result);
    });
}

function deleteProduct(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log('[deleteProduct] Error Data ');
            reject('Data invalid in method delete');
        };

        const result = await store.delete(id);
        resolve(result);
    });
}

module.exports = {
    addProduct,
    getProducts,
    getOnlyProduct,
    updateProduct,
    deleteProduct,
}


