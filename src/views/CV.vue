<template>
<div>
  <div v-if="!isGameFinished" class="board-game flex-space-between">
        <div v-for="card in cards" :key="card.id" class="card flex-center text-white">
          <div :class="{'card-inner-flip': card.isFliped, 'prevent-click': card.isMatched || card.isFliping || card.isUp, 'flashit': card.isError}" 
                @click="flipCard(card); card.toggleCardState(card.state)" 
                class="card-inner">
            <div class="card-front flex-center text-dark font-size-18">
              <img
                  alt="card back - mexican skull - click to flip"
                  src="../../src/assets/skull.png"
                  class="skull"
                />
            </div>
            <div class="card-back flex-center">
              <img v-if="card.imageId"
                  alt="card front - blue pony - click to flip"
                  :src="card.imageUrl"
                  class="front-image"
                />
            </div>
          </div>
        </div>
  </div>
   <div v-else>DARE TO DOWNLOAD</div>
  </div>
</template>

<script lang="ts">
import { CardState } from "@/enums/cardState";
import { Vue } from "vue-class-component";
import Card from '../models/Card';


export default class Cv extends Vue {
  cards: Card[] = [
      new Card({id: '1', isFliped: true, isMatched: false, imageId: 'pony1.png', state: CardState.FACE_UP}),
      new Card({id: '2', isFliped: true, isMatched: false, imageId: 'skull.png', state: CardState.FACE_UP}),
      new Card({id: '3', isFliped: true, isMatched: false, imageId: 'pony1.png', state: CardState.FACE_UP}),
      new Card({id: '4', isFliped: true, isMatched: false, imageId: 'skull.png', state: CardState.FACE_UP}),
      new Card({id: '5', isFliped: true, isMatched: false, imageId: 'pony1.png', state: CardState.FACE_UP}),
      new Card({id: '6', isFliped: true, isMatched: false, imageId: 'skull.png', state: CardState.FACE_UP}),
      new Card({id: '7', isFliped: true, isMatched: false, imageId: 'pony1.png', state: CardState.FACE_UP}),
      new Card({id: '8', isFliped: true, isMatched: false, imageId: 'skull.png', state: CardState.FACE_UP})
  ];

  created() {
    setTimeout(() => this.cards.map(card => (card.toggleCardState(card.state as CardState), card.flipCard(), card.isError = false)),500)
  }

  get isGameFinished() {
    return !this.cards.find(card => !card.isMatched) ? setTimeout(() => true, 2000) : false;
  }

  flipCard(card: Card): void {
    card.flipCard();
    const flipedCards = this.cards.filter(card => card.isFliped && !card.isMatched);

    if (this.isflipedCardsEvenNotZero(flipedCards)) {
        this.setBoard(flipedCards, this.isCardsMatched(flipedCards));
    }
  }

  isflipedCardsEvenNotZero(flipedCards: Card[]) {
    return flipedCards.length % 2 === 0 && flipedCards.length != 0
  }

  isCardsMatched(potentialCardsMatch: Card[]): boolean {
    return potentialCardsMatch[0].imageId === potentialCardsMatch[1].imageId
  }

  setBoard(flipedCards: Card[], isMatch: boolean): void {
      const i = this.cards.findIndex(card => card.id === flipedCards[0].id);
      const j = this.cards.findIndex(card => card.id === flipedCards[1].id);

      if(i > -1 && j > -1) {
        isMatch ? 
        (this.cards[i].isMatched = true, this.cards[j].isMatched = true) : 
        setTimeout(() => {
          this.cards[i].isFliped = false; 
          this.cards[i].toggleCardState(this.cards[i].state as CardState);
          this.cards[j].isFliped = false; 
          this.cards[j].toggleCardState(this.cards[j].state as CardState);
        }, 1000);
        setTimeout(() => {
          this.cards[i].isError = true;
          this.cards[j].isError = true;
        }, 300);
        setTimeout(() => {
          this.cards[i].isError = false;
          this.cards[j].isError = false;
        }, 400);
      }
  }
};
</script>

<style lang="scss" scoped>
.board-game {
  width: 700px;
  height: 500px;
  flex-wrap: wrap;

  .card {
    width: 21%;
    height: 214px;
    perspective: 1000px;

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
      transform-style: preserve-3d;
      border-radius: 4px;
      background: linear-gradient(to bottom, darken($app-dark, 10%) 0%,$app-dark 40%);
      cursor: pointer;
      border: 2px solid $app-white;

      &.prevent-click {
        cursor: none;
        pointer-events: none;
      }

      &.error {
        border: 1px solid $app-danger;
        background: $app-danger;
      }

      .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .card-back {
        transform: rotateY(180deg);

        img {
          width: 100%;
        }
      }
    }

    .card-inner-flip {
      transform: rotateY(180deg);
    }
  
    .skull {
      width: 140px;
    }
  }
}

@-webkit-keyframes flash {
  0% { opacity: 1; } 
  50% { opacity: .1; } 
  100% { opacity: 1; }
}
@keyframes flash {
  0% { opacity: 1; } 
  50% { opacity: .1; } 
  100% { opacity: 1; }
}
</style>