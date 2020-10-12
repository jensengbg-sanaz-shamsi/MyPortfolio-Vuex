<template>
    <section id="workExp">
        <div class="simpleModal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
                    <h5 class="modal-title" id="exampleModalLabel">Work Experience</h5>
                </div>
                <div class="modal-body">
                    <h2 class="work-title" >Pricing executive and retail management
                        <br> XEPTOR IT distribution (Infoteca AB)</h2>
                    <p>My role is reviewing & profiling of market stream
                        changes in hardware filed, analyzing and re-pricing portfolio rates to increase market shares.
                    </p>

                    <p>This role needed: <br>&#9734; Solid mathematics knowledge <br>&#9734; Market analyzing
                        <br>&#9734; Deadline oriented structural mind <br>&#9734; Strong ability to work under stress.</p>
                    <p >I needed to build strong relationship with suppliers and co-workers in all
                        around the world to deliver my tasks</p>

                    <div class="border"></div>

                    <h2 class="work-title">Junior statistics media Analyzer
                        <br> Nordicom AB</h2>
                    <p>As a data analyzer, my main tool to work was SPSS to study public related data in order to use
                        them in
                        different analyzing projects. Traditional and modern (web-based) social media were the main
                        tools to make these data.</p>
                    <div class="border"></div>   
                    <h2 class="work-title">Sales Manager
                        <br> Fanavaran Laban</h2>
                    <p>Our company was responsible to import, install, train and support dairy industry machines. As
                        a sales manager, I had to
                        Build and maintain a strong relationship with a network of machinery suppliers and customers in
                        a designated territory</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WorkExp',
    methods: {
        closeCart() {
        this.$store.commit('showWorkContent')
        }
    }

}
</script>

<style>
.work-title {
    font-size: 1em;
    color: rgb(201, 119, 119);
}
.border {
    border-bottom: dashed 2px;
    color: rgb(206, 171, 171);
}
</style>