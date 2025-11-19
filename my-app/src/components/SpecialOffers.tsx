import "./style.css";

function SpecialOffers () {
   return (
      <div className="specialoffers-container">
         <div className="small-special">
            <div className="special-title">
               <h2>Special Offers</h2>
            </div>

            <div className="special-menu">
               <div className="special-image-box">
                  <img src="src/assets/special-offers-02.png" alt="" />
               </div>

               <div className="special-desc-box-container">
                  <div className="special-desc-text">
                     <h3>
                        Indulge in Costa’s special offer featuring the perfect balance of 
                        flavor and comfort — a beautifully crafted Cappuccino paired with 
                        a freshly made Crispy Bacon, Lettuce & Tomato Sandwich. Each sip 
                        of the rich, velvety cappuccino complements the savory crunch of 
                        premium bacon layered with crisp lettuce and juicy tomato between 
                        slices of soft, golden-brown bread. Whether you’re starting your 
                        morning or taking a relaxing afternoon break, this delightful 
                        combination is made to satisfy your cravings and brighten your day. 
                        Experience the warmth, freshness, and signature taste that make Costa 
                        the perfect place to unwind and enjoy life’s simple pleasures.
                     </h3>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   );
}

export default SpecialOffers;