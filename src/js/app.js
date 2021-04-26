
document.addEventListener("DOMContentLoaded", function(){
    cargarServicios();
});

function cargarServicios(){
    const archivo = "../servicios.json";

    fetch(archivo)
        .then( function (resultado){
            return resultado.json()
        })
        .then( function(datos){
            const {servicios} = datos
    
            const serviciosHTML = document.querySelector(".listado-servicios");

            servicios.forEach(element => {
                const serviciosJSON = document.createElement('DIV');

                serviciosJSON.classList.add('serviciosjson');

                const nombreServicio = document.createElement('P');
                nombreServicio.classList.add('nombre-servicio');
            
                const precioServicio = document.createElement('P');
                precioServicio.classList.add('precio-servicio');

                const {nombre, precio} = element;
                nombreServicio.textContent = nombre;
                console.log(nombreServicio);
                
                precioServicio.textContent = `$ ${precio}`;
                console.log(precioServicio);

                serviciosJSON.appendChild(nombreServicio);
                serviciosJSON.appendChild(precioServicio);

               

                serviciosHTML.appendChild(serviciosJSON);

                console.log(serviciosHTML)

                
            });
        })
}