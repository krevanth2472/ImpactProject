import React from 'react'


function Card() {
  return (
      <section style={{paddingLeft:'10%',paddingRight:'10%',justifyContent:'center'}}>
        <h1 style={{fontFamily: 'k2d',fontSize:'50px',justifyContent:'center',textAlign:'center'}}>Why Choose Us?</h1>
        <p style={{fontFamily:'k2d',fontSize:'25px',justifyContent:'center',textAlign:'center'}}>Discover the magic behind our appointment booking service.</p>
        <div id="card-holder" class="card-holder">
            <img src={image1} alt="Image 1"/>
            <h2 id='card-heading'>Instant Booking</h2>
            <p id='card-para' class="para">Book appointments in seconds, no more waiting around!</p>
          </div>
          
          <div id="card-holder" class="card-holder">
            <img src={image2} alt="Image 2"/>
            <h2 id='card-heading'>24/7 Access</h2>
            <p id='card-para' class="para">Book anytime, anywhere, even in your pajamas!</p>
          </div>
          
          <div id="card-holder" class="card-holder">
            <img src={image3}/>
            <h2 id='card-heading'>Effortless Scheduling</h2>
            <p id='card-para' class="para">Say goodbye to scheduling headaches, we've got you covered!</p>
          </div>
          
          <div id="card-holder" class="card-holder">
            <img src={image4} alt="Image 4"/>
            <h2 id='card-heading'>Good Consultation</h2>
            <p id='card-para' class="para">No need to take help of others, you can do it by urselves</p>
          </div>          
    </section>
  )
}

export default Card
