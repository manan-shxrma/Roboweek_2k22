import React from "react";
import "../css/techtalks.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Services() {
  return (
   <>  <div id="techtalks">
      <div className="container mainbodyoftimeline">
        <div
          className="section-heading wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <h6>Speakers</h6>
          <h4>
            Learn with <em>Roboweek</em>{" "}
          </h4>
          <div className="line-dec"></div>
        </div>
    {/* <div style={{paddingTop:"5%"}} class="row">
    <div class="col-sm-12 col-md-6 col-lg-6" style={{paddingLeft:"10%", width:"40%"}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image="assets/images/tech-talk-1.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quantum Machine Learning
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Dr. Santosh K Nanda
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Vice President at Techversant | Quantum Machine Learning Expert | Key-Note Speaker | IEEE Senior Member
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
</div>
<div class="col-sm-12 col-md-6 col-lg-6" style={{paddingLeft:"10%", width:"40%"}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image="assets/images/tech-talk-2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Women in FOSS
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Nithya Duraisamy
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Assistant Consultant at Tata Consultancy Services Limited | Ex Test Engineer at Infosys | Ex Associate at
Cognizant Technology Solutions
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
</div>
 </div> */}
<div style={{paddingTop:"5%", textAlign:"-webkit-center"}} class="row">
<div class="col-sm-12 col-md-6 col-lg-6">
<figure class="snip1515">
  <div class="profile-image"><img src="assets/images/tech-talk-1.png" alt="sample47" /></div>
  <figcaption>
    <h3 class="tech-h3">Santosh Kumar Nanda
</h3>
    <h4>Quantum Machine Learning</h4>
    <p class="tech-para">Vice President at Techversant| Quantum Machine Learning Expert | Key-Note Speaker | IEEE Senior Member</p>
    <div class="icons"><a href="#"><i class="ion-social-linkedin" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-twitter" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-facebook" style={{color:"orange"}}></i></a>
    </div>
  </figcaption>
</figure>
</div>
<div class="col-sm-12 col-md-6 col-lg-6">
<figure class="snip1515">
  <div class="profile-image"><img src="assets/images/tech-talk-2.jpg" alt="sample83" /></div>
  <figcaption>
    <h3 class="tech-h3">Nithya Duraisamy
</h3>
    <h4>Women In FOSS </h4>
    <p class="tech-para">Assistant Consultant at Tata Consultancy Services Limited | Ex Associate Cognizant Technology Solutions</p>
    <div class="icons"><a href="#"><i class="ion-social-linkedin" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-twitter" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-facebook" style={{color:"orange"}}></i></a>
    </div>
  </figcaption>
</figure>
</div>
{/* <div class="col-sm-12 col-md-4 col-lg-4">
<figure class="snip1515">
  <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg" alt="sample70" /></div>
  <figcaption>
    <h3 class="tech-h3">Ruby Von Rails</h3>
    <h4>Public Relations</h4>
    <p class="tech-para">The only skills I have the patience to learn are those that have no real application in life. </p>
    <div class="icons"><a href="#"><i class="ion-social-reddit" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-twitter" style={{color:"orange"}}></i></a>
      <a href="#"> <i class="ion-social-vimeo" style={{color:"orange"}}></i></a>
    </div>
  </figcaption>
</figure>
</div> */}
</div>

        </div>     
          
      </div>
      
    </>
  );
}

export default Services;
