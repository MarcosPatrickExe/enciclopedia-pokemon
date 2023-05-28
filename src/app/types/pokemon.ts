

enum Type {
    FIRE, 
    WATER,
    GRASS,
    ELECTRIC,
    ROCK,
    GROUND,
    STEEL,
    GHOST,
    DARK,
    PSYCHIC,
    DRAGON,
    FAIRY,
    NORMAL,
    POISON,
    BUG,
    ICE,
    FLYING,
    FIGHTING,
}


interface Pokemon{
    name :string;
    imgLink :string;
    types: Type[]
}


