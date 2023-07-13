```blocks
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(RIGHT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
}
```
# Zadanie 1 - Etap 3
## Krok 1
Zostałeś oślepiony ale nie martw się pokieruje cię.

## Krok 2
Labirynt trochę się zmienił, musisz stworzyć pętle a wniej warunek który będzie wykrywać blok <br>
Jeśli napotka blok przed sobą musi skręcić w lewo <br>
W przeciwnym razie iść do przodu
```blocks
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD)) {     
    } else { 
    }
}
```
## Krok 3
Stwórz program i uruchom <br>
**Pamiętaj że chwilę może zająć agentowi pokonanie trasy**<br>
**Daj mu troche czasu**

