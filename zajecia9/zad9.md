```blocks
mobs.spawn(ARROW_PROJECTILE_MOB, world(92, 105, 364))
```
# Zadanie 9
## Krok 1

Aby wyczarować strzałe użyjemy bloczka ``||mobs:zespawnuj||`` który tworzy obiekty <br>
a do jego wnętrza włożymy ``||mobs:pocisk:strzała||`` 
## Krok 2
Na koniec ustawiamy odpowiednie koordynaty, pamiętamy że są to koordynaty bezwzględne <br>
czyli musimy użyć bloczka ``||position:Świat()||`` <br>
A koordynaty to (92 105 364)

```blocks
mobs.spawn(ARROW_PROJECTILE_MOB, world(92, 105, 364))
```
