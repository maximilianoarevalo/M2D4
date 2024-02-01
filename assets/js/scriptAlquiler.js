
const propiedades_alquiler = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        costo: 5.000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        costo: 1.200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        costo: 4.500,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        costo: 5.000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        costo: 1.200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        costo: 4.500,
        smoke: false,
        pets: false,
    }
];
  
// PROPIEDADES ALQUILER:

// Se obtiene el elemento contenedor de las cards alquiler
const cardRentContainer = document.getElementById("contenedor-alquiler");

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
    cardRentContainer.innerHTML = cardRentContainer.innerHTML + template;
}