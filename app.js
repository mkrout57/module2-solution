(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('toBuyController', toBuyController)
        .controller('alreadyBoughtController', alreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    toBuyController.$inject = ['ShoppingListCheckOffService'];
    function toBuyController(ShoppingListCheckOffService) {
        var list1 = this;
        list1.items = [
            {
                name: 'Chocolates',
                quantity: 5
            },
            {
                name: 'Cookies',
                quantity: 10
            },
            {
                name: 'Apple',
                quantity: 5
            },
            {
                name: 'Cerelac',
                quantity: 2
            },
            {
                name: 'Milk',
                quantity: 1
            }
        ];
        list1.addItem = function (itemIndex) {
            ShoppingListCheckOffService.addItem(itemIndex, list1.items);
        }


    };

    alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function alreadyBoughtController(ShoppingListCheckOffService) {
        var list2 = this;
        list2.items = ShoppingListCheckOffService.items;
    };
    function ShoppingListCheckOffService() {
        var buyBought = this;
        buyBought.items = [];
        buyBought.addItem = function (itemIndex, arrayOfitems) {
            var item = {
                name: '',
                quantity: ''
            }
            item.name = arrayOfitems[itemIndex].name;
            item.quantity = arrayOfitems[itemIndex].quantity;
            arrayOfitems.splice(itemIndex, 1);
            buyBought.items.push(item);
        };
    }
})();
