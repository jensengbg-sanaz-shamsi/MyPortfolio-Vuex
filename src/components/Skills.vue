<template>
    <section id="skills">
        <div class="simpleModal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
                    <h5 class="modal-title" id="exampleModalLabel">Skills</h5>
                </div>
                <div class="modal-body">
                    <h4>HTML-CSS-JavaScript <br>Node-JS <br>NPM
                        <br>Vue & Vuex
                        <br>Familiar with SASS-Bootstrap
                        <br>Photoshop
                        <br>Graphic design basic knowledge
                    </h4>

                    <div class="page">

                        <div class="skills">
                    
                            <div class="skills__skill skill">
                    
                                <div class="skill__name">CSS</div>
                                <div class="skill__progress">
                                    <span class="skill__percentage"></span>
                                90%
                                </div>
                            </div>
                    
                            <div class="skills__skill skill">
                                <div class="skill__name">HTML</div>
                                <div class="skill__progress">
                                <span class="skill__percentage"></span>
                                90%
                                </div>
                            </div>
                        
                            <div class="skills__skill skill">
                                <div class="skill__name">Javascript</div>
                                <div class="skill__progress2">
                                <span class="skill__percentage2"></span>
                                70%
                                </div>
                            </div>

                            <div class="skills__skill skill">
                                <div class="skill__name">Vue</div>
                                <div class="skill__progress2">
                                <span class="skill__percentage2"></span>
                                70%
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    methods: {
        closeCart() {
            this.$store.commit('showSkills')
        }
    }
}
</script>

<style>
  /* PROGRESSBAR */
.skills {
    width: 80%;
    padding: 15px;
}

.skill {
    display: flex;
    height: 3.5rem;
    margin-bottom: 15px;
    background-color: #f8f8f8;
}

.skill__name {
    width: 150px;
    padding: 5px;
    background-color: #4b4b4b;;
    color: #ED5565;
    text-align: center;
}

.skill__progress {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    padding: 5px;
    text-align: right;
}

@keyframes skillprogress {
    0% { width: 0%; }
    100% { width: 90%; }
}

.skill__percentage {
    display: block;
    height: 3rem;
    background-color: #ED5565;
    animation: skillprogress 3s ease forwards;
}

.skill__progress2 {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    padding: 5px;
    text-align: right;
}
@keyframes skillprogress2 {
    0% { width: 0%; }
    100% { width: 70%; }
}

.skill__percentage2 {
    display: block;
    height: 3rem;
    background-color: #ED5565;
    animation: skillprogress2 3s ease forwards;
}
</style>