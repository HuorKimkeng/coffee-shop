import "./style.css";

function AboutComponent () {
   return (
      <div className="about-container">
         <div className="about-slideshow">
            <div className="about-banner">
               <img src="src/assets/about-our-story.png" alt="" />
               <div className="about-text">
                  <h2>Our Story</h2>
               </div>
            </div>
         </div>

         <div className="about-text-container">
            <div className="about-intro">
               <p>
                  Brew & Bean was founded in 2018 by Sarah and David, two coffee enthusiasts 
                  with a shared dream of creating a community hub centered around exceptional 
                  coffee. Their journey began with a small, cozy cafe in the heart of downtown, 
                  where they meticulously crafted each cup with passion and precision. From the 
                  outset, their mission was to source the finest beans from sustainable farms, 
                  roast them in-house to perfection, and serve them with a commitment to quality 
                  and customer satisfaction.
               </p>
            </div>

            <div className="about-section">
               <div className="about-section-title">
                  <h2>Our Mission</h2>
               </div>
               
               <div className="about-section-desc">
                  <p>
                     At Brew & Bean, our mission is to elevate the coffee experience by providing our customers with the highest quality coffee, exceptional service, and a welcoming atmosphere. We believe in the power of coffee to bring people together, foster connections, and create memorable moments. Our commitment extends beyond the cup, as we strive to support sustainable farming practices and ethical sourcing to ensure a positive impact on the communities we work with.
                  </p>
               </div>
               
            </div>

            <div className="about-section-our-values">
               <div className="about-section-our-values-title">
                  <h2>Our Values</h2>
               </div>
               
               <div className="about-section-our-values-desc">
                  <p><strong>Quality:</strong> We are dedicated to sourcing the finest beans and employing meticulous roasting and brewing techniques to deliver exceptional coffee.</p>

                  <p><strong>Sustainability:</strong> We prioritize ethical sourcing and sustainable practices to minimize our environmental impact and support farming communities.</p>

                  <p><strong>Community:</strong> We aim to create a welcoming space where people can connect, relax, and enjoy the shared experience of coffee.</p>

                  <p><strong>Innovation:</strong> We continuously explore new flavors, brewing methods, and technologies to enhance the coffee experience for our customers.</p>

                  <p><strong>Passion:</strong> Our team is driven by a genuine love for coffee, and we are committed to sharing that passion with every customer.</p>
               </div>
            </div>
         </div>

         <div className="about-team">
            <div className="about-team-title">
               <h2>Meet the Team</h2>
            </div>
            <div className="team-profile-container">
               <div className="team-profile">
                  <div className="team-profile-card">
                     <img src="src/assets/co-founder-girl.jpg" alt="" />
                  </div>

                  <div className="team-profile-detail">
                     <h2>Sarah</h2>
                     <p>Co-founder & Head Barista</p>
                  </div>
               </div>
               <div className="team-profile">
                  <div className="team-profile-card">
                     <img src="src/assets/co-founder-boy.jpg" alt="" />
                  </div>

                  <div className="team-profile-detail">
                     <h2>David</h2>
                     <p>Co-founder & Roaster</p>
                  </div>
               </div>
            </div>
            <div className="team-description">
               <p>
                  Our team is the heart of Brew & Bean. Each member brings a unique set of skills and a shared passion for coffee. 
                  From our experienced baristas to our skilled roasters, we are committed to delivering the best possible experience 
                  to our customers. We believe in continuous learning and development, ensuring that our team stays at the forefront 
                  of coffee trends and techniques.
               </p>
            </div>
         </div>
      </div>
   );
}

export default AboutComponent;