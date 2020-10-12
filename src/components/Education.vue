<template>
    <section id="education">
        <div class="simpleModal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
                    <h5 class="modal-title" id="exampleModalLabel">Education</h5>
                </div>
                <div class="modal-body">
                    <h2>Frontendutvecklare webbsäkerhet</h2>
                    <h3>JENSEN Education Yrkeshögskola</h3>
                    <div class="border"></div>   
                    <h2>Bachelor in Applied Mathematics (240credits)</h2>
                    <h3>Guilan University</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Education',
    methods: {
        closeCart() {
            this.$store.commit('showEducation')
        }
    }
}
</script>

<style>
h2 {
    font-family:  sans-serif;
    font-weight: bold;
    letter-spacing: 3px;
    word-spacing: 10px;
    font-size: 1.5rem;
}
h3 {
    font-family: sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    word-spacing: 10px;
    font-size: 1rem;
}
</style>