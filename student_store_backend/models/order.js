const db = require("../db")

class Order{
    static async listOrdersForUser(user){
        //return order from specific user
        const result = await db.query(`SELECT 
        o.id AS "orderId",
        o.customer_id AS "customerId",
        d.quantity as quantity,
        p.name as name,
        p.price as price

        FROM orders AS o
            LEFT JOIN order_details AS d ON o.id = d.order_id
            LEFT JOIN products AS p ON p.id = d.product_id
        WHERE o.customer_id = (SELECT id FROM users WHERE email = $1) 
        `, [user.email])

        return result.rows
    }

    static async createOrder({user, order}){
        //store user order in database
        // const requiredFields = ["name", "category", "calories", "imageUrl", "quantity"]
        // requiredFields.forEach(field => {
        //     if (!info.hasOwnProperty(field)){
        //         throw new BadRequestError(`Missing ${field} in request body.`)
        //     }
        // })
        const results = await db.query(`INSERT INTO orders (
            customer_id
        )
        VALUES ((SELECT id FROM users WHERE email = $1))
        RETURNING id
        `, [user.email])

        const orderId = results.rows[0]

        Object.keys(order).forEach((productId) => {db.query(`INSERT INTO order_details (
            order_id,
            product_id,
            quantity
        )
        VALUES ($1, $2, $3)
        `, [orderId.id, productId, order[productId]])})

        return orderId.id
    }

}

module.exports = Order