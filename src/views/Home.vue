<template>
  <div class="home">
    <section class="top flex-center">
      <div class="profile-picture">
        <img
          alt="Rafael Bar - self picture"
          src="../../src/assets/rafael.jpeg"
        />
      </div>

      <p class="poppins text-white font-size-60">
        Stay <span class="text-primary">bold</span> & <br />

        Have
        <span class="word"
          >{{ word }}<span class="cursor animate-flicker"> </span
        ></span>
        <span> {{ day }}</span>
      </p>
      <div v-if="!isUnderConstraction" class="mouse"></div>
    </section>
    <div v-if="!isUnderConstraction">
      <section class="about flex-center">
        <p class="poppins text-white font-size-30">
          🍻 Cheers, I am <span class="text-primary">Rafael</span>, a frontend
          developer currently living in Tel Aviv, Israel. I have got a plenty
          expiriance in the web development industry. I am frontend oriented as
          it is my pation to move some pixels.
        </p>
      </section>

      <section class="experience flex-center">
        <h3 class="poppins text-primary font-size-40">Experience</h3>

        <div class="job text-white">
          <h4>WAYOUT, Tel Aviv - Senior Frontend Developer</h4>
          <p class="year">2019 - PRESENT</p>
          <ul>
            <li>implement</li>
            <li>Development</li>
          </ul>
        </div>

        <div class="job text-white">
          <h4>WAYOUT, Tel Aviv - Senior Frontend Developer</h4>
          <p class="year">2019 - PRESENT</p>
          <ul>
            <li>implement</li>
            <li>Development</li>
          </ul>
        </div>

        <div class="job text-white">
          <h4>WAYOUT, Tel Aviv - Senior Frontend Developer</h4>
          <p class="year">2019 - PRESENT</p>
          <ul>
            <li>implement</li>
            <li>Development</li>
          </ul>
        </div>

        <div class="job text-white">
          <h4>WAYOUT, Tel Aviv - Senior Frontend Developer</h4>
          <p class="year">2019 - PRESENT</p>
          <ul>
            <li>implement</li>
            <li>Development</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: { isUnderConstraction: Boolean },
})
export default class Home extends Vue {
  isUnderConstraction: boolean;
  word = "";
  words = [
    "A beautiful",
    "A terrific",
    "A great",
    "A wonderful",
    "A sweet",
    "An awesome",
    "A stunning",
    "A top-notch",
    "A remarkable",
    "A badass",
    "A fabulous",
    "An exceptional",
    "A cool",
    "A brilliant",
    "A stellar",
    "A delightful",
  ];
  letters = [""];
  day = "";
  replaceWordTime = 3000;
  typingLetterTime = 90;

  mounted(): void {
    this.currentDay();

    setInterval(() => {
      this.sendWord();
    }, this.replaceWordTime * this.words.length);
    this.sendWord();
  }

  sendWord(): void {
    this.words.forEach((word, i) => {
      setTimeout(() => {
        this.typeWriter(word);
      }, i * this.replaceWordTime);
    });
  }

  typeWriter(word: string): void {
    this.word = "";
    this.letters = [...word];
    this.letters.forEach((letter, i) => {
      setTimeout(() => {
        this.word += letter;
      }, i * this.typingLetterTime);
    });
  }

  currentDay(): void {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dateObj = new Date();
    const weekdayNumber = dateObj.getDay();
    this.day = days[weekdayNumber];
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .top {
    height: 100vh;
    position: relative;
  }

  section:not(.top) {
    padding: 0 10vw;
    height: 100vh;
  }

  .word {
    position: relative;
    margin-right: 8px;

    .cursor {
      right: 0;
      background-color: $app-white;
      position: absolute;
      top: 0;
      width: 5px;
      bottom: 10px;
    }
  }

  .animate-flicker {
    opacity: 1;
    animation: flickerAnimation 1s infinite;
  }

  .profile-picture {
    border-radius: 50%;
    overflow: hidden;
    width: 390px;
    height: 390px;

    img {
      width: 560px;
      height: 420px;
      margin-left: -164px;
    }
  }

  p {
    padding-left: 30px;
  }

  .mouse {
    width: 50px;
    height: 90px;
    border: 3px solid $app-primary;
    border-radius: 60px;
    position: absolute;
    bottom: 70px;

    &::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: $app-primary;
      border-radius: 50%;
      opacity: 0;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    from {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    to {
      opacity: 0;
      top: 60px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 1;
      top: 60px;
    }
  }

  @keyframes flickerAnimation {
    /* flame pulses */
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
