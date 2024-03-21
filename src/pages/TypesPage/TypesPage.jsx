import { useParams } from 'react-router-dom';
import './TypesPage.css';

const TypesPage = () => {
  const [allDrinks, setAllDrinks] = useState();
  const { type } = useParams();

  useEffect(() => {
    type !== 'Non_Alcoholic'
      ? fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData))
          .catch((error) => console.error('Error auf der Details Page', error))
      : fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData))
          .catch((error) => console.error('Error auf der Details Page', error));
  }, [type]);

  console.log(allDrinks);

  return <></>;
};

export default TypesPage;
