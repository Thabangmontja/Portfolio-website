import React, { useState } from "react";
import "./services.css";

const Services = () => {
   const [toggleState, setToggleState] = useState(0);

   const toggleTab = (index) => {
      setToggleState(index);
   };
   return (
      <section className="services section" id="services">
         <h2 className="section__title">Services</h2>
         <span className="section__subtitle">What I Offer</span>

         <div className="services__container container grid">
            <div className="services__content">
               <div>
                  <i className="uil uil-arrow services__icon"></i>
                  <h3 className="services__title">Backend <br /> Development</h3>
               </div>

               <span className="services__button" onClick={() => toggleTab(1)}>View More
                  <i className="uil uil-arrow-right services__button-icon"></i></span>

               <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                  <div className="services__modal-content">
                     <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                     <h3 className="services__modal-title">Backend Developer</h3>
                     <p className="services__modal-description">I seek backend/systems roles in Java, Python and C# where,
                        i can use my coding skills to create effective solutions.</p>

                     <ul className="services_modal-services grid">
                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Create strong server-side logic for efficient data processing.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Managing databases, including design, querying, and integrity.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Building RESTful APIs for frontend-backend communication and integration.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Enforcing security with authentication, authorization, and encryption.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Improving backend performance, scalability, and responsiveness for user experience.</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="services__content">
               <div>
                  <i className="uil uil-web-grid services__icon"></i>
                  <h3 className="services__title">Frontend <br /> Development</h3>
               </div>

               <span onClick={() => toggleTab(2)} className="services__button">View More
                  <i className="uil uil-arrow-right services__button-icon"></i></span>

               <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                  <div className="services__modal-content">
                     <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                     <h3 className="services__modal-title">Frontend Developer</h3>
                     <p className="services__modal-description">I seek frontend/systems roles where I can leverage my coding skills to
                        create effective user interfaces and optimize system performance.</p>

                     <ul className="services_modal-services grid">
                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Designing UI with HTML, CSS, JS for better UX</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Creating responsive sites for consistent cross-platform experience</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Coding interactive features with JS and popular libraries.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Ensuring web compatibility, testing, resolving browser issues.</p>
                        </li>

                        <li className="services__modal-services">
                           <i className="uil uil-check-circle services__modal-icon"></i>
                           <p className="services__modal-info">Optimizing frontend for faster load, improved user experience.</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
};

export default Services
