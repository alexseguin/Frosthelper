export type ModifierCardTriggers = 'reshuffle' | 'remove' | 'miss' | 'crit';

export type ModifierCard = {
    image: string
    triggers: ModifierCardTriggers[]
} 