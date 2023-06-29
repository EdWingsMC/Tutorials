```blocks
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(RIGHT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}
```
# Zadanie 1 - Etap 2
## Krok 1
Naszym zadaniem jest pokonanie tego samego labiryntu ale przy użyciu innej pętli oraz bloku warunku

## Krok 2
Stwórz nieskończoną pętle w której umieścisz blok warunku który będzie wykrywać czy przed agentem jest jakiś blok

## Krok 3
Jeśli przed agentem jest blok ma obrócić się w prawo<br>
w przeciwnym razie ma iść do przodu
