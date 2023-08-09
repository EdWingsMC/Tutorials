```blocks
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}

```
# Etap 1/3

## Krok 1
Program jest prawie gotowy jedyne co musisz zrobić to <br>
Włożyć blok ``||agent:agent przesuń do przodu||`` i ``||agent:agent obróć w lewo||`` w odpowiednie miejsce<br>
Gdy agent napotka przed sobą blok ma się obrócić w przeciwnym razie iść do przodu
```template
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        
    } else {
     
    }
}

```
