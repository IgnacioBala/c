/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Eléctrica Fender",
        imagen: "https://i.pinimg.com/564x/91/68/22/9168221c0a7d2b00d22c18f8d38dc487.jpg",
        descripcion: "Stratocaster full black",
    },
    {
        id: 2,
        nombre: " Eléctrica sx",
        imagen: "https://i.pinimg.com/564x/0d/0b/8c/0d0b8cf6d6d5c3506e43783d188d9a96.jpg",
        descripcion: "Les Paul full black",
    },
    {
        id: 3,
        nombre: "Eléctrica gibson",
        imagen: "https://i.pinimg.com/564x/29/c1/da/29c1dac0bd265b07f3f73e7f1fc58a00.jpg",
        descripcion: "Sg full red",
    },
    {
        id: 4,
        nombre: "Eléctrica Ibanez",
        imagen: "https://i.pinimg.com/564x/e8/8d/fb/e88dfbe1cfdfdb5d311bfd45112329fc.jpg",
        descripcion: "Black and Red",
    },
    {
        id: 5,
        nombre: "Eléctrica gibson",
        imagen: "https://i.pinimg.com/564x/4d/a9/1c/4da91cd450a4d227afc55dc8df8dc40b.jpg",
        descripcion: "full cream",
    }
    
    ,{
        id: 6,
        nombre: "Bajo Yamaha",
        imagen: "https://i.pinimg.com/564x/1f/27/fa/1f27fa0233386dd6d47caf1e5b30dd4c.jpg",
        descripcion: "Black and White",
    }
    ,{
        id: 7,
        nombre: "Bajo Yamaha",
        imagen: "https://i.pinimg.com/564x/3d/16/c9/3d16c943a5cca4abdb72f4dbd7cab075.jpg",
        descripcion: "Bajo  jazz",
    }
    

    
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")




/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += ` <article class="card">
    <img src="${carta.imagen}" alt="Imagen del proyecto">
    <div class="info">
      <h2>${carta.nombre}</h2>
      <p>${carta.descripcion}</p>
    </div>
</article>`
    
)



