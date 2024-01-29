const arregloHistorias = [
    {id: 1, titulo: "historia 1", img: "img/Amor.png", descripcion: "Nuestra Gran Historia."},
    {id: 2, titulo: "historia 2", img: "img/Amor2.png", descripcion: "Nuestra Gran Historia."},
    {id: 3, titulo: "historia 3", img: "img/Amor3.png", descripcion: "Nuestra Gran Historia."},
    {id: 4, titulo: "historia 4", img: "img/Amor4.png", descripcion: "Nuestra Gran Historia."},
    {id: 5, titulo: "historia 5", img: "img/Amor5.png", descripcion: "Nuestra Gran Historia."},
    {id: 6, titulo: "historia 6", img: "img/Amor6.png", descripcion: "Nuestra Gran Historia."},
    {id: 7, titulo: "historia 7", img: "img/Amor7.png", descripcion: "Nuestra Gran Historia."},
    {id: 8, titulo: "historia 8", img: "img/Amor8.png", descripcion: "Nuestra Gran Historia."},
    {id: 9, titulo: "historia 9", img: "img/Amor9.png", descripcion: "Nuestra Gran Historia."},
    {id: 10, titulo: "historia 10", img: "img/Amor10.png", descripcion: "Nuestra Gran Historia."},
    {id: 11, titulo: "historia 11", img: "img/Amo11.png", descripcion: "Nuestra Gran Historia."},
    {id: 12, titulo: "historia 12", img: "img/Amor12.png", descripcion: "Nuestra Gran Historia."}
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