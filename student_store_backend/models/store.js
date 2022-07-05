const db = require("../db")
const {NotFoundError} = require("../utils/errors")

class Store{
    static async listProducts() {
        const query = `SELECT id,
        name,
        category,
        image,
        description, 
        price
        
        FROM products`

        const result = await db.query(query)

        if(!result){
            throw new NotFoundError
        }

        const products = result.rows

        return products
    }
}

module.exports = Store