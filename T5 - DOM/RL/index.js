import {Book, BookList, uiBookList, uiBook} from './classes.js';

function main(){
    var displayed = ""; //REFERENCIA A LA LISTA QUE SE ESTA MOSTRANDO
    var selected = ""; //REFERENCIA AL LIBRO SELECCIONADO
    document.querySelector('#aniadirLibro').style.display = "None"; //CUANDO NO HAY LISTAS SELECCIONADAS EL BOTON DE AÑADIR LIBRO DESAPARECE
    document.querySelector('#borrarLibro').style.display = "None"; //CUANDO NO HAY LIBROS SELECCIONADAS EL BOTON DE BORRAR LIBRO DESAPARECE
    var listas = [];  //ARRAY CON TODAS LAS LISTAS DE LIBROS
    

    ////////////////////////////////////////////////////////////////////////////////////////////FUNCIONALIDAD DE NUEVA LISTA
    function addList(){
        let name = window.prompt("Nombre de la lista: ");
        if(name){
            //CREAMOS LA NUEVA LISTA Y LA AÑADIMOS AL ARRAY DE TODAS LAS LISTAS
            let nueva = new uiBookList(name);
            listas.push(nueva);

            //CREAMOS EL EVENTO QUE PERMITIRA CLICAR EN LA LISTA
            nueva.listTag.addEventListener('click', (e)=>{
                //COMPROBAMOS SI YA SE ESTA MOSTRANDO OTRA LISTA
                if(displayed){
                    //SI SE ESTA MOSTRANDO ALGUNA ELIMINAMOS LOS LIBROS MOSTRADOS Y CAMBIAMOS LOS COLORES DE SU TAG LISTA
                    document.querySelector('article').innerHTML = "";
                    displayed.listTag.style.backgroundColor = "";
                    displayed.listTag.style.color = "";
                    //OCULTAMOS BOTONES Y RESTABLECEMOS SELECTED
                    document.querySelector('#aniadirLibro').style.display = "none";
                    document.querySelector('#borrarLibro').style.display = "none";
                    if(selected){
                        selected.style.transform = "scale(1.0)";
                        selected = "";
                    }
                }

                //DESPUES COMPROBAMOS SI LA QUE SE ESTA MOSTRANDO ES LA MISMA QUE LA QUE SE HA CLICADO
                if(displayed != nueva){
                    displayed = nueva;
                    //SI NO LO ES SE AÑADEN A ARTICLE TODOS LOS DIVS QUE REPRESENTAN LOS LIBROS
                    for(let i = 0 ; i < displayed.modelo.lista.length ; i++){
                        document.querySelector('article').appendChild(nueva.modelo.lista[i].tag);
                    }   
                    //CAMBIAMOS LOS COLORES DE LA TAG DE LISTA PARA MOSTRAR SU SELECCION
                    displayed.listTag.style.backgroundColor = "white";
                    displayed.listTag.style.color = "rgb(56, 56, 56)";
                    //MOSTRAMOS EL BOTON DE AÑADIR LIBRO
                    document.querySelector('#aniadirLibro').style.display = "inline-block";

                //SI ES LA MISMA QUE LA CLICADA VACIAMOS DISPLAYED Y SELECTED
                }else{
                    displayed = "";
                    if(selected){
                        selected.style.transform = "scale(1.0)";
                        selected = "";
                    }
                }
            });
        }
    }
    document.querySelector('#aniadirLista').addEventListener('click', addList);
    ////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////FUNCIONALIDAD DE AÑADIR LIBRO
    function addBook(){
        //COMPROBAMOS QUE HAYA ALGUNA LISTA SELECCIONADA
        if(displayed){
            let title = window.prompt("Titulo: ");
            let genre = window.prompt("Genero: ");
            let author = window.prompt("Autor: ");
            if(title && genre && author){
                //AÑADIMOS UN EL LIBRO NUEVO
                let l = new uiBook(title, genre, author)
                displayed.modelo.add(l);

                //AÑADE UN EVENTO DE CLICK AL LIBRO
                l.tag.addEventListener('click', (e)=>{
                    //COMPRUEBA SI HAY ALGUN LIBRO SELECCIONADO
                    if(selected){
                        //SI LO HAY RESTAURA EL TAMAÑO DEL ELEMENTO
                        selected.style.transform = "scale(1.0)";
                    }
                    if(selected != l.tag){
                        //SI EL LIBRO CLICADO NO ESTA SIENDO SELECCIONADO LO SELECCIONA
                        selected = l.tag;
                        selected.style.transform = "scale(1.2)";
                        document.querySelector('#borrarLibro').style.display = "inline-block";
                    }else{
                        //SI EL LIBRO CLICADO ES EL SELECCIONADO RESTAURA EL SELECTED
                        selected = "";
                        document.querySelector('#borrarLibro').style.display = "none";
                    }
                });
                document.querySelector('article').appendChild(l.tag);
            }else
                alert("Por favor proporcione un titulo, un genero y un autor validos");
        }else
            alert("Para añadir un libro, primero seleccione una lista");
    }
    document.querySelector('#aniadirLibro').addEventListener('click', addBook);
    ////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////FUNCIONALIDAD BORRAR LIBRO
    function removeBook(){
        //COMPROBAMOS QUE HAYA ALGUN LIBRO SELECCIONADO
        if(displayed){
            //ELIMINAMOS EL LIBRO DEL DISPLAY Y DE LA LISTA
            document.querySelector('article').removeChild(selected);
            displayed.modelo.lista.pop(displayed.modelo.lista.indexOf(selected));
            //RESTABLECEMOS EL BOTON DE BORRADO Y EL SELECTED
            selected = "";
            document.querySelector('#borrarLibro').style.display = "none";
        }else
            alert("Para borrar un libro, primero seleccionelo");
    }
    document.querySelector('#borrarLibro').addEventListener('click', removeBook);
    ////////////////////////////////////////////////////////////////////////////////////////////

}
window.addEventListener('load', main);