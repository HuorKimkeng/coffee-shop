import "./style.css";

function ContactComponent() {
   return (
      <div className="contact-component">
         <div className="contact-small">
            <div className="contact-form-box">
               <div className="contact-form-space">
                  <div className="contact-form-title">
                     <h2>Contact Us</h2>
                  </div>

                  <div className="contact-form-desc">
                     <p>
                        We’d love to hear from you! Whether you have a question, feedback, 
                        or just want to say hello, please reach out using the form below or 
                        our contact information.
                     </p>
                  </div>
               </div>

               <div className="contact-form-input">
                  <input type="text" className="name-form" placeholder="Your Name"/>
                  <input type="email" className="email-form" placeholder="Your Email" />
                  <input type="text" className="subject-form" placeholder="Subject"/>
                  <textarea className="message-form" placeholder="Your Message"></textarea>
                  <button className="submit-button">Send Message</button>
               </div>
            </div>

            <div className="our-info-box">
               <div className="our-info-title">
                  <h2>Our Info</h2>
               </div>

               <div className="our-info-line"></div>

               <div className="our-info-phone">
                  <div className="phone-box-left">
                     <h2>Phone</h2>
                  </div>
                  <div className="phone-box-right">
                     <h2>(855) 96 757 3913</h2>
                  </div>
               </div>

               <div className="our-info-line"></div>

               <div className="our-info-email">
                  <div className="email-box-left">
                     <h2>Email</h2>
                  </div>
                  <div className="email-box-right">
                     <h2>kimkenghuor123spt@gmail.com</h2>
                  </div>
               </div>

               <div className="our-info-line"></div>

               <div className="our-info-address">
                  <div className="address-box-left">
                     <h2>Address</h2>
                  </div>
                  <div className="address-box-right">
                     <h2>11 Russian Federation Blvd, Khan Sensok, Cambodia</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactComponent;