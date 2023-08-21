```blocks
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}

```
# Etap 2/2

## Krok 1
Stwórz taki sam program jak wcześniej <br>
Zacznij od pętli do której włożysz bloczek ``||logic:Jeżeli||``<br>
A następnie włożyć blok ``||agent:agent przesuń do przodu||`` i ``||agent:agent obróć w lewo||`` w odpowiednie miejsce<br>
Gdy agent napotka przed sobą blok ma się obrócić w przeciwnym razie iść do przodu

