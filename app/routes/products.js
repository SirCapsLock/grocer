import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
    async model() {
        return [
            {
                id: "prd_aabbccxx",
                object: "product",
                name: "Tide Detergent",
                createdAt: "2020-02-02 18:36:00",
                sku: "101",
                pic: "http://placekitten.com/300/300"
            },
            {
                id: "prd_ccbbaaxx",
                object: "product",
                name: "Eggo Waffles",
                createdAt: "2020-02-02 18:36:00",
                sku: "101",
                pic: "http://placekitten.com/300/300"
            }
        ]
    }
}
