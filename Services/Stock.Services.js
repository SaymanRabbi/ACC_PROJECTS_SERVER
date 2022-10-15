const Stock =  require("../Models/Stock")
exports.getAllStockServices= async(stockObj,queries)=>{
 const stocks = await Stock.find(stockObj)
 .skip(queries.skip)
 .limit(queries.limit)
 .select(queries.fields)
 .sort(queries.sortBy);
 const toatalstocks = await Stock.countDocuments(stockObj);
return {stocks,toatalstocks};
}
// 
exports.createStockServices =async(data)=>{
    const stock = Stock.create(data);
    return stock;

}
// update multiple products
exports.updateStocksServices = async(stocks)=>{
    const data = []
    stocks.ids.forEach(p=>{
        data.push(Stock.updateOne({_id:p.id},p.data))
    })
    const result = await Promise.all(data);
    return result;
}
// update single product
exports.updateAstockServices = async(id,stock)=>{
    const result = await Stock.updateOne({_id:id},{$set:stock},{
        runValidators:true
    });
    return result; 
}
