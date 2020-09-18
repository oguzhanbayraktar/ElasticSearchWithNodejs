const boats = {
    properties: {
        id: {
            type: "long",
        },
        desc: {
            type: "text",
        },
        country_id: {
            type: "long"
        },
        currency: {
            type: "keyword"
        },
        base_price: {
            type: "double"
        },
        boat_prices: {
            type: "nested",
            properties: {
                date_start: { type: "date" },
                date_end: { type: "date" },
                currency: { type: "keyword" },
                price: { type: "double" }
            },
        },
    }
}

module.exports = boats;