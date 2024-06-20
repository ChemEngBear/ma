


// import 'Potato'; 

// function Potato;
// retu

// function App( {

// }  
// 	return (
//     <div> 
//       <h1>hello</h1>
//     </div>


  // export default App; /


import React from 'react';
import Proptypes from 'prop0types';
function Food({name, picture, rating}) {
  return (
    <div>
       <h3> I love {name}</h3>
       <h4>{rating} </h4>
       <img src={picture} alt={name} />
    </div>
)
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image:"https://i.namu.wiki/i/bj0-ePqpopfsn6uKSSZ_hjHW0H-FZIYh_pNrzr_jXaefuUTt3ZeVhL6pWn2GdT6KcCZVNNklxG1WSH_BoEkN2TuPKPSuN5vpw9R3yQi7QjX8GSyVVSQYrOIm-463JTa2ueXZj43va0-vHWrjkUXJgg.webp" ,
    rating: 5
}, {
    id: 2,
    name: "Samgyeopsal",
    image: "https://i.namu.wiki/i/K3O2tUaS5KrtFt4d-wVlUlEx-ndh2OW-u8xmD4fFB-qwaOuQgF-f_KRe5s-ezgMoJIyXLS87XT0usw2v2ftVYjdd7J-slAscKe-KFlIIbuKXzRAeocdyb7gXjFndpjLNdot4ymEhFME24gb4Ll7XWQ.webp",
    rating: 3.1
}, {
    id: 3,
    name: "Bibimbap",
    image: "https://i.namu.wiki/i/OQ606_3C6ALQH8twSQSG-X3hRTlpA8iYd8oHPOxS3deKGvfW1qhmcFWYFS3oidT9PpN-a7xRr5erB1MOn821kRbEirTKDEHw6lMkty11bv0Y25aDM1hIgYDq5Z1H2JPyFY9t_INRJBgEhTG_lx0vcw.jpg",
    rating: 4.4

  }, {
    id: 4,
    name: "Doncasu",
    image: "https://i.namu.wiki/i/AGro-EF1haGgEaVm72IktIeLzn1BiDnoq60gjhf1DZ2QiRrGlLlx8mq9RFVIojuxKmlznKQ77iupUal3HYn4DWBAux6OsI-hwcVLPGPdvZJs4VHmpFVwOkqE11YKle3CY4--Jel7JXt0lBajIEjDJQ.webp",
    rating: 2.3
}, {
    id: 5,
    name: "Kimbap",
    image: "https://i.namu.wiki/i/I67Wioz7W6coFnd1btC_reTiVUD9Jii2H-G8FgoRulo-bsFtKx0J95W8-cLDN-arGpkeaVQUCVxzlQCry5088hhJaoyJR5JcqIjvZBk5zMrf23AVGiKpdy2Jnmcibr1KZFze8BdB3-QJqVM4-7VzIg.webp",
    rating: 2.3
  }
]

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
// {foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}    
// </div>
//   );
// }


function renderFood(dish) {
  return (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
  {foodLike.map(renderFood)}    
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;




// const friends = ["dal", "mark", "lynn", "japan guy"]

// friends.map(function(friend) {
//   return friend + '*';
// })