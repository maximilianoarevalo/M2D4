// Este archivo define las funciones para renderizar en el html, recibe un arreglo correspondiente

// PROPIEDADES A LA VENTA:
export function renderizarPropiedadesVenta(propiedades_venta) {
  // Se obtiene el elemento contenedor de las cards venta
  const cardSellContainer = document.getElementById("contenedor-ventas");

  // Variable para renderizar cards venta en html
  let cardSellRender = "";

  // Renderizado de propiedades a la venta
  for (let i = 0; i < propiedades_venta.length; i++) {
    // Se define el color y el texto si se permite fumar/mascotas y se agrega su color con clases de bootstrap
    let allowSmoke = propiedades_venta[i].smoke
      ? '<p class="text-success"> <i class="fas fa-smoking-ban"></i> Se permite fumar </p>'
      : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No permite fumar </p>';
    let allowPets = propiedades_venta[i].pets
      ? '<p class="text-success"> <i class="fa-solid fa-ban"></i> Se permite fumar </p>'
      : '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permite fumar </p>';
    // Se define el template predeterminado y usando interpolacion se agregan los datos de los arreglos
    let template = `
      <div class="col-md-4 mb-4"> 
          <div class="card"> 
              <img
                  src=${propiedades_venta[i].src}
                  class="card-img-top"
                  alt="Imagen del departamento"
              />
              <div class="card-body">
                  <h5 class="card-title">
                  ${propiedades_venta[i].nombre}
                  </h5>
                  <p class="card-text">
                  ${propiedades_venta[i].descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[i].ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedades_venta[i].banos} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[i].costo}</p>
                  ${allowSmoke}
                  ${allowPets}
                </div>
              </div>
            </div>
      `;
    // Se va concatenando el contenido anterior, para que no se reemplace ni se pierda en cada iteracion
    cardSellRender += template;
  }
  //Se renderizan las cards en la pagina
  cardSellContainer.innerHTML = cardSellRender;
}

// PROPIEDADES ALQUILER:
export function renderizarPropiedadesAlquiler(propiedades_alquiler) {
  // Se obtiene el elemento contenedor de las cards alquiler
  const cardRentContainer = document.getElementById("contenedor-alquiler");

  // Variable para renderizar cards alquiler en html
  let cardRentRender = "";

  // Renderizado de propiedades a la venta
  for (let i = 0; i < propiedades_alquiler.length; i++) {
    // Se define el color y el texto si se permite fumar/mascotas y se agrega su color con clases de bootstrap
    let allowSmoke = propiedades_alquiler[i].smoke
      ? '<p class="text-success"> <i class="fas fa-smoking-ban"></i> Se permite fumar </p>'
      : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No permite fumar </p>';
    let allowPets = propiedades_alquiler[i].pets
      ? '<p class="text-success"> <i class="fa-solid fa-ban"></i> Se permite fumar </p>'
      : '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permite fumar </p>';
    // Se define el template predeterminado y usando interpolacion se agregan los datos de los arreglos
    let template = `
      <div class="col-md-4 mb-4"> 
          <div class="card"> 
              <img
                  src=${propiedades_alquiler[i].src}
                  class="card-img-top"
                  alt="Imagen del departamento"
              />
              <div class="card-body">
                  <h5 class="card-title">
                  ${propiedades_alquiler[i].nombre}
                  </h5>
                  <p class="card-text">
                  ${propiedades_alquiler[i].descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[i].ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> 4 Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
                  ${allowSmoke}
                  ${allowPets}
                </div>
              </div>
            </div>
      `;
    // Se va concatenando el contenido anterior, para que no se reemplace ni se pierda en cada iteracion
    cardRentRender += template;
  }
  //Se renderizan las cards en la pagina
  cardRentContainer.innerHTML = cardRentRender;
}
