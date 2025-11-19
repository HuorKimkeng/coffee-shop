import "./style.css";

const PROMOTIONS = [
   {
      name: "Espresso",
      desc: "A strong, concentrated coffee made by forcing hot water through finely-ground coffee beans — rich, bold, and full-bodied.",
      img: "src/assets/espresso.jpg",
   },
   {
      name: "Latte",
      desc: "Smooth espresso mixed with steamed milk and a light layer of foam.",
      img: "src/assets/Latte.jpg",
   },
   {
      name: "Cappuccino",
      desc: "Espresso topped with equal parts steamed milk and thick, creamy foam.",
      img: "src/assets/Cappuccino.jpg",
   },
   {
      name: "Black Coffee",
      desc: "Pure, strong coffee without milk or sugar — bold and energizing.",
      img: "src/assets/Black-Coffee.JPG",
   },
];

function Promotions() {
   return (
      <div className="promotions-container">
         <div className="promotions-small">
            <div className="promotions-title">
               <h2>Our Promotions</h2>
            </div>

            <div className="card-container">
               {PROMOTIONS.map((item, index) => (
                  <div className="box-container" key={index}>
                     <div className="card-image">
                        <img src={item.img} alt={item.name} />
                     </div>

                     <div className="card-desc-promotions">
                        <div className="card-desc-tittle-promotions">
                           <h2>{item.name}</h2>
                        </div>

                        <div className="card-desc-detail-promotions">
                           <p>{item.desc}</p>
                        </div>

                        {/* Optional button */}
                        {/* <div className="card-btn-promotions">
                           <button className="order-btn">Order Now</button>
                        </div> */}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Promotions;
