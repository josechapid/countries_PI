function validation (input, activities){
    const errors = {}
    const regexName = /^[a-zA-Z\s]{5,35}$/;

    if (!input.name.trim()) {
      errors.name = "El nombre de la actividad es requerido";
      alert("El nombre de la actividad es requerido");
    } else if (!regexName.test(input.name)) {
      errors.name =
        "El nombre debe contener solo letras y tener entre 5 y 35 caracteres";
      alert(
        "El nombre debe contener solo letras y tener entre 5 y 35 caracteres"
      );
    } else {
      const existingActivity = activities.find(
        (activity) => activity.name === input.name
      );
      if (existingActivity) {
        errors.name = "Ya existe una actividad con este nombre";
        alert("Ya existe una actividad con este nombre");
      }
    }
    if (!input.difficulty){
        errors.difficulty = "La dificultad es requerida"
        alert("La dificultad es requerida");
    }
     if (input.countries.length === 0 ){
        errors.countries = "Al menos un pais debe ser seleccionado"
        alert("Al menos un país debe ser seleccionado");
     }
     if(input.duration === "default"){
        errors.duration = "Selecciona una duracion valida"
        alert("Selecciona una duración válida");
     }

     if (input.season === "default"){
        errors.season = "Selecciona un temporada valida"
         alert("Selecciona una temporada válida");
     }
     return errors

}

export default validation