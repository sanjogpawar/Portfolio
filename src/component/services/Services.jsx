import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Services That I offer</span>

        <div className="services__container container grid">
           <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Back-End</h3>
                </div>  

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>    
                </span>  

                <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i> 

                        <h3 className="services__model-title">Back-End Developement</h3>
                        <p className="services__model-description">
                         Creates and maintains server-side applications, focusing on API development, 
                         database management, and business logic implementation. They design scalable 
                         microservices, enforce security measures, and optimize performance for efficient functionality.
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Build back-end systems with Java, Spring Boot & RESTful APIs.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Background Services: Asynchronous tasks like scheduling or data processing.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Database Services: Manage database operations with JDBC, Hibernate, or JPA.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Security Services: Handle authentication/authorization.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Maintenance and Support
                                </p> 
                            </li>
                            
                        </ul>
                    </div>  
                </div> 
           </div> 

           <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Front-End</h3>
                </div>  

                <span className="services__button" onClick={() => toggleTab(2)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>    
                </span>  

                <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i> 

                        <h3 className="services__model-title">Front-End Developement</h3>
                        <p className="services__model-description">
                        Creates visually appealing and user-friendly interfaces that ensure a smooth, 
                        enjoyable experience. They focus on layout design (UI), ease of use (UX), 
                        and testing prototypes to meet user needs and improve product usability.
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 UI Development: Creates responsive interfaces with HTML, CSS, and JavaScript.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Frameworks: Utilizes React.js, Angular, or Vue.js for efficient development.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Cross-Browser Compatibility: Ensures functionality across various browsers.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Responsive Design: Adapts layouts for mobile and desktop devices.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 API Integration: Connects frontend to backend services via APIs.
                                </p> 
                            </li>
                            
                        </ul>
                    </div>  
                </div> 
           </div> 

           <div className="services__content">
                <div>
                    <i className="uil uil-bug services__icon"></i>
                    <h3 className="services__title">Quality Assurance</h3>
                </div>  

                <span className="services__button" onClick={() => toggleTab(3)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>    
                </span>  

                <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i> 

                        <h3 className="services__model-title">Software Testing</h3>
                        <p className="services__model-description">
                         Quality Assurance (QA) ensures software quality through testing and evaluation. 
                         QA professionals conduct tests, develop test plans, implement automation tools, 
                         collaborate with developers to fix defects, and suggest improvements to enhance software quality.
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Testing: Conducts various types of testing (functional, regression, performance) to ensure software quality.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Test Planning: Develops test plans and strategies based on project requirements.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Defect Tracking: Identifies, reports, and tracks bugs using tools like JIRA.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Documentation: Creates and maintains detailed documentation for test cases, results, and procedures.
                                </p> 
                            </li>
                            <li className="services__model-service">
                                <i className="uil uil-check-circle service__model-icon"></i>   
                                <p className="services__model-info">
                                 Automation: Implements automated testing using tools like Selenium, JUnit, or TestNG to improve efficiency.
                                </p> 
                            </li>
                            
                        </ul>
                    </div>  
                </div> 
           </div> 
        </div>
    </section>
  )
}

export default Services