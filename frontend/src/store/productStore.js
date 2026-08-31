import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Laptop',
                desc: 'This is German made',
                price: 100000,
                image: '💻'
            },
            {
                id: 2,
                name: 'Charger',
                desc: 'High quality excellent charge',
                price: 120000
            },
            {
                id: 3,
                name: 'Headphones',
                desc: 'this produces 12sph',
                price: 80000
            },
            {
                id: 4,
                name: 'Headphones',
                desc: 'this produces 12sph',
                price: 60000
            }
        ],

        searchQuery: '',
    }),
    getters: {
        filteredProducts: (state) => {
            return state.products.filter(product =>
                product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        }
    }
});