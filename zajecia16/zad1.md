```blocks
player.onTravelled(WALK, function () {
    blocks.place(POPPY, pos(0, 0, 0))
})
```
# Ścieżka kwiatów
## Krok 1
Pierwszym zadaniem będzie stworzenie ścieżki kwiatów.<br>
Aby to zrobić musimy użyć trigeru ( czyli bloczka który wywołuje inny kod w różnych sytuacjach)

## Krok 2
Bierzemy blok ``||player:Gdy gracz chodzenie||`` <br>
To co wsadzimy do jego wnętrza będzie się aktywowało gdy nasza postać będzie chodzić.
```blocks
player.onTravelled(WALK, function () {
	
})

```
## Krok 3
Do jego wnętrza wkładamy blok odpowiadający za stawianie bloków.<br>
``||block:umieść||`` wybieramy dowolny kwiatek i gotowe :)
```blocks
player.onTravelled(WALK, function () {
    blocks.place(POPPY, pos(0, 0, 0))
})
```
## Krok 4 
Uruchom program<br>
**Pamietaj** <br>
Kwiatek może być postawiony tylko na ziemi
