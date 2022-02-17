import React from 'react'
import './style.css'


export default function Navbar(props) {
  return (
    <>
    <header id="home" className="hero-area">    
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="index.html" className="navbar-brand"><img src="" alt=""/></a>       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">About</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">Services</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#showcase">Showcase</a>
              </li>       
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">Pricing</a>
              </li>     
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">Team</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">Contact</a>
              </li> 
              
            </ul>
          </div>
        </div>
      </nav>  
      <div className="container">      
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title"><b>ONECONNECT</b></h2>
              <p><i>ONE PLATFORM FOR ALL PROBLEMS!</i></p>
              <div className="header-button">
                <a href="" rel="nofollow" target="_blank" className="btn btn-border-filled">Get started</a>
                <a href="" rel="nofollow" target="_blank" className="btn btn-border page-scroll">Know more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src="pic/2.svg" alt=""/>
            </div>            
          </div>
        </div> 
      </div>             
    </header>
    
    <section id="services" className="section">
      <div className="container">

        <div className="row">
          
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-layers"></i>
              </div>
              <h4>Law and documents</h4>
              <p>Get assistance with documents and legal proceedings with our esteemed lawyers in a quick online consultancy.</p>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-link"></i>
              </div>
              <h4>Quick reach: Fire and Police</h4>
              <p>Simply drop a message and swift services to combat the emergency (fire/police/ambulance) at your doorstep!</p>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <h4>Medical assistance at your home</h4>
              <p>Looking for medical assistance? Consult our doctors in online mode and book an offline appointment too if required.</p>
            </div>
          </div>
         

        </div>
      </div>
    </section>
    
    <section id="business-plan">
      <div className="container">

        <div className="row">
          
          <div className="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
            <div className="business-item-img">
              <img src="img/business/business-img.png" className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12 pl-4">
            <div className="business-item-info">
              <h3>Making it easy</h3>
              <p>Bring together law, medical and emergency services,  this is one platform solving many problems!</p>

              <a className="btn btn-common" href="#">LOGIN/SIGNUP</a>
            </div>
          </div>
         

        </div>
      </div>
    </section>
    
    <section id="features" className="section">
      <div className="container">
       
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">  
              <div>   
                <h2 className="section-title">Services We Provide</h2>
                <div className="desc-text">
                  <p>An initiative to bring together services under one platform online! Law, emergency and medical assistance under one roof!</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row featured-bg">
         
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border1">
               <div className="feature-icon float-left">
                 <i className="lni-layers"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Documents</h4>
                 <p>Digitally save your documents for quick hassle-free access in the future  </p>
               </div>
            </div>
            
          </div>
          
          
         
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border2">
               <div className="feature-icon float-left">
                 <i className="lni-briefcase"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Consult a lawyer</h4>
                 <p>Book an online one-to-one consultancy with one of our lawyers and get useful guidance on the go</p>
               </div>
            </div>
            
          </div>
          
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div className="feature-item featured-border1">
               <div className="feature-icon float-left">
                 <i className="lni-invention"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Emergency? We are only a message away</h4>
                 <p>Drop a messsage on our emergency portal and you will be assured of swift assistance. We will pass your message to police, fire and medical departments in a click</p>
               </div>
            </div>
           
          </div>
          
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border2">
               <div className="feature-icon float-left">
                <i className="lni-user"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Medical appointment</h4>
                 <p>Wish to see a doctor? Book an online one-to-one appointment with our experienced doctors today. </p>
               </div>
            </div>
           
          </div>
           
          
      
             

        </div>
        
      </div>
    </section>
    
    <section id="showcase">
      <div className="container-fluid right-position">
       
        <div className="row gradient-bg">
          <div className="col-lg-12">
            <div className="showcase-text section-header text-center">  
              <div>   
                <h2 className="section-title">Recent Works</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
        
        <div className="row justify-content-center showcase-area">
          <div className="col-lg-12 col-md-12 col-xs-12 pr-0">
            <div className="showcase-slider owl-carousel">
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/01.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/02.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/02.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/03.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/03.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/04.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/04.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/05.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/05.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/01.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/02.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/02.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/03.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/03.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/04.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/04.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/05.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/05.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/01.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/02.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/03.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/04.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/05.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/01.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/02.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/03.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/04.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="screenshot-thumb">
                  <img src="img/showcase/05.jpg" className="img-fluid" alt="" />
                  <div className="hover-content text-center">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="single-text">
                          <p>Icon , Web</p>
                          <h5>Redesign Slack</h5>
                        </div>
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/showcase/01.jpg"><i className="lni-zoom-in"></i></a>
                          <a href="#"><i className="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             

              
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section id="pricing" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-text section-header text-center">  
              <div>   
                <h2 className="section-title">Book a consultancy now!</h2>
                <div className="desc-text">
                  <p>See a lawyer and get your documents ready!</p>  
                  <p>See a doctor and get your medicines ready!</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row pricing-tables">
         
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Free</h3>
                <h1><span>$</span>00</h1>
                <ul>
                  <li>Free consultancy</li>
                  <li>New user signup</li>
                  <li>One-to-one video call</li>
                  
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
           
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3> Consult Lawyer Online</h3>
                <h1><span>$</span>29.99</h1>
                <ul>
                  <li>One-to-one video meet</li>
                  <li>Add relatives too</li>
                  <li>Get legal advice</li>
                  <li>Get your documents ready</li>
                  <li></li>
                  <li></li>  
                        
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">Purchase</a>
              </div>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Consult Doctor Online</h3>
                <h1><span>$</span>19.99</h1>
                <ul>
                  <li>One-to-one video meet</li>
                  <li>Online consultation at home</li>
                  <li>Medicines on the go</li>
                  <li>Book offline appointment if required</li>
                  
                  
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </section>
   
    <section id="team" className="section">
      <div className="container">
     
        <div className="row">
          <div className="col-lg-12">
            <div className="team-text section-header text-center">  
              <div>   
                <h2 className="section-title">Team Members</h2>
                <div className="desc-text">
                  <p>Google Solution Challenge 2022</p>  
                  <p>Team: ACCESS DENIED</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row">
        
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="pic/3.svg" className="img-fluid" alt=""/>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div> 
                <div className="team-inner text-center">
                  <h5 className="team-title">Dhruv Panchal</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="pic/7.jpg" className="img-fluid" alt=""/>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                  <h5 className="team-title">Dhvani Shah</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="https://icons-for-free.com/iconfiles/png/512/guy+man+user+icon-1320166734617071245.png" alt="Feature 03"/>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                  <h5 className="team-title">Harsh Mavani</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png" alt="Feature 01"/>
              </div>

              <div className="team-details">
                <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                 
                  <h5 className="team-title">Mohit Agrawal</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
 

        </div>
      
      </div>
    </section>
   
    <section id="contact" className="section">
      
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">  
              <div>   
                <h2 className="section-title">Get In Touch</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row">
         
          <div className="col-lg-6 col-md-12">
          <form id="contactForm">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name"/>
                  <div className="help-block with-errors"></div>
                </div>                                 
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" placeholder="Subject" id="msg_subject" className="form-control" name="msg_subject" required data-error="Please enter your subject"/>
                  <div className="help-block with-errors"></div>
                </div> 
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email"/>
                  <div className="help-block with-errors"></div>
                </div>                                 
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" placeholder="Budget" id="budget" className="form-control" name="budget" required data-error="Please enter your Budget"/>
                  <div className="help-block with-errors"></div>
                </div> 
              </div>
              <div className="col-md-12">
                <div className="form-group"> 
                  <textarea className="form-control" id="message"  name="message" placeholder="Write Message" rows="4" data-error="Write your message" required></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="submit-button">
                  <button className="btn btn-common" id="submit" type="submit">Submit</button>
                  <div id="msgSubmit" className="h3 hidden"></div> 
                  <div className="clearfix"></div> 
                </div>
              </div>
            </div>            
          </form>
          </div>
         
          <div className="col-lg-1">
            
          </div>
         
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-1">
          </div>
          

        </div>
        
      </div>
    </section>
    
    <footer>
      
      <section id="footer-Content">
        <div className="container">
          
          <div className="row">

          
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              
              <div className="footer-logo">
               <img src="img/footer-logo.png" alt=""/>
              </div>
            </div>
             
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Company</h3>
                <ul className="menu">
                  <li><a href="#">  - About Us</a></li>
                  <li><a href="#">- Career</a></li>
                  <li><a href="#">- Blog</a></li>
                  <li><a href="#">- Press</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Product</h3>
                <ul className="menu">
                  <li><a href="#">  - Customer Service</a></li>
                  <li><a href="#">- Enterprise</a></li>
                  <li><a href="#">- Price</a></li>
                  <li><a href="#">- Scurity</a></li>
                  <li><a href="#">- Why SLICK?</a></li>
                </ul>
              </div>
            </div>
             
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Download App</h3>
                <ul className="menu">
                  <li><a href="#">  - Android App</a></li>
                  <li><a href="#">- IOS App</a></li>
                  <li><a href="#">- Windows App</a></li>
                  <li><a href="#">- Play Store</a></li>
                  <li><a href="#">- IOS Store</a></li>
                </ul>
              </div>
            </div>
             
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Subscribe Now</h3>
                <p>Appropriately implement calysts for change visa wireless catalysts for change. </p>
                <div className="subscribe-area">
                  <input type="email" className="form-control" placeholder="Enter Email"/>
                  <span><i className="lni-chevron-right"></i></span>
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
       

        <div className="copyright">
          <div className="container">
           
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>Crafted by <a href="http://uideck.com" rel="nofollow">UIdeck</a></p>
                </div>              
                
              </div>
              
            </div>
            
          </div>
        </div>
      
      </section>
     
    </footer>
    


   
    <a href="#" className="back-to-top">
      <i className="lni-chevron-up"></i>
    </a> 
	</>
  )
}
