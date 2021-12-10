import {Book, BookList, uiBookList, uiBook} from './classes.js';

function main(){
    var displayed = ""; //REFERENCIA A LA LISTA QUE SE ESTA MOSTRANDO
    var selected = ""; //REFERENCIA AL LIBRO SELECCIONADO
    document.querySelector('#aniadirLibro').style.display = "None"; //CUANDO NO HAY LISTAS SELECCIONADAS EL BOTON DE AÑADIR LIBRO DESAPARECE
    document.querySelector('#borrarLibro').style.display = "None"; //CUANDO NO HAY LIBROS SELECCIONADAS EL BOTON DE BORRAR LIBRO DESAPARECE
    
    /////////////////////////////////////////////////////////////////////CARGA INICIAL
    if(localStorage.getItem('listas')){
        var parsed = JSON.parse(localStorage.getItem('listas'));
        var listasui = [];
        var listas = [];
        for(let i = 0 ; i < parsed.length ; i++){
            let model = new BookList();
            model.nuevo(parsed[i])
            listas.push(model);
            let view = new uiBookList(listas[i]);
            initLista(view);
            listasui.push(view);
        }
    }else{
        var listas = [];
        var listasui = [];
    }
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////GUARDADO DE LAS LISTAS ANTES DE CERRAR LA PESTAÑA
    window.addEventListener('beforeunload', (e)=>{
        if(listas.length > 0){  
            localStorage.setItem('listas', JSON.stringify(listas));
        }
    });
    ////////////////////////////////////////////////////////////////////
    

    ////////////////////////////////////////////////////////////////////////////////////////////EVENTO DE NUEVA LISTA
    function addList(){
        let name = window.prompt("Nombre de la lista: ");
        if(name){
            //CREAMOS LA NUEVA LISTA Y SU VISTA Y LAS GUARDAMOS
            let nueva = new BookList(name);
            listas.push(nueva);
            let nuevaui = new uiBookList(nueva)
            listasui.push(nuevaui);

            //DOTAMOS DE EVENTO A LA LISTA
            initLista(nuevaui);
        }
    }
    document.querySelector('#aniadirLista').addEventListener('click', addList);
    ////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////EVENTO DE AÑADIR LIBRO
    function addBook(){
        //COMPROBAMOS QUE HAYA ALGUNA LISTA SELECCIONADA
        if(displayed){
            let title = window.prompt("Titulo: ");
            let genre = window.prompt("Genero: ");
            let author = window.prompt("Autor: ");
            if(title && genre && author){
                //CREAMOS EL LIBRO NUEVO Y SU VISTA Y LOS GUARDAMOS
                let model = new Book(title, genre, author)
                displayed.modelo.add(model)
                let view = new uiBook(model)
                displayed.tag_list.push(view);
                //DOTAMOS DE EVENTO AL LIBRO
                initLibro(view);
                //LO MOSTRAMOS
                document.querySelector('article').appendChild(view.tag);
            }else
                alert("Por favor proporcione un titulo, un genero y un autor validos");
        }else
            alert("Para añadir un libro, primero seleccione una lista");
    }
    document.querySelector('#aniadirLibro').addEventListener('click', addBook);
    ////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////EVENTO DE BORRAR LIBRO
    function removeBook(){
        //COMPROBAMOS QUE HAYA ALGUN LIBRO SELECCIONADO
        if(displayed){
            //ELIMINAMOS EL LIBRO DEL DISPLAY
            document.querySelector('article').removeChild(selected);
            //BORRAMOS EL LIBRO Y SU TAG DE LAS LISTAS
            displayed.modelo.lista.pop(displayed.modelo.lista.indexOf(selected));
            displayed.tag_list.pop(displayed.tag_list.indexOf(selected));
            //ESCONDEMOS EL BOTON DE BORRADO Y EL SELECTED
            selected = "";
            document.querySelector('#borrarLibro').style.display = "none";
        }else
            alert("Para borrar un libro, primero seleccionelo");
    }
    document.querySelector('#borrarLibro').addEventListener('click', removeBook);
    ////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////FUNCION QUE INICIALIZA LAS VISTAS DE LAS LISTAS
    function initLista(ui){
        //GUARDAMOS EN LA VISTA UNA TAG POR CADA LIBRO DEL MODELO (SOLO AL CARGAR)
        for(let i = 0 ; i < ui.modelo.lista.length ; i++){
            let l = new uiBook(ui.modelo.lista[i])
            initLibro(l);
            ui.tag_list.push(l);
        }

        //DAMOS EVENTO DE CLICK A LA TAG DE LA LISTA
        ui.tag.addEventListener('click', (e)=>{
            //COMPROBAMOS SI YA SE ESTA MOSTRANDO OTRA LISTA
            if(displayed){
                //SI SE ESTA MOSTRANDO ALGUNA ELIMINAMOS LOS LIBROS MOSTRADOS Y CAMBIAMOS LOS COLORES DE SU TAG LISTA
                document.querySelector('article').innerHTML = "";
                displayed.tag.style.backgroundColor = "";
                displayed.tag.style.color = "";
                //OCULTAMOS BOTONES Y RESTABLECEMOS SELECTED
                document.querySelector('#aniadirLibro').style.display = "none";
                document.querySelector('#borrarLibro').style.display = "none";
                if(selected){
                    selected.style.transform = "scale(1.0)";
                    selected = "";
                }
            }

            //DESPUES COMPROBAMOS SI LA QUE SE ESTA MOSTRANDO ES LA MISMA QUE LA QUE SE HA CLICADO
            if(displayed != ui){
                displayed = ui;
                //SI NO LO ES SE AÑADEN A ARTICLE TODOS LOS DIVS QUE REPRESENTAN LOS LIBROS
                for(let i = 0 ; i < displayed.tag_list.length ; i++){
                    document.querySelector('article').appendChild(ui.tag_list[i].tag);
                }   
                //CAMBIAMOS LOS COLORES DE LA TAG DE LISTA PARA MOSTRAR SU SELECCION
                displayed.tag.style.backgroundColor = "white";
                displayed.tag.style.color = "rgb(56, 56, 56)";
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
    /////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////FUNCION QUE INICIALIZA LA VISTA DE CADA LIBRO
    function initLibro(ui){
        //DAMOS EVENTO DE CLICK AL DIV DEL LIBRO
        ui.tag.addEventListener('click', (e)=>{
            //COMPRUEBA SI HAY ALGUN LIBRO SELECCIONADO
            if(selected){
                //SI LO HAY RESTAURA EL TAMAÑO DEL ELEMENTO
                selected.style.transform = "scale(1.0)";
            }
            if(selected != ui.tag){
                //SI EL LIBRO CLICADO NO ESTA SIENDO SELECCIONADO LO SELECCIONA
                selected = ui.tag;
                selected.style.transform = "scale(1.2)";
                document.querySelector('#borrarLibro').style.display = "inline-block";
            }else{
                //SI EL LIBRO CLICADO ES EL SELECCIONADO RESTAURA EL SELECTED
                selected = "";
                document.querySelector('#borrarLibro').style.display = "none";
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    
}
window.addEventListener('load', main);