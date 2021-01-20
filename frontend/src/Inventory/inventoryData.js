const INVENTORY_DATA = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            
            {
                id: 2,
                name: 'Grey Wool Hat',
                imageUrl: 'https://images.unsplash.com/photo-1585054993338-d6095c087a35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
                price: 50
            },
            {
                id: 3,
                name: `'Feminist' Pink Beanie`,
                imageUrl: 'https://images.unsplash.com/photo-1583776256401-8dbf3ecd1116?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
                price: 35
            },
            {
                id: 4,
                name: 'Wool Orange Beanie',
                imageUrl: 'https://images.unsplash.com/photo-1530842025973-11b5f5013b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2730&q=80',
                price: 30
            },
            {
                id: 5,
                name: 'Purple Knit Hat',
                imageUrl: 'https://images.unsplash.com/photo-1514000308165-10c6d5fb128e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2734&q=80',
                price: 45
            },
            {
                id: 6,
                name: 'Black Fedora',
                imageUrl: 'https://images.unsplash.com/photo-1567973246690-c53b46e75fa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
                price: 45
            }
        ]
    },
    {
        id: 7,
        title: 'Bottoms',
        routeName: 'bottoms',
        items: [
            {
                id: 8,
                name: 'Blue Floral',
                imageUrl: 'https://images.unsplash.com/photo-1551863082-4e6c9e2926bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
                price: 45
            },
            {
                id: 9,
                name: 'Grey Jeans',
                imageUrl: 'https://images.unsplash.com/photo-1570693256163-769761d90418?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
                price: 70
            },
            {
                id: 10,
                name: 'Straight Jeans',
                imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                price: 65
            },
            {
                id: 11,
                name: 'Patched Up Jeans',
                imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                price: 88
            }, 
            {
                id: 12,
                name: 'Red Paper Skirt',
                imageUrl: 'https://images.unsplash.com/photo-1547116180-3872338a567b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80',
                price: 55
            }
        ]
    },
    {
        id: 13,
        title: 'Tops',
        routeName: 'tops',
        items: [
            {
                id: 14,
                name: 'Khaki Linen Shirt',
                imageUrl: 'https://images.unsplash.com/photo-1606752444917-b56c23267b15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                price: 55
            },
            {
                id: 15,
                name: 'Polka-Dotted',
                imageUrl: 'https://images.unsplash.com/photo-1597612041728-c0ce05fa54c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
                price: 35
            },
            {
                id: 16,
                name: 'Blue Floral Blouse',
                imageUrl: 'https://images.unsplash.com/photo-1572112686886-5c0b5bc8dacd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
                price: 45
            },
            {
                id: 17,
                name: 'White Linen',
                imageUrl: 'https://images.unsplash.com/photo-1601569398837-7439eba6d6eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                price: 45
            },
            {
                id: 18,
                name: 'White Tee',
                imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                price: 24
            }
        ]
    }
]

export default INVENTORY_DATA