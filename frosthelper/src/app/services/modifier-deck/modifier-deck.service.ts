import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ModifierCard } from 'src/app/types/cards';

export const BACK_IMAGE = '/assets/mod-deck-back.png';

export const DEFAULT_DECK = new InjectionToken<ModifierCard[]>('Default Modifier Deck');
export const CURSE = new InjectionToken<ModifierCard>('Curse Card');
export const BLESS = new InjectionToken<ModifierCard>('Bless Card');

@Injectable()
export class ModifierDeckService {

  // Initialized from injection context
  private DEFAULT_DECK: ModifierCard[];
  private CURSE: ModifierCard;
  private BLESS: ModifierCard;

  public deck: ModifierCard[];
  private discard: ModifierCard[] = [];

  constructor(
    @Inject(DEFAULT_DECK) DEFAULT: ModifierCard[], 
    @Inject(CURSE) CURSE: ModifierCard,
    @Inject(BLESS) BLESS: ModifierCard,
  ) {
    this.deck = this.DEFAULT_DECK = DEFAULT;
    this.CURSE = CURSE;
    this.BLESS = BLESS;

    this.shuffle();
  }

  public draw(): ModifierCard {
    const drawnCard = this.deck.pop();

    if (!drawnCard) {
      this.shuffle();
      this.draw();
    }

    if (!drawnCard) {
      throw new Error('Hell froze over');
    }

    if (!drawnCard.triggers.includes('remove')) {
      this.discard.push(drawnCard);
    }

    // If special card, trigger special effect
    if (drawnCard.triggers.includes('reshuffle')) {
      this.shuffle();
    }

    return drawnCard;
  }

  private shuffle(addDiscard = true) {
    const discard: ModifierCard[] =  !addDiscard  ? [...this.discard] : [];
    const shuffledDeck = [...this.deck, ...discard].sort(() => Math.random() - 0.5);
    this.deck = shuffledDeck;
  }

  public addCurse() {
    this.deck.push(this.CURSE);
    this.shuffle(false);
  }

  public addBless() {
    this.deck.push(this.BLESS);
    this.shuffle(false);
  }

  reset() {
    this.deck = this.DEFAULT_DECK;
  }
}
