# Poké Port

Live link to BackEnd demo: [Poké Port Admin Dashboard](https://shiv-pokeport-final-express.onrender.com/cards)

Live link to FrontEnd demo: [Poké Port](https://poke-port.netlify.app/)

## Project Summary

Welcome to PokePort, a one-stop destination for all your Pokémon card needs! We've created this unique online platform with one clear mission in mind - to make buying Pokémon cards as easy, fun, and accessible as possible for enthusiasts worldwide.

This project was created by someone who loves Pokémon from the bottom of his heart. There is quite a significant amount of BackEnd functionality in this project.

## Target Audience & User Goals

### User Stories and Pain Points

A Pokémon card enthusiast lives in a remote area with no access to local game shops. PokePort allows him to explore a vast catalogue of cards and purchase them conveniently from the comfort of his home.

A mother wants to surprise her child with a rare Pokémon card for his birthday but has no idea where to start. PokePort's user-friendly interface and comprehensive search functions enable her to find the perfect card.

A seasoned collector is seeking to purchase a highly sought-after limited edition card. With PokePort's robust security measures, he can make his purchase with confidence, knowing that the card is authentic and his transaction is secure.

## UI/UX Elements

I have tried to style the FrontEnd website to fit the Pokémon (or a Pokéball) theme, being red, black and white. These colors and overall design choice are evident through the following:
— NavBar is Red (#FF0000) and Black (#000000)
— The general background color for most pages is white (#FFFFFF). Some other colors have been added to accentuate the look of some website elements, such as the forms.
- The home page has an image from Pokémon Mystery Dungeon: Red Rescue Team, one of my favorite Pokémon games of all time.

The BackEnd website does not have a Pokémon style, because it is meant to be a generic admin dashboard that can be easily transferrable to work with any type of product, with the only change needing to be made being the database with its tables and columns. I have styled it in my own way.

The fonts used for this project were the default fonts set by the frameworks I used.

My SQL database was meticulously planned for, and the reflection of that planning can be found in my ERD Diagram and Logical Schema diagram.

![ERD Diagram](src/assets/resources/ERD.png)

![Logical Schema Diagram](src/assets/resources/LSD.png)

---

## Features
| Features | Description |
| ----------- | ----------- |
| Mobile Responsiveness | The site adapts to various breakpoints with good layout for accessibility on computers and phones. |
| Database Integration | SQL Database stores all of the data for every detail related to the product — in this case, Pokémon cards. This includes card types, card prices, and card expansions. All user authentication data is accessed from this database as well. |
| Product Listing | All products in the store are able to be displayed, loading in a grid format that adapts to different screen sizes. |
| Shopping Cart | Items can be added to the shopping cart, and checked out with Stripe. |
| Secure Payment Gateway | Users can pay knowing they are doing so securely. |
| Order Tracking with Statuses | There is functionality to allow for orders to be tracked, with details being displayed on the user's profile. |
| Search Functionality | Searching can be done to filter products on both the FrontEnd and the BackEnd websites. |
| Routing | The website redirects to different URLs to render different pages. |


---

## Limitations and Future Implementations

One issue I have noticed but don't think retracts from the overall purpose of the project is:
- Certain features on the BackEnd are not present (ex. more search engines, more database columns displayed). The website's purpose of presenting as an implementation of the ecommerce concept is still very evident.

Some possible features I would like to implement in the future are:
- Trading system: trade cards with other users, though I feel that this concept isn't realistic for an ecommerce project as there is the buying / selling of a product involved, and it might take away from the ultimate goal of the project.
- Favorites collection: players can save their favorite cards to a collection stored to their profiles, even if they have not purchased any cards yet.
- Linkage with any Pokémon APIs, just to better connect the theme with Pokémon.

---

## Tech Stack

- **FrontEnd**: HTML, CSS, JavaScript, Bootstrap, React, React-Bootstrap, Material UI, Axios, JWT-Decode

- **BackEnd**: Node.js with Express, JSON Web Token (User Authentication), CORS (Cross-Origin Resource Sharing), Bookshelf (ORM Library to connect with databases), Knex (SQL Query Builder), Cloudinary (upload images), Caolan Forms (BackEnd forms), Handlebars (View Engine)

--- 

## Testing
| Test Case | Description |
| ----------- | ----------- |
| Website Exists | Go to the website as per the live demo link above |
| User Login (FrontEnd) | Click on Login/Logout and use the test account (email: dog@dog.com, password: dog), then it should redirect to the user profile, and all features should be dependent on whether the user is logged in or not |
| User Login (BackEnd) | Click on Login/Logout and use the test account (email: dog@dog.com, password: dog). All features should be dependent on whether the user is logged in or not |
| Checkout | Be logged in, click cart, click checkout, Stripe |

---

## Deployment

- **FrontEnd**: The web application is hosted on and was deployed through [Netlify](https://www.netlify.com/), directly from this GitHub repository.

- **BackEnd**: The Express server is hosted on and was deployed through [Render](https://render.com/), directly from the main branch of [this GitHub repository](https://github.com/shiv-iyer/Project-3-BackEnd).

---

## Credits and Acknowledgment

- Bulbapedia, TCGPlayer, and other related websites for Pokémon card information and artwork
- [Poke Ball Icon](https://en.wikipedia.org/wiki/File:Pok%C3%A9_Ball_icon.svg)
- [Pokémon Mystery Dungeon Hero Image](https://www.pokemon.com/us)
- [Chat GPT](https://openai.com/blog/chatgpt): utilized for learning. It is a powerful tool that can accomplish a lot, but I tried not to use it too often.

Thank you so much to my lecturer, Paul, my friend, Isaac, as well as my classmates for help, guidance and support throughout this project.