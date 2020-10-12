<template>
  <main id="home">
    <header>
      <div class="main-title">
        <h1 class="heading-1">Sanaz Shamsi</h1>
        <h2 class="heading-2">junior front-end developer <br> HTML / CSS / Javascript / Vue</h2>
        <!--<h2 class="heading-2">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h2>  -->
      </div>
      <img class="picMyself" src="@/assets/img.jpg">
    </header>

    <div class=container>
      <About v-if="showTheContent" />
      <WorkExp v-if="workContent" />
      <Education v-if="educationContent" />
      <Facts v-if="factsContent" />
      <Contact v-if="contactCtx" />
      <Skills v-if="skillsCtx" />

      <button type="button" class="modalBtn" id="button" @click="showContent">
        About
      </button>

      <div class="img">
        <img src="@/assets/js.png" width="158px" height="158px">
      </div>

      <button type="button" class="modalBtn" id="button" @click="showSkills">
        Skills
      </button>

      <div class="img">
        <img src="@/assets/node.png" width="158px" height="158px">
      </div>

      
      <button type="button" class="modalBtn" id="button" @click="showWorkContent">
        Work Experience
      </button>
      
      <div class="img">
        <img src="@/assets/GIRL.png" width="158px" height="158px">
      </div>


      <button type="button" class="modalBtn" id="button" @click="showEducation">
        Education
      </button>

      <div class="img">
        <img src="@/assets/600_480057113.jpeg" width="158px" height="158px">
      </div>

      <div class="img">
        <img src="@/assets/vue.png" width="158px" height="158px">
      </div>

      <button type="button" class="modalBtn" id="button" @click="showFacts">
        Facts
      </button>

      <div class="img">
        <img src="@/assets/npm.png" width="158px" height="158px">
      </div>

      <div class="img">
        <img src="@/assets/htmlcss.png" width="158px" height="158px">
      </div>

      <button type="button" class="modalBtn" id="button" @click="showContact">
        Contact
      </button>

      <div class="img">
        <img src="@/assets/front.png" width="158px" height="158px">
      </div>

    </div>

  </main>
</template>

<script>
//import { setTimeout } from 'timers';
import About from '@/components/About';
import WorkExp from '@/components/WorkExp';
import Education from '@/components/Education';
import Facts from '@/components/Facts';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

export default {
  name: 'Home',
/* data:() => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['junior front-end developer',
      'HTML / CSS / Javascript / Vue'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArryaIndex: 0,
      charIndex: 0
    }
  },*/
  components: {
    About,
    WorkExp,
    Education,
    Facts,
    Contact,
    Skills 
  },
  methods: {
    showContent() {
      this.$store.commit('showContent')
    },
    showWorkContent() {
      this.$store.commit('showWorkContent')
    },
    showEducation() {
      this.$store.commit('showEducation')
    },
    showFacts() {
      this.$store.commit('showFacts')
    },
    showContact() {
      this.$store.commit('showContact')
    },
    showSkills() {
      this.$store.commit('showSkills')
    },
    /* typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },*/
  },
  computed: {
    showTheContent() {
      return this.$store.state.showTheContent;
    },
    workContent() {
      return this.$store.state.workContent;
    },
    educationContent() {
      return this.$store.state.educationContent;
    },
    factsContent() {
      return this.$store.state.factsContent
    },
    contactCtx() {
      return this.$store.state.contactCtx
    },
    skillsCtx() {
      return this.$store.state.skillsCtx
    }
  }
}
</script>

<style lang="scss" scoped>
  *::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

#home {
    font-family: "Lato", sans-serif;
    line-height: 1.6;
    font-weight: 400;
    font-size: 1.6rem;
    background-color: #252627;
    color: white;
    padding: 20px; 
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.heading-1 {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 4rem;
    padding: 0 100px 0 100px;
}

.heading-2{
    font-family:  sans-serif;
    font-weight: 300;
    padding: 0 100px 0 100px; 
    letter-spacing: 6px;
    word-spacing: 10px;
    font-size: 1.2rem;

    span.typed-text {
      color: #ED5565;
    }

    span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background: #fff;
      animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
      animation: none;
    }
}

.text {
    border-right: 0.1px solid white;
}

.picMyself {
    width: 250px;
    padding: 0 100px 0 100px;
}

  .img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 5px;
}

.container {
    margin: 50px 0 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.modalBtn {
    width: 10rem;
    height: 10rem;
    border: 1px solid #ED5565;
    transition: all 0.5s ease;
    color: black ;
    background-color: #ED5565;
    font-size: 1.2rem;
    font-weight: bolder;
    margin-bottom: 12px;
}

.modalBtn:hover {
    transform: rotate(-10deg) scale(1.2);
    background-color:rgba(0,0,0,0.5);
    border: 1px solid rgba(0,0,0,0.5);
    color: #ED5565;
}
@media only screen and (max-width: 600px) {
    #home {
        line-height: 1.6;
        font-size: 1rem;
    }

    header {
        display: flex;
        flex-direction: column;
    }
    .picMyself {
        display: none;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 5px;
    }
    .img , .box {
        display: none;
    }
    .heading-1 {
        font-size: 2rem;
        padding: 0 50px 0 50px;
    }
    .heading-2{
        padding: 0 50px 0 50px; 
        letter-spacing: 3px;
        word-spacing: 3px;
        font-size: .6rem;
    }
}  

</style>