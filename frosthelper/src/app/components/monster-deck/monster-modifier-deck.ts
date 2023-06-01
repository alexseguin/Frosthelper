import { ModifierCard } from 'src/app/types/cards';

const M_0: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-0.png',
  triggers: [],
};

const M_PLUS_1: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-plus-1.png',
  triggers: [],
};

const M_PLUS_2: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-plus-2.png',
  triggers: [],
};

const M_MINUS_1: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-minus-1.png',
  triggers: [],
};

const M_MINUS_2: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-minus-2.png',
  triggers: [],
};

const M_MISS: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-miss.png',
  triggers: ['miss', 'reshuffle'],
};

const M_CRIT: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-crit.png',
  triggers: ['crit', 'reshuffle'],
};

export const M_CURSE: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-curse.png',
  triggers: ['remove', 'miss'],
};

export const M_BLESS: ModifierCard = {
  front_image: 'assets/monster-mod-deck/m-deck-bless.png',
  triggers: ['remove', 'crit'],
};

export const DEFAULT_MONSTER_MODIFIER_DECK: ModifierCard[] = [
  ...Array.from({ length: 6 }, () => M_0),
  ...Array.from({ length: 5 }, () => M_PLUS_1),
  ...Array.from({ length: 1 }, () => M_PLUS_2),
  ...Array.from({ length: 5 }, () => M_MINUS_1),
  ...Array.from({ length: 1 }, () => M_MINUS_2),
  ...Array.from({ length: 1 }, () => M_MISS),
  ...Array.from({ length: 1 }, () => M_CRIT),
];
