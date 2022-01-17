const Counter = {
    data(){
        return {
            nueva : "",
            notas : [],
            tamanio : 0
        }
    },

    beforeMount(){
        if(JSON.parse(localStorage.getItem('notas'))){
            this.notas = JSON.parse(localStorage.getItem('notas'));
            this.tamanio = this.notas.length;
        }
    },

    methods:{
        crear(){
            let d = new Date()
            this.notas.push({nota : this.nueva, fecha : d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear(), id : this.notas.length, hecha : false});
            this.nueva = "";
            this.tamanio++;
            localStorage.setItem('notas', JSON.stringify(this.notas));
        },
        eliminar(i){
            this.notas.splice(i, 1);
            this.tamanio--;
            localStorage.setItem('notas', JSON.stringify(this.notas));
        },
        terminar(i){
            this.notas[i].hecha = !this.notas[i].hecha;
            localStorage.setItem('notas', JSON.stringify(this.notas));
        }
    },

    computed:{
        sinTerminar(){
            let cont = 0;
            for(let i = 0 ; i < this.tamanio ; i++){
                if(this.notas[i].hecha){
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

