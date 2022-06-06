const { getSearch } = require('../model/user')

exports.getS = async(req, res) => {
    const {data: retorno, status} = await getSearch(req.query.q)
    res.status(status).json(retorno)
}
