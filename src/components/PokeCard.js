// from Material UI.

import * as React from "react";
import { styled } from "@mui/material/styles";

// material UI card components
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";

// material UI icons
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// shopping cart
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// poke ball icon?!?!
import pokeBall from "../assets/resources/images/Poké_Ball_icon.png";

// stylesheet
import "../assets/styles/componentstyles.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PokeCards(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { pokedata } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCart = (cardName) => {
    alert("Card " + cardName + " has been added to your shopping cart!");
    console.log(pokedata);
  };

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            // can use the src prop of Avatar to use an icon.
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="pokeball icon"
              src={pokeBall}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={pokedata.name}
          // use a template literal to display the rarity
          subheader={`Rarity: ${pokedata.rarity}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={pokedata.image_url}
          alt="Pokemon Card Image"
        />
        <CardContent>
          <Typography variant="h5" color="text.secondary" mb={1}>
            {/* I can use spans to style inline elements  individiaully. */}
            Card Cost: <span className="cost-text">${pokedata.cost}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* refactored the warning above: change the variant. i'll figure a diff one out for this though */}
            <h5>Flavor Text:</h5>
              <span className="flavor-text">"{pokedata.flavor_text}"</span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to cart"
            onClick={() => addToCart(pokedata.name)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* more on Typography components https://mui.com/material-ui/react-typography/ */}
            <Typography paragraph>— Additional Card Information —</Typography>
            <Typography paragraph>
              Card Condition: {pokedata.condition}
            </Typography>
            <Typography paragraph>
              {/* use ternary operator to display type or types depending on whether there are more than 1. */}
              {pokedata.type.length > 1 ? "Types: " : "Type: "}
              {/* map through the type object to extract each individual type, and then display them */}
              {pokedata.type.map(t => t.type).join(", ")}
            </Typography>
            <Typography paragraph>
              Expansion: {pokedata.expansion.name}
            </Typography>
            <Typography paragraph>Stage: {pokedata.stage}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}
