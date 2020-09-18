const data = [
    {
        desc: 'Göcek gulet',
        id: 1,
        country_id: 166,
        currency: 'TL',
        base_price: 5000.00,
        boat_prices: [
            {
                date_start: '2020-09-01',
                date_end: '2020-09-14',
                currency: 'TL',
                price: 6000.00
            },
            {
                date_start: '2020-09-14',
                date_end: '2020-09-21',
                currency: 'TL',
                price: 7000.00
            }
        ]
    },
    {
        desc: 'Göcek yelkenli',
        id: 2,
        country_id: 165,
        currency: 'DOLLAR',
        base_price: 2000.00,
        boat_prices: [
            {
                date_start: '2020-09-01',
                date_end: '2020-09-14',
                currency: 'DOLLAR',
                price: 3000.00
            },
            {
                date_start: '2020-09-14',
                date_end: '2020-09-21',
                currency: 'DOLLAR',
                price: 2500.00
            }
        ]
    }
]

module.exports = data;