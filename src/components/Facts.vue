<template>
    <section id="facts">
        <div class="simpleModal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
                    <h5 class="modal-title" id="exampleModalLabel">Some Facts about Me</h5>
                </div>
                <div class="modal-body">
                    <p>&#9786; Have been working as a pricing analyzer for 5 years!</p>
                    <p>&#9786; Working hard to become a good front-end developer</p>
                    <p>&#9786; Love to travel</p>
                    <p>&#9786; Love my children and my dogs</p>
                    <p>&#9786; My Favourite tv show: Friends</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Facts',
    methods: {
        closeCart() {
            this.$store.commit('showFacts')
        }
    }
}
</script>

<style>

</style>