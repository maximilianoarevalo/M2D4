import {renderizarPropiedadesVenta} from './script_render.js';

// Este script tiene su arreglo de propiedades correspondientes para venta
// Para renderizar se llaman las funciones del archivo script_render para no reescribir codigo

const propiedades_venta = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2, // Esta propiedad no se pide, pero si aparece en el ejemplo asi que la agrego
    costo: 2000,
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
    banos: 2,
    costo: 2200,
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
    banos: 2, 
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Penthouse con terraza panorámica",
    src: "https://images.unsplash.com/photo-1542928658-22251e208ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Amplio penthouse con una terraza panorámica que ofrece vistas impresionantes de la ciudad",
    ubicacion: "789 Skyline Drive, Uptown, CA 34567",
    habitaciones: 4,
    banos: 3,
    costo: 3000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar con jardín",
    src: "https://images.unsplash.com/photo-1591812922579-84fa86a99e2a?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Encantadora casa con un hermoso jardín perfecto para familias",
    ubicacion: "567 Green Street, Suburbia, CA 67890",
    habitaciones: 3,
    banos: 2,
    costo: 2800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Loft moderno en el desierto",
    src: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Espacioso loft moderno con diseño contemporáneo, ubicado en el corazón del desierto",
    ubicacion: "890 Main Street, Downtown, CA 12345",
    habitaciones: 2,
    banos: 2,
    costo: 2400,
    smoke: false,
    pets: false,
  }
];

renderizarPropiedadesVenta(propiedades_venta);
