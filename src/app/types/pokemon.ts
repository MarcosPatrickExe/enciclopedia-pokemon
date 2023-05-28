enum Type {
    FIRE = "FIRE", 
    WATER = "WATER",
    GRASS = "GRASS",
    ELECTRIC ="ELETRIC",
    ROCK ="ROCK",
    GROUND = "ROCK",
    STEEL = "STEEL",
    GHOST ="GHOST",
    DARK ="DARK",
    PSYCHIC ="PSYCHIC",
    DRAGON ="DRAGON",
    FAIRY ="FAIRY",
    NORMAL = "NORMAL",
    POISON ="POISON",
    BUG ="BUG",
    ICE ="ICE",
    FLYING = "FLYING",
    FIGHTING ="FIGHTING",
    EMPTY =0,
}

interface Pokemon{
    name :string;
    imgLink :string;
    types: Type[]
}

export { Type, Pokemon };