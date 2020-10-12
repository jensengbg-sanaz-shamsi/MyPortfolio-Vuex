<template>
    <section id="contact">
        <div class="simpleModal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
                    <h5 class="modal-title" id="modalTitle">Sanaz Shamsi</h5>
                </div>
                <div id="modalBody" class="modal-body">
                    <p class="email"><span class="info">Email:</span> sanaz.shamsipour84@gmail.com</p>
                    <p class="tel"><span class="info">Mobile number:</span> +46725665856</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    methods: {
        closeCart() {
            this.$store.commit('showContact')
        }
    }
}
</script>

<style>
.email, .tel {
    font-family:  sans-serif;
    color: rgb(201, 199, 201);
    font-weight: 300;
    letter-spacing: 3px;
    word-spacing: 10px;
}
.info {
    color: rgb(110, 110, 110);
    font-weight: bolder;
    letter-spacing: 3px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>