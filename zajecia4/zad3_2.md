```blocks
AgentMove.AgentMove(DOWN)
AgentMove.AgentGetItem()
AgentMove.AgentPlace(FORWARD)
HarvestTest.SeedsTest()
```
## Krok 1 
Aby agent mógł posadzić nasionka musimy mu je dostarczyć zrobimy to za pomocą ``||HarvestTest:Daj nasiona agentowi||``

## Krok 2 
Kiedy agent ma już nasionka w ekwipunku to używając ``||agent:Umieść dół||`` posadź je
**Nie zapomnij przesuwać agenta do przodu**
## Krok 3 
Jeśli już posadziłeś wszędzie zboże to użyj bloczka ``||HarvestTest:zbadaj czy zasadzone||``
