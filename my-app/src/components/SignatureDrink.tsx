// import "./style.css";

// function SignatureDrink() {
//    return (
//       <div className="signature-container">
//          <div className="signature-small">
//             <div className="signature-title">
//                <h2>Signature Drinks</h2>
//             </div>

//             <div className="card-container">
//                <div className="box-container">
//                   <div className="card-image">
//                      <img src="src/assets/espresso.jpg" alt="" />
//                   </div>

//                   <div className="card-desc-signature">
//                      <div className="card-desc-tittle-signature">
//                         <h2>Espresso</h2>
//                      </div>
//                      <div className="card-desc-detail-signature">
//                         <p>A strong, concentrated coffee made by forcing hot water through finely-ground coffee beans — rich, bold, and full-bodied.</p>
//                      </div>
//                   </div>
//                </div>

//                <div className="box-container">
//                   <div className="card-image">
//                      <img src="src/assets/Latte.jpg" alt="" />
//                   </div>

//                   <div className="card-desc-signature">
//                      <div className="card-desc-tittle-signature">
//                         <h2>Latte</h2>
//                      </div>
//                      <div className="card-desc-detail-signature">
//                         <p>
//                            Smooth espresso mixed with steamed milk and a light layer of
//                            foam.
//                         </p>
//                      </div>
//                   </div>
//                </div>

//                <div className="box-container">
//                   <div className="card-image">
//                      <img src="src/assets/Cappuccino.jpg" alt="" />
//                   </div>

//                   <div className="card-desc-signature">
//                      <div className="card-desc-tittle-signature">
//                         <h2>Cappuccino</h2>
//                      </div>
//                      <div className="card-desc-detail-signature">
//                         <p>
//                            Espresso topped with equal parts steamed milk and thick,
//                            creamy foam.
//                         </p>
//                   </div>
//                   </div>
//                </div>

//                <div className="box-container">
//                   <div className="card-image">
//                      <img src="src/assets/Black-Coffee.JPG" alt="" />
//                   </div>

//                   <div className="card-desc-signature">
//                      <div className="card-desc-tittle-signature">
//                         <h2>Black Coffee</h2>
//                      </div>
//                      <div className="card-desc-detail-signature">
//                         <p>
//                            Pure, strong coffee without milk or sugar — bold and
//                            energizing.
//                         </p>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default SignatureDrink;


import "./style.css";

const SIGNATURE_DRINKS = [
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

function SignatureDrink() {
   return (
      <div className="signature-container">
         <div className="signature-small">
            <div className="signature-title">
               <h2>Signature Drinks</h2>
            </div>

            <div className="card-container">
               {SIGNATURE_DRINKS.map((drink, index) => (
                  <div className="box-container" key={index}>
                     <div className="card-image">
                        <img src={drink.img} alt={drink.name} />
                     </div>

                     <div className="card-desc-signature">
                        <div className="card-desc-tittle-signature">
                           <h2>{drink.name}</h2>
                        </div>
                        <div className="card-desc-detail-signature">
                           <p>{drink.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default SignatureDrink;
