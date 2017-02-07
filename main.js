Vue.component('modal', {

    props:['title', 'body'],

    data(){
        return {
            isVisible: true
        };
    },

    template: `
            <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloribus labore reprehenderit dolorem exercitationem.
                    </p>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>

            `
});


new Vue({

    el:'#root',

    data: {
        showModal: false
    }


});