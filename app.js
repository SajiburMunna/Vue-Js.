const app =Vue.createApp({
    data() {
        return {
            title:"Hello Vue",
            age:14,
            showBooks:true
        }
    },
    methods: {
        // changeTitle(subName){
        //    this.title=`Hello Sajibur ${subName}!`
        // },
        toggleShowBooks(){
            this.showBooks=!this.showBooks

        }
    },

})

app.mount('#app')