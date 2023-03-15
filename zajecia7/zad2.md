
# Zadanie 2
## Krok 1
Twoim zadaniem jest przemieszczenie agenta tak aby dotarł do zagubionego kilofa
## Krok 2
Zwróć uwage że trasa składa się z trzech takich samych odcinków <br>
Zamiast tworzyc kod 
- Idź do przodu 
- skręć w prawo
- idź do przodu
- Skręć w prawo
- Idź do przodu

Możemy użyć pętli aby powielić powtarzający się fragment
i zapisać go w postaci<br>
Powtórz 3 razy {<br>
-Idź do przodu<br>
-Skręć w prawo<br>
}<br>

## Krok 3
Policz ile kratek musi iść nasz agent aby dotrzeć do zakrętu ``||agent: Przesuń do przodu o ?||``
```blocks
agent.move(FORWARD, 1)
```
## Krok 4 
Dodaj obrót agenta w odpowiednią strone
```blocks
agent.turn(RIGHT_TURN)
```
## Krok 5 
Umieśc obydwa bloczki do pętli ``||loop:Powtórz ? razy wykonaj||``

## Krok 6 
Policz ile razy ma wykonać się pętla licząc boki trasy po której ma poruszać się agent i wpisz liczbe do pętli

## Krok 7 Program powinien wyglądać następująco 

```blocks
for (let index = 0; index < 3; index++) {
    agent.move(FORWARD, 7)
    agent.turn(LEFT_TURN)
}

```
