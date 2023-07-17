import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ModifierCard } from 'src/app/types/cards';

export const DEFAULT_CARD: ModifierCard = {
  image: '/assets/mod-deck-back.png',
  triggers: [],
};
export type DrawMode = 'normal' | 'advantage' | 'disadvantage';

export const DEFAULT_DECK = new InjectionToken<ModifierCard[]>(
  'Default Modifier Deck'
);
export const CURSE = new InjectionToken<ModifierCard>('Curse Card');
export const BLESS = new InjectionToken<ModifierCard>('Bless Card');

@Injectable()
export class ModifierDeckService {
  // Initialized from injection context
  private DEFAULT_DECK: ModifierCard[];
  private CURSE: ModifierCard;
  private BLESS: ModifierCard;

  // Draw state
  private drawMode: DrawMode = 'normal';
  private currentCards = [DEFAULT_CARD];

  // Deck state
  private deck: ModifierCard[];
  private discard: ModifierCard[] = [];
  private blessings = 0;
  private curses = 0;

  constructor(
    @Inject(DEFAULT_DECK) DEFAULT: ModifierCard[],
    @Inject(CURSE) CURSE: ModifierCard,
    @Inject(BLESS) BLESS: ModifierCard
  ) {
    this.DEFAULT_DECK = DEFAULT;
    this.deck = [...this.DEFAULT_DECK];
    this.CURSE = CURSE;
    this.BLESS = BLESS;

    this.shuffle();
  }

  private drawCardFromDeck(): ModifierCard {
    const card = this.deck.pop();

    if (!card) {
      this.shuffle();
      return this.drawCardFromDeck();
    }

    if (!card) {
      throw new Error('Hell froze over');
    }

    if (!card.triggers.includes('remove')) {
      this.discard.push(card);
    }

    return card;
  }

  public draw(): void {
    this.currentCards = [DEFAULT_CARD];

    let cardsDrawn: ModifierCard[];

    // switch on draw mode
    switch (this.drawMode) {
      case 'normal':
        cardsDrawn = [this.drawCardFromDeck()];
        break;
      case 'advantage':
        cardsDrawn = [this.drawCardFromDeck()];
        cardsDrawn.push(this.drawCardFromDeck());
        break;
      case 'disadvantage':
        cardsDrawn = [this.drawCardFromDeck()];
        cardsDrawn.push(this.drawCardFromDeck());
        break;
    }

    // Check for reshuffle at the end
    if (cardsDrawn.some((card) => card.triggers.includes('reshuffle'))) {
      this.shuffle();
    }

    this.drawMode = 'normal';
    this.currentCards = [...cardsDrawn];
  }

  private shuffle(addDiscardBackIntoDeck = true) {
    let discard: ModifierCard[] = [];
    if (addDiscardBackIntoDeck) {
      // Set the discard aside to add it back to the deck, then clear it
      discard = [...this.discard];
      this.discard = [];
    }
    const shuffledDeck = [...this.deck, ...discard].sort(
      () => Math.random() - 0.5
    );
    this.deck = [...shuffledDeck];
  }

  public addCurse() {
    this.deck.push(this.CURSE);
    this.curses++;
    this.shuffle(false);
  }

  public addBless() {
    this.deck.push(this.BLESS);
    this.blessings++;
    this.shuffle(false);
  }

  public removeCurse() {
    if (this.numberOfCurses === 0) {
      return;
    }

    const index = this.deck.findIndex(
      (card) => card.image === this.CURSE.image
    );
    if (index > -1) {
      this.deck.splice(index, 1);
      this.curses--;
      this.shuffle(false);
    }
  }

  public removeBless() {
    if (this.numberOfBlessings === 0) {
      return;
    }

    const index = this.deck.findIndex(
      (card) => card.image === this.BLESS.image
    );
    if (index > -1) {
      this.deck.splice(index, 1);
      this.blessings--;
      this.shuffle(false);
    }
  }

  public toggleAdvantage() {
    if (this.drawMode === 'advantage') {
      this.drawMode = 'normal';
    } else {
      this.drawMode = 'advantage';
    }
  }

  public toggleDisadvantage() {
    if (this.drawMode === 'disadvantage') {
      this.drawMode = 'normal';
    } else {
      this.drawMode = 'disadvantage';
    }
  }

  get cards(): ModifierCard[] {
    return this.currentCards;
  }

  get discarded(): ModifierCard[] {
    return this.discard;
  }

  get currentDrawMode(): DrawMode {
    return this.drawMode;
  }

  get numberOfBlessings(): number {
    return this.blessings;
  }

  get numberOfCurses(): number {
    return this.curses;
  }

  get deckSize(): number {
    return this.deck.length;
  }

  reset() {
    this.deck = this.DEFAULT_DECK;
  }

  stateDebug() {
    return JSON.stringify({
      deck: this.deck,
      discard: this.discard,
    });
  }
}
