```blocks
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}
```
# Etap 3

## Krok 1
Nic nie stoi na przeszkodzie aby testować kilka bloków i wykonaywać różne zadania zależnie od wykrytego bloku.

## Krok 2
W tym zadaniu rozbudujemy nasz program aby agent nie tylko skręcał w prawo gdy napotka blok złota ale też skręcał w lewo gdy napotka blok diamnetu.

## Krok 3
Dokończ tworzenie drugiego warunku aby wykrywał blok diamntu
```template
while (true) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        agent.turn(RIGHT_TURN)
    } else if (true) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}

```
