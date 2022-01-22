const mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const Counter = {
    data(){
        return {
            titulo : "",
            descripcion : "",
            prioridad : "",
            notas : [],
            id : 0,
            modo : 'todo'
        }
    },

    beforeMount(){
        if(JSON.parse(localStorage.getItem('notas'))){
            this.notas = JSON.parse(localStorage.getItem('notas'));
            if(this.notas.length)
                this.id = this.notas[this.notas.length - 1].id + 1;
        }
    },

    methods:{
        crear(){
            let d = new Date()
            this.notas.push({titulo : this.titulo,
                            descripcion : this.descripcion,
                            prioridad : this.prioridad,
                            fecha : d.getDate() + " - " + mes[d.getMonth()] + " - " + d.getFullYear(),
                            id : this.id,
                            done : false});
            this.titulo = "";
            this.descripcion = "";
            this.id++;
            localStorage.setItem('notas', JSON.stringify(this.notas));
        },

        eliminar(id){
            //ENCONTRAMOS Y ELIMINAMOS DE LOS DATOS
            for(let i = 0 ; i < this.notas.length ; i++){
                if(this.notas[i].id == id)
                    this.notas.splice(i, 1);
            }
            //GUARDAMOS EN LOCALSTORAGE
            localStorage.setItem('notas', JSON.stringify(this.notas));
        },
        terminar(id){
            //ENCONTRAMOS Y CAMBIAMOSEL DATO DONE
            for(let i = 0 ; i < this.notas.length ; i++){
                if(this.notas[i].id == id)
                    this.notas[i].done = !this.notas[i].done;
            }
            localStorage.setItem('notas', JSON.stringify(this.notas));
        },

        prioridadStr(i){
            if(this.notas[i].prioridad == 1){
                return "Alta";
            }else if(this.notas[i].prioridad == 2){
                return "Media";
            }else{
                return "Baja";
            }
        },
        pendientes(){
            //********************************************* */
        },
        terminadas(){
            //********************************************* */
        }
    },

    computed:{
        tamanio(){
            return this.notas.length
        },
        sinTerminar(){
            let cont = 0;
            for(let i = 0 ; i < this.notas.length ; i++){
                if(this.notas[i].done){
                }else{
                    cont++;
                }
            }
            return cont;
        }
    }
}

window.onload = ()=>{
    Vue.createApp(Counter).mount('#app')    

};

