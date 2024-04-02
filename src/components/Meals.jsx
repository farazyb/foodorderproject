import useFood from "../hooks/useFood";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealIteam from "./MealItem";
import { getFoodList } from "../urls/food";
import { useApiGet } from "../hooks/useApi";
const requestConfig = {};
export default function Meals() {
  const { data, isLoading, error, isError, isLoadingError, refetch } =
    useApiGet(["meals"], getFoodList, {
      enabled: true,
      refetchOnWindowFocus: false,
      retry: 1,
    });

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (isError || isLoadingError) {
    return <Error title={"Fail To Fetch data"} message={error.message} />;
  }

  return (
    <ul id="meals">
      {data?.map((meal) => (
        <MealIteam key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
