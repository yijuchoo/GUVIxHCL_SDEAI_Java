let product = {
    id: 101,
    title: 'iPhone 15',
    price: 80000,
    inStock: true,
    color: ["black", "blue"],
    specifications: {
        ram: "8gb",
        storage: "256gb"
    },
    reviews: [
        {
            user: "venkat",
            rating: 5
        },
        {
            user: "yirou",
            rating: 3.5,
            intro: 'A foodie person who loves reading manhwa (manga/comics)'
        }
    ]
};
console.log(product);
/* {
    id: 101,
    title: 'iPhone 15',
    price: 80000,
    inStock: true,
    color: [ 'black', 'blue' ],
    specifications: { ram: '8gb', storage: '256gb' },
    reviews: [ { user: 'venkat', rating: 5 } ]
    } */
   
console.log(product.title);
// iPhone 15
console.log(product.specifications.ram);
// 8gb
console.log(product.reviews[0].user);
// venkat
console.log(product.reviews[1].user);
// yirou
console.log(product.reviews[1].intro);
// A foodie person who loves reading manhwa (manga/comics)

