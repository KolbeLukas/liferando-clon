let dishes = [
    /* BEEF BURGERS */
    {
        "category": "beef-burger",
        "name": "Hamburger",
        "description": "mit Brioche-Brötchen, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise",
        "price": [7.49]
    },
    {
        "category": "beef-burger",
        "name": "Cheeseburger",
        "description": "mit Brioche-Brötchen, Cheddarkäse, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise",
        "price": [8.49]
    },
    {
        "category": "beef-burger",
        "name": "Chili Cheese Burger",
        "description": "mit Brioche-Brötchen, Zwiebeln, Jalapenos, Salat und Käse-Chili-Sauce",
        "price": [8.99]
    },
    {
        "category": "beef-burger",
        "name": "Chili Cheese Fries Burger",
        "description": "mit Brioche-Brötchen, Zwiebeln, Jalapenos, Salat, Käse-Chili-Sauce und Pommes frites",
        "price": [9.99]
    },
    {
        "category": "beef-burger",
        "name": "Triple Cheeseburger",
        "description": "mit Brioche-Brötchen, Cheddarkäse, Bergkäse, Emmentaler, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise",
        "price": [9.99]
    },
    {
        "category": "beef-burger",
        "name": "BBQ Burger",
        "description": "mit Brioche-Brötchen, Bacon, Barbecuesauce, Zwiebeln, Tomaten, saure Gurken und Salat",
        "price": [8.99]
    },
    {
        "category": "beef-burger",
        "name": "Bacon Egg Burger",
        "description": "mit Brioche-Brötchen, Bacon, Rührei, Tomaten, Burgersauce, Ketchup und Salat",
        "price": [9.99]
    },
    {
        "category": "beef-burger",
        "name": "Italian Burger",
        "description": "mit Brioche-Brötchen, Rucola, Mozzarella, Tomaten, Balsamico-Creme und Burgersauce",
        "price": [8.99]
    },
    /* CHICKEN BURGERS */
    {
        "category": "chicken-burger",
        "name": "Crunchy Chicken Burger",
        "description": "mit Brioche-Brötchen, paniertem Hühnchen, Tomaten, Salat und Mayonnaise",
        "price": [8.99]
    },
    {
        "category": "chicken-burger",
        "name": "Grilled Chicken Burger",
        "description": "mit Brioche-Brötchen, gegrilltem Hühnchen, Bergkäse, Tomaten, Rucola, rote Paprika, Currysauce und Ketchup",
        "price": [9.99]
    },
    {
        "category": "chicken-burger",
        "name": "Hot Crunchy Chicken Burger",
        "description": "mit Brioche-Brötchen, paniertem Hühnchen, Tomaten, Salat, scharfe Käsesauce, Jalapenos und Ketchup",
        "price": [8.99]
    },
    /* VEGAN BURGERS */
    {
        "category": "vegan-burger",
        "name": "Falafel Burger",
        "description": "mit Brioche-Brötchen, Falafelpatty, Salat, Aioli, Tomaten und Zwiebeln",
        "price": [7.99]
    },
    {
        "category": "vegan-burger",
        "name": "Grilled Veggie Burger",
        "description": "mit Brioche-Brötchen, eingelegtem Grillgemüse, Salat, Ketchup und Mayonnaise",
        "price": [8.99]
    },
    {
        "category": "vegan-burger",
        "name": "Vegan Burger",
        "description": "mit Brioche-Brötchen, veganem Burger-Bros-Patty, Salat, Tomaten, sauren Gurken, Ketchup und Mayonnaise",
        "price": [7.99]
    },
    {
        "category": "vegan-burger",
        "name": "Vegan Cheeseburger",
        "description": "mit Brioche-Brötchen, veganem Burger-Bros-Patty, veganem Käse, Salat, Tomaten, sauren Gurken, Ketchup und Mayonnaise",
        "price": [8.99]
    },
    /* EXTRAS */
    {
        "category": "extra",
        "name": "Pommes Frites",
        "description": "mit Dip nach Wahl",
        "price": [2.99]
    },
    {
        "category": "extra",
        "name": "Süßkartoffel Pommes Frites",
        "description": "mit Dip nach Wahl",
        "price": [3.99]
    },
    {
        "category": "extra",
        "name": "Onion Rings",
        "description": "mit Dip nach Wahl",
        "price": [4.99]
    },
    {
        "category": "extra",
        "name": "Rosmarien Kartoffeln",
        "description": "mit Dip nach Wahl",
        "price": [3.99]
    },
    /* DESSERTS */
    {
        "category": "dessert",
        "name": "New York Cheesecake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig) und Nüße",
        "price": [3.99]
    },
    {
        "category": "dessert",
        "name": "Chocolate Brownie",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "dessert",
        "name": "Schokomuffin",
        "description": "enthält Nüße, Vegan",
        "price": [4.99]
    },
    {
        "category": "dessert",
        "name": "Blaubeermuffin",
        "description": "Vegan",
        "price": [4.99]
    },
    /* DRINKS */
    {
        "category": "drink",
        "name": "Vanille Milkshake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "drink",
        "name": "Schoko Milkshake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "drink",
        "name": "Erdbeere Milkshake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "drink",
        "name": "Cookies Milkshake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "drink",
        "name": "Salted Caramel Milkshake",
        "description": "enthält Milch/-erzeugnisse (laktosehaltig)",
        "price": [3.99]
    },
    {
        "category": "drink",
        "name": "Cola",
        "description": "",
        "price": [2.99]
    },
    {
        "category": "drink",
        "name": "Orangen Limo",
        "description": "",
        "price": [2.99]
    },
    {
        "category": "drink",
        "name": "Zitronen Limo",
        "description": "",
        "price": [2.99]
    },
    {
        "category": "drink",
        "name": "Apfelschorle",
        "description": "",
        "price": [2.99]
    },
    {
        "category": "drink",
        "name": "Rababerschorle",
        "description": "",
        "price": [2.99]
    },
    {
        "category": "drink",
        "name": "Wasser naturell",
        "description": "",
        "price": [2.99]
    },
];

