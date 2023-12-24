import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {

    state: ()=> ({
        products: [
            {
                name: 'Gabrielle Essence Eau De Parfum',
                category: 'perfume',
                info: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
                price: 169.99,
                discount: 0.1171,
            }
        ]
    })

})