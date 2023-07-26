```blocks
player.onChat("dzien", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("noc", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
```
# Własne komendy

## Krok 1
W tym zadaniu stworzymy własne komendy do zmiany pory dnia

## Krok 2
Zaczynamy od stworzenia pustej komendy i nadania jej nazwy <br>
Będziemy wywoływać te komendy właśnie po jej nazwie.

```blocks
player.onChat("dzien", function () {

})
player.onChat("noc", function () {

})
```
## Krok 3
Najlepiej aby nazwy były krótkie i nie miały spacji !

## Krok 4
Do wnętrza poleceń wkłądamy bloczki programowania któe zostaną uruchomione wraz z wywołaniem komendy.
```blocks
player.onChat("dzien", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("noc", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
```
