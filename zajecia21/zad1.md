```blocks
while (false) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
        agent.move(FORWARD, 1)
    } else {
        agent.turn(LEFT_TURN)
    }
}
```
# Powtórka

## Krok 1
Zadanie powinno być ci dobrze znane. Musisz zaprogramować agenta w taki sposób aby po wykryciu bloku złota skręcił w lewo w przeciwnym razie szedł do przodu.
