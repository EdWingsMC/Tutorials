```blocks
Logika.Add_red()
Logika.Add_yellow()
Logika.test()
for (let index = 0; index < 7; index++) {
    if (agent.inspect(AgentInspection.Block, FORWARD) == POPPY) {
    	
    }
    if (agent.inspect(AgentInspection.Block, FORWARD) == YELLOW_FLOWER) {
    	
    }
    agent.move(FORWARD, 1)
}
```
# Warunek
## Krok 1
Twoim zadaniem jest stworzenie programu który automatycznie zliczy jakie kolory kwiatów są przed agentem.<br>
Agent będzie szedł do przodu a następnie porównywał czy to co jest przed nim to dany kwiatek.

## Krok 2
Masz podany kawałek kodu. Twoim zadaniem jest dokończenie go. <br>
Stwórz odpowiednie warunki w którym **porównasz** dany kwiatek z tym co widzi agent przed sobą.<br>
Użyj do tego bloczku porównania z zakładaki logika a następnie włóż do tego ``||agent:agent kontroluj blok do przodu||`` i ``||blocks: blok||``<br>
Powinno to wyglądać tak <br>
agent kontroluj blok = czerwony kwiatek<br>
agent kontroluj blok = żółty kwiatek<br>
Następnie dodaj do każdego warunku zwiększenie ilości danego koloru aby agent mógł je policzyć.

```template

for (let index = 0; index < 7; index++) {
    if (true) {
    	
    }
    if (true) {
    	
    }
    agent.move(FORWARD, 1)
}
Logika.test()
```
