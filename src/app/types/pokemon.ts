enum Type {
    FIRE = "Fire", 
    WATER = "Water",
    GRASS = "Grass",
    ELECTRIC ="Eletric",
    ROCK ="Rock",
    GROUND = "Ground",
    STEEL = "Steel",
    GHOST ="Ghost",
    DARK ="Dark",
    PSYCHIC ="Psychic",
    DRAGON ="Dragon",
    FAIRY ="Fairy",
    NORMAL = "Normal",
    POISON ="Poison",
    BUG ="Bug",
    ICE ="Ice",
    FLYING = "Flying",
    FIGHTING ="Fighting",
    EMPTY = 0,
}

interface Pokemon{
    name :string
    imgLink :string
    types: Type[]
}

export { Type, Pokemon };