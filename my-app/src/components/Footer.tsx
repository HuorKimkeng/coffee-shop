function Footer () {
   return (
      <div className="footer-container">
         <div className="copy-right">
            <p>© 2025 Coffee Shop. All rights reserved.</p>
         </div>

         <div className="contact-social">
            <div className="social-icons">
               <a
                  className="social-link facebook"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
               >
                  <i className="fab fa-facebook-f"></i>
               </a>

               <a
                  className="social-link twitter"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
               >
                  <i className="fab fa-x-twitter"></i>
               </a>

               <a
                  className="social-link instagram"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
               >
                  <i className="fab fa-instagram"></i>
               </a>

               <a
                  className="social-link telegram"
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
               >
                  <i className="fab fa-telegram-plane"></i>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Footer;