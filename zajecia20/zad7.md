```blocks
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        agent.turn(RIGHT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}



```
# Etap 1

## Krok 1
W tym zadaniu będziemy chcieli zaprogramować agenta aby wyszukał blok złota przed sobą a gdy go znajdzie obrócił się w prawo.<br>
W przeciwnym razie szedł prosto

## Krok 2
Program jest prawie cały gotowy, jedyne co musisz zrobić to wstawić bloczek ``||agent: idź do przodu||`` i ``||agent: obróć w prawo ||`` <br>
W odpowiednim miejscu.

## Krok 3
**Wytłumaczenie**<br>
``||agent:Agent kontroluj||`` zwraca nam wartość bloku którego agent sprawdza w ustalonym kierunku<br>
Porównuje go do wybranego bloczka, w tym przypadku do bloku złota.<br>
Jeśli to co agent zkontroluje jest blokiem złota równanie zwróci nam PRAWDE.<br>
I wykona sie to co jest w pierwszym segmencie warunku.

## Krok 4
**Zapamiętaj jak wygląda program bo w kolejnym etapie będziesz musiał zrobić to sam**
```template
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
     
    } else {
      
    }
}


```
