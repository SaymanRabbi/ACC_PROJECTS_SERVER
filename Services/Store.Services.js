const Store = require('../Models/Store');
exports.getStoreServices = async()=>{
    const store = await Store.find({});
    return store;
}
exports.createStoreServices = async(store)=>{
    const newStore = await Store.create(store);
    return newStore;
}