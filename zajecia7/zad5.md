```blocks
while (agent.detect(AgentDetection.Block, DOWN)) {
    agent.move(FORWARD, 1)
}
agent.move(RIGHT, 1)

```
# Zadanie 5
## Krok 1
W tym zadaniu musimy użyć pętli "dopóki" ponieważ nie wiemy jak wygląda trasa w zawalonym tunelu.

## Krok 2 
Nasz agent musi iść do przodu dopóki ma blok pod sobą, gdy się zatrzyma musi iść jedną kratke w prawo

## Krok 3
W tym celu użyjemy bloczku ``||agent:agent wykryj blok dół||`` włożonego do pętli ``||loops:dopóki||``

## Krok 4 
A poniżej pętli umieścimy bloczek ``||agent: przesuń w prawo o 1||``

## Krok 5
Stwórz program i go uruchom <br>
**Uwaga wykonanie programu może chwile potrwać.**<br><br>
**Jeśli coś nie zadziała zresetuj agenta i zacznij od nowa.**
