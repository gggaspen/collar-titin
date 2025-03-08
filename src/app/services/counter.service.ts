const postCounter = async () => {
  try {
    const response = await fetch(
      "https://titin-back-production.up.railway.app/touch",
      {
        method: "POST",
      }
    );
    console.log(response);
    if (!response.ok) {
      console.error("Error en la solicitud", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud", error);
  }
};

export { postCounter };
