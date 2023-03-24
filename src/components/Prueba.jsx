import React, { useState } from "react";
export default function Prueba(props) {
  console.log(props);
  const [nombre, setNombre] = useState("Caro");
  React.useEffect(() => {
    console.log("Inicie");
  }, []);
  React.useEffect(() => {
    console.log("Me actualice");
  }, []);
  React.useEffect(() => {
    return () => console.log("Me jui");
  }, []);
  const handleChange = ()=>{
    setNombre(props.nombre)
  }
  return (
    <div>
      <h1>Prueba</h1>
      <h3>{nombre}</h3>
      <button onClick={handleChange}>Actualizar</button>
    </div>
  );
}
