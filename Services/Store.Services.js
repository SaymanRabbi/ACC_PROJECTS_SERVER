const Store = require('../Models/Store');
exports.getStoresServices = async()=>{
    const store = await Store.find({});
    return store;
}
exports.createStoreServices = async(store)=>{
    const newStore = await Store.create(store);
    return newStore;
}
exports.getsingelStoreServices = async(id)=>{
    const store = await Store.findById(id);
    return store;
}