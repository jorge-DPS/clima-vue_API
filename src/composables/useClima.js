export default function useClima() {
  const getClima = ({ ciudad, pais }) => {
    // importar el api key
    const key = import.meta.env.VITE_API_KEY;

    // Obtener la lat , lng
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=87383f8408377113dcf38dde52c810e2`;
    console.log(url);
    

    //Obtener el clima
  };

  return {
    getClima,
  };
}
