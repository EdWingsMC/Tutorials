```blocks
for (let index = 0; index < 4; index++) {
}
    if (agent.inspect(AgentInspection.Block, DOWN) == RED_MUSHROOM) {
        agent.destroy(FORWARD)
    }

```
# Zadanie 4
## Krok 1
Twoim zadaniem jest zniszczenie złych muchomorów zostawiając dobre grzyby.

## Krok 2
Policz ile kratek musi przejść agent aby dojść do końca i zaprogramuj tyle samo razy pętle.<br>
Do środka tej pętli dodaj poruszanie się do przodu oraz logike która sprawdzi jakiego grzyba widzi agent
## Krok 3
W podpowiedzi znajduje się kawałek kodu do testowania innego bloku zmodyfikuj go odpowiednio i dodaj poruszanie się.

```blocks
if (agent.inspect(AgentInspection.Block, DOWN) == TALLGRASS) {
	
}
```
