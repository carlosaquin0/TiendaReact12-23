const products =[
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: celular,
        img: 'https://www.macstation.com.ar/img/productos/2492-2317-1.jpg',
        stock: 25,
        description: 'Celular marca Apple',
    },
    {id: '2', name: 'S20FE', price: 600, category:celular, img: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp', stock: 16, description: 'Celular marca Samsung'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id ===productId))
        },500)
    })
}