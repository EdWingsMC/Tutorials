```blocks
blocks.onBlockBroken(STONE, function () {
    player.say("kamień zniszczony")
})
blocks.onBlockPlaced(STONE, function () {
    player.say("kamień postawiony")
})

```
# Wykrywanie zniszczenia i postawienia bloku

## Krok 1
Kolejnymi ciekawymi bloczkami w makecode są bloczki które wykonają program <br>
gdy zostanie zniszczony okreslony blok lub postawiony.<br>
``||blocks:Gdy kamień zniszczony||``, ``||blocks:Gdy kamień umieszczono||``

## Krok 2
Kliknij żaróweczke aby zobaczyć jak stowrzyć program, który napisze <br>
na czacie wiadomość gdy zniszczymy blok kamienia.
```blocks
blocks.onBlockBroken(STONE, function () {
    player.say("kamień zniszczony")
})
```
## Krok 3
Kliknij żaróweczke aby zobaczyć jak stowrzyć program, który napisze <br>
na czacie wiadomość gdy postawimy blok kamienia.
```blocks
blocks.onBlockPlaced(STONE, function () {
    player.say("kamień postawiony")
})

```
## Krok 4
Uruchom program i przetestuj go.

