<template>
  <section id="about">
    <div class="simpleModal" id="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="closeBtn" id="btnClose" @click="closeCart">&times;</span>
          <h5 class="modal-title" id="exampleModalLabel">About Me</h5>
        </div>
          
        <div class="modal-body">
          <p>My name is Sanaz. I've been working as a Pricing executive for the
            past few years until I came to the point that I need to develope.
            I dare to start a new field and educate myselfas a skilled front-end developer.
            Day by day I've been getting to know and practice HTML, CSS and JavaScript,...
            and I am still improving and challenging myself
            with new level in these languages and tools .</p>
          <p>I created this website to present my current skills and examples of my codes,
            which could possibly help me find my first carrier as a junior front-end developer.
          </p> 
          <a href="https://www.linkedin.com/feed/">LinkedIn</a>
          <a href="https://github.com/jensengbg-sanaz-shamsi">github</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  methods: {
    closeCart() {
      this.$store.commit('showContent')
    }
  }
}
</script>

<style>
/***close button**/

.closeBtn {
    float: right;
    background: transparent;
    border: none;
    color: rgb(233, 36, 36);
    cursor: pointer;
    font-size: 2.3rem;
    padding: 3px;
    transition: all 0.4s;
}
.closeBtn:hover {
    transform: rotate(180deg);
    color:white;
} 

/***close button end***/

.simpleModal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background: rgb(14, 13, 13);
    color:black;
    text-align: center;
    margin: 3% auto;
    padding: 10px;
    width: 70%;
    text-justify: auto;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px rgba(0,0,0,0.17);
}


.modal-header {
    background-color: #252627;
    text-align: center;
    padding: 10px 0;
    font-size: 2rem;
    text-transform: uppercase; 
    color: #ED5565;
    font-family: "Lato", sans-serif;
}

.modal-body {
    color: white;
    font-family: "Lato", sans-serif;
    padding: 20px;
    text-align: start; 
    line-height: 1.8;
    font-weight: 400;
    font-size: 1.2rem;
}

</style>