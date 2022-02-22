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
        <div style={{paddingTop:"5%"}} class="row">
        <div class="col-sm-1 col-md-3 col-lg-4">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
<div class=" col-sm-1 col-md-3 col-lg-4">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
 </div>

        </div>     
          
      </div>
      
    </>
  );
}

export default Services;
