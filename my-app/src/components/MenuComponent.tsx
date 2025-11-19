import React from "react";
import "./style.css";

// ✅ Menu data array
const MENU_DATA = [
   {
      category: "Hot Coffees",
      items: [
         {
            name: "Classic Drip Coffee",
            desc: "Our signature blend, freshly brewed.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Hot Coffees/classic-drip-coffee.jpg",
         },
         {
            name: "French Press",
            desc: "Rich, full-bodied coffee with a smooth finish.",
            price: "$4.00",
            img: "src/assets/type-of-coffee/Hot Coffees/french-press.jpg",
         },
         {
            name: "Black Coffee",
            desc: "Pure, strong coffee brewed without milk or sugar — bold and energizing.",
            price: "$4.50",
            img: "src/assets/type-of-coffee/Hot Coffees/black-coffee.jpg",
         },
         {
            name: "Macchiato",
            desc: "Rich espresso topped with a small dollop of steamed milk for a bold, smooth taste.",
            price: "$4.75",
            img: "src/assets/type-of-coffee/Hot Coffees/macchiato.jpg",
         },
         {
            name: "Pour Over",
            desc: "Hand-poured for a clean, crisp flavor.",
            price: "$4.25",
            img: "src/assets/type-of-coffee/Hot Coffees/pour-over.jpg",
         },
      ],
   },
   {
      category: "Cold Brews",
      items: [
         {
            name: "Cold Brew",
            desc: "Slow-steeped for a smooth, low-acid flavor.",
            price: "$4.75",
            img: "src/assets/type-of-coffee/Cold Brews/cold-brew.jpg",
         },
         {
            name: "Nitro Cold Brew",
            desc: "Cold brew infused with nitrogen for a creamy texture.",
            price: "$5.00",
            img: "src/assets/type-of-coffee/Cold Brews/nitro-cold-brew.jpg",
         },
         {
            name: "Ice Coffee",
            desc: "Chilled coffee served over ice.",
            price: "$3.75",
            img: "src/assets/type-of-coffee/Cold Brews/ice-coffee.jpg",
         },
      ],
   },
   {
      category: "Espresso Drinks",
      items: [
         {
            name: "Espresso",
            desc: "A concentrated shot of espresso.",
            price: "$3.00",
            img: "src/assets/type-of-coffee/Espresso Drinks/espresso.jpg",
         },
         {
            name: "Cappuccino",
            desc: "Espresso with steamed milk and a layer of foam.",
            price: "$4.25",
            img: "src/assets/type-of-coffee/Espresso Drinks/cappuccino.jpg",
         },
         {
            name: "Latte",
            desc: "Espresso with steamed milk.",
            price: "$4.75",
            img: "src/assets/type-of-coffee/Espresso Drinks/latte.jpg",
         },
         {
            name: "Mocha",
            desc: "Espresso with chocolate syrup and steamed milk.",
            price: "$5.25",
            img: "src/assets/type-of-coffee/Espresso Drinks/mocha.jpg",
         },
         {
            name: "Americano",
            desc: "Espresso diluted with hot water.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Espresso Drinks/americano.jpg",
         },
         {
            name: "Affogato",
            desc: "A scoop of vanilla ice cream drowned in a shot of hot espresso — sweet and bold.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Espresso Drinks/affogato.jpg",
         },
         {
            name: "Ristretto",
            desc: "A short, concentrated espresso shot with a rich flavor and smooth finish.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Espresso Drinks/ristretto.jpg",
         },
      ],
   },
   {
      category: "Pastries",
      items: [
         {
            name: "Croissant",
            desc: "Flaky, buttery croissant.",
            price: "$3.25",
            img: "src/assets/type-of-coffee/Pastries/croissants.jpg",
         },
         {
            name: "Muffin",
            desc: "Freshly baked muffin.",
            price: "$3.00",
            img: "src/assets/type-of-coffee/Pastries/muffin.jpg",
         },
         {
            name: "Scone",
            desc: "Classic scone with various flavors.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Pastries/scone.jpg",
         },
         {
            name: "Chocolate Brownie",
            desc: "A rich, fudgy dessert square made with deep chocolate flavor and a soft, chewy texture.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Pastries/chocolate-brownie.jpg",
         },
         {
            name: "Cinnamon Roll",
            desc: "Soft, sweet pastry rolled with cinnamon sugar and topped with creamy icing.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Pastries/cinnamon-roll.jpg",
         },
         {
            name: "Donut",
            desc: "Sweet, fried dough treat, often glazed or filled, perfect for a quick indulgence.",
            price: "$3.50",
            img: "src/assets/type-of-coffee/Pastries/donut.jpg",
         },
      ],
   },
];

function MenuComponent() {
   return (
      <div className="menu-container">
         <div className="menu-title">
            <h2>Our Menu</h2>
         </div>

         {MENU_DATA.map((category) => (
            <div key={category.category} className="menu-name-item">
               <div className="type-menu-title">
                  <div className="category-menu">
                     <h3>{category.category}</h3>
                  </div>
                  <div className="menu-line"></div>
               </div>

               <div className="type-menu-items">
                  {category.items.map((item) => (
                     <div key={item.name} className="type-menu-card">
                        <div className="type-menu-card-images">
                           <img src={item.img} alt={item.name} />
                        </div>

                        <div className="type-menu-card-desc">
                           <div className="name-of-coffee">
                              <h2>{item.name}</h2>
                           </div>
                           <div className="desc-of-coffee">
                              <p>{item.desc}</p>
                           </div>

                           <div className="button-of-coffee">
                              <div className="price-of-coffee">
                                 <h3>{item.price}</h3>
                              </div>
                              <div className="button-for-order">
                                 <button className="order-btn">Order Now</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
}

export default MenuComponent;