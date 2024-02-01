const propiedades_venta = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2.000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      costo: 2.500,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2.200,
      smoke: false,
      pets: false,
    },
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion:
          "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        costo: 2.000,
        smoke: false,
        pets: true,
      },
      {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion:
          "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        costo: 2.500,
        smoke: true,
        pets: true,
      },
      {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion:
          "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        costo: 2.200,
        smoke: false,
        pets: false,
      }
  ];
  
  
  // PROPIEDADES A LA VENTA:
  
  // Se obtiene el elemento contenedor de las cards venta
  const cardSellContainer = document.getElementById("contenedor-ventas");
  
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
                    <i class="fas fa-bath"></i> 4 Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[i].costo}</p>
                  ${allowSmoke}
                  ${allowPets}
                </div>
              </div>
            </div>
      `;
    // Se va concatenando el contenido anterior, para que no se reemplace ni se pierda en cada iteracion
    cardSellContainer.innerHTML = cardSellContainer.innerHTML + template;
  }
  
