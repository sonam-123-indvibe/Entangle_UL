import React from 'react'
import "./Services.css"

const Services = () => {
  return (
   <>
   <section class="services-section py-5">
  <div class="container text-center">
    <h2 class="section-title mb-3">Our <span>Services & Solutions</span></h2>
    <p class="section-subtitle mb-5">
      We provide end-to-end IT solutions to empower businesses with modern technologies, 
      ensuring growth, innovation, and digital success.
    </p>

    <div class="row g-4">
      {/* <!-- Service Card --> */}
      <div class="col-md-6 col-lg-4">
        <div class="service-card">
          <div class="icon-box"><i class="bi bi-code-slash"></i></div>
          <h5>Custom Software Development</h5>
          <p>
            Build tailored software solutions designed to meet your unique business needs 
            with scalable, secure, and robust technology.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="service-card">
          <div class="icon-box"><i class="bi bi-globe"></i></div>
          <h5>Web Development</h5>
          <p>
            Modern, responsive, and SEO-friendly websites that help your business 
            stand out online.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="service-card">
          <div class="icon-box"><i class="bi bi-phone"></i></div>
          <h5>Mobile App Development</h5>
          <p>
            Native & cross-platform apps with smooth UI/UX to engage your audience 
            anytime, anywhere.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="service-card">
          <div class="icon-box"><i class="bi bi-cloud"></i></div>
          <h5>Cloud Solutions</h5>
          <p>
            Secure cloud integration, migration, and management to make your 
            business future-ready.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="service-card">
          <div class="icon-box"><i class="bi bi-megaphone"></i></div>
          <h5>Digital Marketing / SEO</h5>
          <p>
            Boost your online visibility, generate leads, and grow with proven 
            digital strategies.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Services