let shoppingCartName = [];
let shoppingCartPrice = [];
let shoppingCartAmount = [];


function renderDishes() {
    renderPopularDishes();
    for (i = 0; i < dishes.length; i++) {
        if (dishes[i]['category'].includes('beef-burger')) {
            document.getElementById('beef-burger-section').innerHTML += renderOneDishBox(i);
        }
        if (dishes[i]['category'].includes('chicken-burger')) {
            document.getElementById('chicken-burger-section').innerHTML += renderOneDishBox(i);
        }
        if (dishes[i]['category'].includes('vegan-burger')) {
            document.getElementById('vegan-burger-section').innerHTML += renderOneDishBox(i);
        }
        if (dishes[i]['category'].includes('extra')) {
            document.getElementById('extras-section').innerHTML += renderOneDishBox(i);
        }
        if (dishes[i]['category'].includes('dessert')) {
            document.getElementById('desserts-section').innerHTML += renderOneDishBox(i);
        }
        if (dishes[i]['category'].includes('drink')) {
            document.getElementById('drinks-section').innerHTML += renderOneDishBox(i);
        }
    }
}


function renderPopularDishes() {
    document.getElementById('popular-dish-section').innerHTML += renderOneDishBox(1);
    document.getElementById('popular-dish-section').innerHTML += renderOneDishBox(8);
    document.getElementById('popular-dish-section').innerHTML += renderOneDishBox(14);
}


function addOneDishToShoppingCart(i) {
    let name = dishes[i]['name'];
    let price = dishes[i]['price'][0];
    let amount = 1;
    let check = shoppingCartName.indexOf(name);

    if (shoppingCartName.includes(name)) {
        shoppingCartAmount[check]++;
        shoppingCartPrice[check] = shoppingCartAmount[check] * price;
    } else {
        shoppingCartName.push(name);
        shoppingCartPrice.push(price);
        shoppingCartAmount.push(amount);
    }
    removeEmptyShoppingcartPlaceholder();
    showMinimumOrderValueAlert();
    showCheckout();
    renderSelectedDishesInShoppingCart();
}


function renderSelectedDishesInShoppingCart() {
    document.getElementById('shopping-cart').innerHTML = ``;
    for (i = 0; i < shoppingCartName.length; i++) {
        document.getElementById('shopping-cart').innerHTML += renderClickedDishInShoppingCart(i);
    }
    calculatePriceToPay();
    calculatMissingAmount();
    activatePayButton();
    calculatePriceToPayAtResponsivButton();
    calculateAmountInShoppingCart();
    showResponsiveCheckoutButton();
}


function increaseSelectedDishByOne(i) {
    let priceForOne = shoppingCartPrice[i] / shoppingCartAmount[i];

    shoppingCartAmount[i]++;
    shoppingCartPrice[i] = shoppingCartPrice[i] + priceForOne;
    renderSelectedDishesInShoppingCart();
}


