import { CardState } from "@/enums/cardState";

export default class Card {
    id?: string;
    isFliped?: boolean;
    isMatched?: boolean;
    imageId?: string;
    state: CardState;
    isError?: boolean;

    constructor(options: {
        id?: string;
        isFliped?: boolean;
        isMatched?: boolean
        imageId?: string;
        state?: CardState;
        isError?: boolean;

    } = {}) {
        this.id = options.id || '';
        this.isFliped = options.isFliped || false;
        this.isMatched = options.isMatched || false;
        this.imageId = options.imageId || '';
        this.state = options.state || CardState.FACE_UP;
        this.isError = options.isError || true;
    }

    flipCard(): void {
        this.isFliped = !this.isFliped;
    }

    toggleCardState(state: CardState) {
        setTimeout(() => {
          this.state = state === CardState.FACE_DOWN ? CardState.FACE_UP : CardState.FACE_DOWN;
        }, 300);
        this.state = CardState.FLIPING; 
    }

    get isFliping(): boolean {
        return this.state === CardState.FLIPING;
    }

    get isUp(): boolean {
        return this.state === CardState.FACE_UP;
    }

    get imageUrl(): any {
        const images = require.context('../../src/assets/', false, /\.png$/)
        return images('./' + this.imageId)
    }

}