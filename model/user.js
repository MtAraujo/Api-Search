const { ObjectId } = require('mongodb')
const { connectMongodb } = require('../database/connect')


exports.getSearch = async (q) => {
    const collection = await connectMongodb('pesquisa', 'searchs')
    const data = await collection.find({ $or: [{ $text: { $search: q }}, { body: { $regex: q }}]}, { $score: { $meta: "textScore" }}).sort({ score: { $meta: "textScore" }}).toArray()
    return { data, status: 200}
    
}

