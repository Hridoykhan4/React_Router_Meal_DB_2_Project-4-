import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const {
    strMeal: name,
    idMeal: id,
    strArea: area,
    strMealThumb: image,
  } = meal;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="h-[260px] w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Area: {area}</p>
        <div className="card-actions justify-end">
          <Link to={`/meal/${id}`}>
            <button className="btn btn-primary">Meal Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
/* 
/* 
{
    "idMeal": "53086",
    "strMeal": "Migas",
    "strMealAlternate": null,
    "strCategory": "Miscellaneous",
    "strArea": "Spanish",
    "strInstructions": "Crumble the bread into small pieces. Sprinkle with cold water, cover with a damp cloth and leave for 30 minutes.\r\nHeat 2 tsp of olive oil in a deep pan. Add the garlic cloves separated, skins on; just make a small cut with a knife to open them and keep frying for 5 minutes. Set the garlic aside.\r\nIn the same oil, where we fried everything, simmer the bread, stirring constantly for 15 minutes and add a grinding of black pepper.\r\nAdd the garlic, continue stirring for about 20 minutes. It will be ready when the bread is soft and golden.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg",
    "strTags": null,
    "strYoutube": "https://www.youtube.com/watch?v=GSvFVBpqMKI",
    "strIngredient1": "Bread",
    "strIngredient2": "Olive Oil",
    "strIngredient3": "Garlic",
    "strIngredient4": "Pork",
    "strIngredient5": "",
    "strIngredient6": "",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "1 large",
    "strMeasure2": "1 1/2 L ",
    "strMeasure3": "Half",
    "strMeasure4": "1 Handfull",
    "strMeasure5": " ",
    "strMeasure6": " ",
    "strMeasure7": " ",
    "strMeasure8": " ",
    "strMeasure9": " ",
    "strMeasure10": " ",
    "strMeasure11": " ",
    "strMeasure12": " ",
    "strMeasure13": " ",
    "strMeasure14": " ",
    "strMeasure15": " ",
    "strMeasure16": " ",
    "strMeasure17": " ",
    "strMeasure18": " ",
    "strMeasure19": " ",
    "strMeasure20": " ",
    "strSource": "https://www.ibericafood.com/Recipes/post/migas-with-pork",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}
*/
