import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return [
      {
      	object: "shopping-list",
      	id: "lst_0000002",
      	name: "February 2 Shopping List",
      	createdAt: "2020-02-02 18:36:00",
      	store: {
      		object: "store",
      		id: "sto_aaabbbcccx01"
      	},
      	numItems: 0,
      	total: 1000,
      	spent: 100
      },
      {
      	object: "shopping-list",
      	id: "lst_0000003",
      	name: "February 3 Shopping List",
      	createdAt: "2020-02-02 18:36:00",
      	store: {
      		object: "store",
      		id: "sto_aaabbbcccx01"
      	},
      	numItems: 0,
      	total: 1000,
      	spent: 100
      },
      {
      	object: "shopping-list",
      	id: "lst_0000004",
      	name: "February 4 Shopping List",
      	createdAt: "2020-02-02 18:36:00",
      	store: {
      		object: "store",
      		id: "sto_aaabbbcccx01"
      	},
      	numItems: 0,
      	total: 1000,
      	spent: 100
      }
    ]
  }
}
