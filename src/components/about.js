import Logo from "./logo";


function AbousUs(){
  return(
    <>
      <div className="container about-me-section mt-5">

      <Logo/>

       
  <div className="row align-items-center mb-5">
   
    <div className="col-md-6 text-center">
      <img
        src="/images/ram2.jpg"
        className="profile-img"
        alt="Ram Kumar"
      />
    </div>
    
    <div className="col-md-6">
      <div className="about-details">
        <h2 className="name">RamKumar.S</h2>
        <h5 className="role">Web Developer</h5>
        <p className="mt-4 description">
          I specialize in creating user-friendly websites, handling APIs, and
          implementing innovative CSS animations to enhance performance and
          elevate my company's digital presence.
        </p>
        <div className="contact-info mt-4">
          <div className="row">
            <div className="col-md-6">
              <h6>Contact:</h6>
              <p>7904310801</p>
            </div>
            <div className="col-md-6">
              <h6>Email:</h6>
              <p>ramrk0144@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
  <div className="row education-section mb-5">
    <h2 className="section-title">Education</h2>
    <div className="col-md-6">
      <h6 className="year">10th (2019-2020)</h6>
      <p>C.M.S David Memorial School</p>
      <h6 className="year">12th (2021-2022)</h6>
      <p>C.M.S David Memorial School</p>
    </div>
    <div className="col-md-6">
      <h6 className="year">Diploma in Computer Science (2022-2024)</h6>
      <p>Scad Polytechnic College</p>
      <h6 className="year">Web Developer (2024)</h6>
      <p>Brassy Academy</p>
    </div>
  </div>

 
  <div className="skills-section">
    <h2 className="section-title">Skills</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="skill-card">
          <h4><i class="fa-brands fa-html5"></i> HTML</h4>
          <p>Creating user-friendly webpage structures.</p>
        </div>
        <div className="skill-card">
          <h4><i class="fa-brands fa-css3"></i> CSS</h4>
          <p>Designing animations and modern styles.</p>
        </div>
        <div className="skill-card">
          <h4><i class="fa-brands fa-bootstrap"></i> Bootstrap</h4>
          <p>Implementing responsive mobile-first designs.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="skill-card">
          <h4><i class="fa-brands fa-js"></i> JavaScript</h4>
          <p>Building dynamic and interactive web pages.</p>
        </div>
        <div className="skill-card">
          <h4><i class="fa-brands fa-react"></i> React.js</h4>
          <p>Creating reusable components for web apps.</p>
        </div>
        <div className="skill-card">
          <h4><i class="fas fa-plug"></i> API Handling</h4>
          <p>Integrating and maintaining APIs efficiently.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )

}

export default AbousUs;