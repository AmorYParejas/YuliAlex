const arregloHistorias = [
    {id: 1, titulo: "", img: "img/Amor.jpeg", descripcion: ""},
    {id: 2, titulo: "", img: "img/Amor2.jpeg", descripcion: ""},
    {id: 3, titulo: "", img: "img/Amor3.jpeg", descripcion: ""},
    {id: 4, titulo: "", img: "img/Amor4.jpeg", descripcion: ""},
    {id: 5, titulo: "", img: "img/Amor5.jpeg", descripcion: ""},
    {id: 6, titulo: "", img: "img/Amor6.jpeg", descripcion: ""},
    {id: 7, titulo: "", img: "img/Amor7.jpeg", descripcion: ""},
    {id: 8, titulo: "", img: "img/Amor8.jpeg", descripcion: ""},
    {id: 9, titulo: "", img: "img/Amor9.jpeg", descripcion: ""},
    {id: 10, titulo: "", img: "img/Amor10.jpeg", descripcion: ""},
    {id: 11, titulo: "", img: "img/Amor11.jpeg", descripcion: ""},
    {id: 12, titulo: "", img: "img/Amor12.jpeg", descripcion: ""}
]

function cambiarImg(numImg){
    //Recuperamos los elementos
    let titleArt = document.getElementById("titleArt");
    let textArt = document.getElementById("textArt");
    let imgArt = document.getElementById("imgArt");

    imgArt.src = "";

    //Switch
    switch(numImg){
        case 0:
                titleArt.innerHTML = arregloHistorias[0].titulo;
                textArt.innerHTML = arregloHistorias[0].descripcion;
                imgArt.src = arregloHistorias[0].img;
            break;
        case 1:
                titleArt.innerHTML = arregloHistorias[1].titulo;
                textArt.innerHTML = arregloHistorias[1].descripcion;
                imgArt.src = arregloHistorias[1].img;
            break;
        case 2:
                titleArt.innerHTML = arregloHistorias[2].titulo;
                textArt.innerHTML = arregloHistorias[2].descripcion;
                imgArt.src = arregloHistorias[2].img;
            break;
        case 3:
                titleArt.innerHTML = arregloHistorias[3].titulo;
                textArt.innerHTML = arregloHistorias[3].descripcion;
                imgArt.src = arregloHistorias[3].img;
            break;
        
        case 4:
                titleArt.innerHTML = arregloHistorias[4].titulo;
                textArt.innerHTML = arregloHistorias[4].descripcion;
                imgArt.src = arregloHistorias[4].img;
            break;
            
        case 5:
                titleArt.innerHTML = arregloHistorias[5].titulo;
                textArt.innerHTML = arregloHistorias[5].descripcion;
                imgArt.src = arregloHistorias[5].img;
            break;
        case 6:
                titleArt.innerHTML = arregloHistorias[6].titulo;
                textArt.innerHTML = arregloHistorias[6].descripcion;
                imgArt.src = arregloHistorias[6].img;
            break;
        
        case 7:
                titleArt.innerHTML = arregloHistorias[7].titulo;
                textArt.innerHTML = arregloHistorias[7].descripcion;
                imgArt.src = arregloHistorias[7].img;
            break;
            
        case 8:
                titleArt.innerHTML = arregloHistorias[8].titulo;
                textArt.innerHTML = arregloHistorias[8].descripcion;
                imgArt.src = arregloHistorias[8].img;
            break;
        case 9:
                titleArt.innerHTML = arregloHistorias[9].titulo;
                textArt.innerHTML = arregloHistorias[9].descripcion;
                imgArt.src = arregloHistorias[9].img;
            break;
        case 10:
                titleArt.innerHTML = arregloHistorias[10].titulo;
                textArt.innerHTML = arregloHistorias[10].descripcion;
                imgArt.src = arregloHistorias[10].img;
            break;
        
        case 11:
                titleArt.innerHTML = arregloHistorias[11].titulo;
                textArt.innerHTML = arregloHistorias[11].descripcion;
                imgArt.src = arregloHistorias[11].img;
            break;
            
        case 12:
                titleArt.innerHTML = arregloHistorias[12].titulo;
                textArt.innerHTML = arregloHistorias[12].descripcion;
                imgArt.src = arregloHistorias[12].img;
            break;        
    }

    const modal = document.querySelector(".modal");
    modal.classList.add("show-modal");
}

function cerrar(){
    const modal = document.querySelector(".modal");
    modal.classList.remove("show-modal");
}