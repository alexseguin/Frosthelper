export type ModifierCardTriggers = 'reshuffle' | 'remove' | 'miss' | 'crit';

export type ModifierCard = {
    front_image: string
    triggers: ModifierCardTriggers[]
} 