function reduceSelectedDishByOne(i) {
    if (shoppingCartAmount[i] > 1) {
        let priceForOne = shoppingCartPrice[i] / shoppingCartAmount[i];

        shoppingCartAmount[i]--;
        shoppingCartPrice[i] = shoppingCartPrice[i] - (priceForOne);
    } else {
        let content = document.getElementById('shopping-cart-dish' + i);
        shoppingCartAmount.splice(i, 1);
        shoppingCartName.splice(i, 1);
        shoppingCartPrice.splice(i, 1);
        content.remove();
        showEmptyShoppingcartPlaceholder();
        removeMinimumOrderValueAlert();
        removeCheckout();
    }
    renderSelectedDishesInShoppingCart();
}


function calculatMissingAmount() {
    let minimumPrice = 10;
    let subtotalPrice = shoppingCartPrice.reduce((a, b) => a + b, 0);

    if ((minimumPrice - subtotalPrice) > 0) {
        document.getElementById('minimum-order-value').innerHTML = (minimumPrice - subtotalPrice).toFixed(2);
        document.getElementById('minimum-order-value-section').classList.remove('d-none');
    } else {
        document.getElementById('minimum-order-value-section').classList.add('d-none');
    }
    if (shoppingCartName.length == 0) {
        document.getElementById('minimum-order-value-section').classList.add('d-none');
    }
}


function calculatePriceToPay() {
    let subtotalPrice = shoppingCartPrice.reduce((a, b) => a + b, 0);
    let deliveryCost = 1.50;

    document.getElementById('subtotalPrice').innerHTML = subtotalPrice.toFixed(2);
    document.getElementById('total').innerHTML = (subtotalPrice + deliveryCost).toFixed(2);
    document.getElementById('to-pay').innerHTML = (subtotalPrice + deliveryCost).toFixed(2);
}


function activatePayButton() {
    let subtotalPrice = shoppingCartPrice.reduce((a, b) => a + b, 0);

    if (subtotalPrice > 10) {
        document.getElementById('checkout-button').classList.add('checkout-button-enough');
        document.getElementById('checkout-button').disabled = false;
    } else {
        document.getElementById('checkout-button').classList.remove('checkout-button-enough');
        document.getElementById('checkout-button').disabled = true;
    }
}


function calculatePriceToPayAtResponsivButton() {
    let subtotalPrice = shoppingCartPrice.reduce((a, b) => a + b, 0);
    let deliveryCost = 1.50;

    document.getElementById('to-pay-responsive').innerHTML = (subtotalPrice + deliveryCost).toFixed(2);
}


function calculateAmountInShoppingCart() {
    let totalAmount = shoppingCartAmount.reduce((a, b) => a + b, 0);

    document.getElementById('amount-shopping-cart').innerHTML = totalAmount;
}


function openResponsivShoppingCart() {
    document.getElementById('shopping-cart-box').classList.add('d-all');
    document.getElementById('checkout-button-responsiv').classList.add('d-none');
    document.getElementById('body').classList.add('stop-overflow');
}


function closeResponsivShoppingCart() {
    document.getElementById('shopping-cart-box').classList.remove('d-all');
    document.getElementById('body').classList.remove('stop-overflow');
    if (shoppingCartName.length > 0) {
        document.getElementById('checkout-button-responsiv').classList.remove('d-none');
    }
}


function showResponsiveCheckoutButton() {
    if (shoppingCartName.length > 0) {
        document.getElementById('checkout-button-responsiv').classList.remove('d-none');
    } else {
        document.getElementById('checkout-button-responsiv').classList.add('d-none');
    }
}


function removeEmptyShoppingcartPlaceholder() {
    document.getElementById('shopping-cart-placeholder').classList.add('d-none');
}


function showEmptyShoppingcartPlaceholder() {
    if (shoppingCartName.length < 1) {
        document.getElementById('shopping-cart-placeholder').classList.remove('d-none');
    }
}


function showMinimumOrderValueAlert() {
    document.getElementById('minimum-order-value-section').classList.remove('d-none');
}


function removeMinimumOrderValueAlert() {
    if (shoppingCartName.length < 1) {
        document.getElementById('minimum-order-value-section').classList.add('d-none');
    }
}

function showCheckout() {
    document.getElementById('checkout').classList.remove('d-none');
}


function removeCheckout() {
    if (shoppingCartName.length < 1) {
        document.getElementById('checkout').classList.add('d-none');
    }
}


