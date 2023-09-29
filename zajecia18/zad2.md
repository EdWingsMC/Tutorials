```blocks
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        agent.turn(RIGHT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}

```
# Zadanie 2

## Treść
Twoim zadaniem jest doprowadzić agenta do zielonego bloku.<br>

**Musisz użyć pętli !**<br>
Jeśli twój agent wykona zadanie zbyt wolno, zostanie zresetowany.<br>
Dlatego trzeba użyć pętli.
```template
while (true) {
   
}
```
