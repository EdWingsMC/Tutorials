```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(SHEEP, pos(0, 0, 0))
    }
})
```
# Pętle
## Krok 1

Aby stworzyć magiczną róźdżke która spowoduje pojawienie sie owiec postępuj zgodnie z kolejnymi krokami.

## Krok 2

Bierzemy bloczek ``||player:po uzyciu przedmiotu ||`` i ustawiamy przedmiot na **płomienna różdżka**

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
	
})
```
## Krok 3 
Następnie wkładamy do niego bloczek ``||loop:powtórz 4 razy wykonaj||``

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
```
## Krok 4
Pętla powoduje że wszystko co jest wewnątrz niej powtórzy sie podaną ilość razy. Zyskujemy dzięki temu czas i miejsce 

## Krok 5
Ostatnim krokiem będzie włożenie do środka pętli bloczek ``||mobs:zespawnuj zwięrze||`` i wybranie **owcy**

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(SHEEP, pos(0, 0, 0))
    }
})

```
## Krok 6 
Wejdź do zagrody i użyj magicznej różdżki aby zespawnować owce
