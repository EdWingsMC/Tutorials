```blocks
for (let index = 0; index < 4; index++) {
}
    if (agent.inspect(AgentInspection.Block, DOWN) == RED_MUSHROOM) {
        agent.destroy(FORWARD)
    }else{
agent.move(FORWARD, 1)
}

```
# Zadanie 4
## Krok 1
Twoim zadaniem jest zniszczenie złych muchomorów. Dobre brązowe grzyby nie mogą zostać zniszczone.

## Krok 2
Policz ile kratek musi przejść agent aby dojść do końca i zaprogramuj tyle razy pętle.<br>
Do środka tej pętli dodaj poruszanie się do przodu oraz logike która sprawdzi jakiego grzyba widzi agent
## Krok 3
W podpowiedzi znajduje się kawałek kodu do testowania innego bloku zmodyfikuj go odpowiednio i dodaj poruszanie się.<br>
Powodzenia!

```blocks
if (agent.inspect(AgentInspection.Block, DOWN) == TALLGRASS) {
	
}
```
