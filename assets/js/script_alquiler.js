import {renderizarPropiedadesAlquiler} from './script_render.js';

// Este script tiene su arreglo de propiedades correspondientes para alquier
// Para renderizar se llaman las funciones del archivo script_render para no reescribir codigo

const propiedades_alquiler = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4, // Esta propiedad no se pide, pero si aparece en el ejemplo asi que la agrego
        costo: 5000,
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
        banos: 2, 
        costo: 1200,
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
        banos: 3, 
        costo: 4500,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en zona residencial",
        src: "https://plus.unsplash.com/premium_photo-1680028256635-17e7f3ebbb23?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion:
          "Encantador apartamento con todas las comodidades, ubicado en una tranquila zona residencial",
        ubicacion: "789 Maple Street, Suburbia, CA 34567",
        habitaciones: 2,
        banos: 1,
        costo: 1500,
        smoke: false,
        pets: true,
      },
      {
        nombre: "Casa familiar cerca de parques y escuelas",
        src: "https://images.unsplash.com/photo-1644482036299-019df20fa4b8?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion:
          "Cómoda casa familiar con un amplio patio, cerca de parques y escuelas",
        ubicacion: "456 Oak Street, Familyville, CA 56789",
        habitaciones: 3,
        banos: 2,
        costo: 1800,
        smoke: true,
        pets: true,
      },
      {
        nombre: "Apartamento luminoso con balcón",
        src: "https://images.unsplash.com/photo-1469532844423-7e9107f9a96f?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion:
          "Agradable apartamento con mucha luz natural y un pequeño balcón",
        ubicacion: "123 Pine Street, Sunshine City, CA 12345",
        habitaciones: 1,
        banos: 1,
        costo: 1200,
        smoke: false,
        pets: false,
      }
];

renderizarPropiedadesAlquiler(propiedades_alquiler);
