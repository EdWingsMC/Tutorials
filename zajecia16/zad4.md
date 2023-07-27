```blocks

```
# Efekty

## Krok 1
Tym razem użyjemy programowania aby nadawać sobie i zwierzętą specjalne efekty.

## Krok 2
Zaczniemy od swojej postaci. W tym celu użyjemy <br>
bloczku ``||mobs: zastosuj efekt||`` i wybierzemy "szybkosć"<br>
na 60 ze wzmocnieniem na 10
```blocks
mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 60, 10)
```
## Krok 3
Uruchamiamy i testujemy. A następnie wracamy do programowania.

## Krok 4
Przed stworzeniem kolejnego programu stwórzcie kilka różnych zwierząt do okoła siebie. <br>
I wróćcie do programowania.

## Krok 5
Możemy również te efekty dawać innym. <br>
Zmieniamy "najbliższy gracz" na "wszystkie byty" <br>
Tym razem nie tylko my otrzymamy szybkość ale też wszystko do okoła nas.
```blocks
mobs.applyEffect(SPEED, mobs.target(ALL_ENTITIES), 60, 10)
```
## Krok 6
Potestujcie program z innymi efektami :)
