```blocks
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == LAPIS_LAZULI_BLOCK && agent.inspect(AgentInspection.Block, DOWN) == GOLD_BLOCK) {
        agent.turn(RIGHT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}
```
# Zadanie AND

## Krok 1
Wykorzystaj wiedze odnośnie AND aby rozwiązać to zadanie. <br>
Agent musi skręcić w prawo gdy wykryje "blok złota *pod sobą* i jednocześnie blok lapizu *przed sobą*" <br>
w przeciwnym razie ma iść do przodu.
```blocks
while (true) {
    if (false && false) {
    
    } else {
        
    }
}
```
## Krok 2
Warunek który stworzysz będzie długi ale nie martw się taki ma być.<br>
Pamiętaj o zmianie kierunku wykrywania przez agenta!
