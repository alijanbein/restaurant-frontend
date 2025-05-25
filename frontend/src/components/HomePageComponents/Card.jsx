// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function CardComponent({ branch }) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>{branch.name}</Card.Title>
//         <Card.Text>
//           {branch.location},{branch.is_active},{branch.phone},
//           {branch.opening_hours}
//         </Card.Text>
//         <Button variant="primary">Open Menu</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComponent;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import restaurantIcon from "../../assets/icons/restaurent_icon.png";

export default function CardComponent({ branch }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={restaurantIcon}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {branch.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {branch.location} - {branch.phone} - {branch.opening_hours}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {branch.is_active ? "Active" : "Closed"}
        </Button>
      </CardActions>
    </Card>
  );
}
