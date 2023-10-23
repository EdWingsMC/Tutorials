```blocks
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK || agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}
```
# Zadanie OR

## Krok 1
Wykorzystaj wiedze odnośnie OR aby rozwiązać to zadanie. <br>
Agent musi skręcić w lewo gdy wykryje blok **złota lub diamentu** <br>
w przeciwnym razie ma iść do przodu
```blocks
while (true) {
    if (false||false) {
    
    } else {
        
    }
}
```
## Krok 2
Zadanie posiada limit czasowy jeśli będziesz próbować oszukiwać, zadanie zostanie zresetowane.
