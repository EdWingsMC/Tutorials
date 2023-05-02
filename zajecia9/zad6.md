```blocks
blocks.onBlockBroken(DIRT, function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND,
    1
    )
})
```
# zadanie 6
## Krok 1

W tym zadaniu musimy stworzyc program który spowoduje danie dam diamentu gdy zniszczymy blok ziemi.

## Krok 2

W tym celu musimy wykryć zniszczenie bl;oku ziemi, zrobimy to bloczkiem ``||blocks:Gdy ziemia zniszczona||``

```blocks
blocks.onBlockBroken(DIRT, function () {
	
})
```

## Krok 3 

A do środka wsadzimy bloczek odpowiadający za przekazanie nam przedmiotu. <br>
Kliknij na żaróweczke aby zobaczyć jak powinno to wyglądać
```blocks
blocks.onBlockBroken(DIRT, function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND,
    1
    )
})
```