function setActiveFilterAtFilterScrollbar() {
    let all = document.querySelector('.active-filter');
    let beefBurger = document.getElementById('beef-burger-heading').offsetTop;
    let chickenBurger = document.getElementById('chicken-burger-heading').offsetTop;
    let veganBurger = document.getElementById('vegan-burger-heading').offsetTop;
    let extras = document.getElementById('extras-heading').offsetTop;
    let dessert = document.getElementById('dessert-heading').offsetTop;
    let drinks = document.getElementById('drinks-heading').offsetTop;

    if (window.scrollY < beefBurger - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(0, 0);
        all.classList.remove('active-filter');
        document.getElementById('popular').classList.add('active-filter');
    }
    if (window.scrollY > beefBurger - 151 && window.scrollY < chickenBurger - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(90, 0);
        all.classList.remove('active-filter');
        document.getElementById('beef-burgers').classList.add('active-filter');
    }
    if (window.scrollY > chickenBurger - 151 && window.scrollY < veganBurger - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(230, 0);
        all.classList.remove('active-filter');
        document.getElementById('chicken-burgers').classList.add('active-filter');
    }
    if (window.scrollY > veganBurger - 151 && window.scrollY < extras - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(370, 0);
        all.classList.remove('active-filter');
        document.getElementById('vegan-burgers').classList.add('active-filter');
    }
    if (window.scrollY > extras - 151 && window.scrollY < dessert - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(510, 0);
        all.classList.remove('active-filter');
        document.getElementById('extras').classList.add('active-filter');
    }
    if (window.scrollY > dessert - 151 && window.scrollY < drinks - 150) {
        document.getElementById('dishes-scrollbar').scrollTo(650, 0);
        all.classList.remove('active-filter');
        document.getElementById('dessert').classList.add('active-filter');
    }
    if (window.scrollY > drinks - 151) {
        document.getElementById('dishes-scrollbar').scrollTo(790, 0);
        all.classList.remove('active-filter');
        document.getElementById('drinks').classList.add('active-filter');
    }
}


function scrollToTop() {
    window.scrollTo(0, 0);
}

function scrollToPopular() {
    let position = document.getElementById('popular-heading').offsetTop;
    window.scrollTo(0, position - 150);
}

function scrollToBeefBurgers() {
    let position = document.getElementById('beef-burger-heading').offsetTop;
    window.scrollTo(0, position - 150);
}

function scrollToChickenBurgers() {
    let position = document.getElementById('chicken-burger-heading').offsetTop;
    window.scrollTo(0, position - 150);
}

function scrollToVeganBurgers() {
    let position = document.getElementById('vegan-burger-heading').offsetTop;
    window.scrollTo(0, position - 150);
}

function scrollToExtras() {
    let position = document.getElementById('extras-heading').offsetTop;
    window.scrollTo(0, position - 150)
}

function scrollToDesserts() {
    let position = document.getElementById('dessert-heading').offsetTop;
    window.scrollTo(0, position - 150)
}

function scrollToDrinks() {
    let position = document.getElementById('drinks-heading').offsetTop;
    window.scrollTo(0, position - 150)
}


/* HTML-RENDERING */

function renderOneDishBox(i) {
    return /* html */ `
    <div onclick="addOneDishToShoppingCart(${i})" class="dish-box">
        <div class="dish-text">
            <div class="dish-box-headline">
                <h3>${dishes[i]['name']}</h3>
                <span onclick="comingSoon(event)" class="dish-infos">Produktinfo</span>
            </div>
            <span class="dish-description"><i>${dishes[i]['description']}</i></span>
            <span class="dish-price">${dishes[i]['price']} €</span>
        </div>
        <div>
            <img class="dish-add-button" src="img/plus.png">
        </div>
    </div>
    `;
}


function renderClickedDishInShoppingCart(i) {
    return /*html*/ `
    <div id="shopping-cart-dish${i}" class="shopping-cart-dish-box">
        <div class="shopping-cart-dish-box-inner">
            <div class="shopping-cart-amount">${shoppingCartAmount[i]}</div>
                <div class="shopping-cart-dish">${shoppingCartName[i]}</div>
                <div class="shopping-cart-price">${shoppingCartPrice[i].toFixed(2)} €</div>
                    <div class="shopping-cart-change">
                    <div onclick="comingSoon(event)" class="shopping-cart-note">Anmerkung hinzufügen</div>
                    <div class="shopping-cart-change-amount">
                    <div onclick="reduceSelectedDishByOne(${i})" class="shopping-cart-change-amount-button margin-right">
                        <img src="img/minus.png">
                    </div>
                    <div onclick="increaseSelectedDishByOne(${i})" class="shopping-cart-change-amount-button">
                        <img src="img/plus.png">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}


/* WORK IN PROGRESS */

function comingSoon(event) {
    event.stopPropagation();
    alert('Wir arbeiten an weitern Funktionen für euch.');
}