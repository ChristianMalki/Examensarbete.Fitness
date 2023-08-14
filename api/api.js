const url =
  "https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=biceps&fitness_level=beginner&fitness_goals=strength";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "42937fc287msh15fb5ae1f18eb8dp17eecajsne84bf69ea83c",
    "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
