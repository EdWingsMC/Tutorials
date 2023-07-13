```blocks
for (let index = 0; index < 4; index++) {
}
Mapa15.MoveAgentForOneToForward()
Mapa15.MoveAgentForOneToBack()
Mapa15.MoveAgentForOneToDown()
Mapa15.MoveAgentForOneToUp()
Mapa15.MoveAgentForOneToLeft()
Mapa15.MoveAgentForOneToRight()
agent.place(FORWARD)
agent.setItem(WOOL, 30, 1)
agent.setItem(BROWN_WOOL, 30, 2)
agent.setSlot(1)
```
# Zadanie 3 - Etap 1
## Krok 1
Twoim zadaniem jest zbudowanie takich samych budowli jakie zostały pokazane przez władce lasu.

## Krok 2
Klikając żaróweczke pojawi się podpowiedź jak dać odpowiedni blok do ekwipunku agentowi i jak wybrać aktywny slot <br>
Aktywny slot odpowiada za to z którego miejsca w ekwipunku agenta będzie korzystać. <br>
Czyli ten z któego agent korzysta do budowania.
```blocks
agent.setItem(WOOL, 30, 1)
agent.setItem(BROWN_WOOL, 30, 2)
agent.setSlot(1)
```
## Krok 3
Wybuduj pokazane budowle z odpowiednich materiałów<br>
Jeśli się pomylisz możesz zresetować miejsce do budowania.
