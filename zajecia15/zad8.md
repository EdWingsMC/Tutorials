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
# Zadanie 3 - Etap 2
## Krok 1
Twoim zadaniem jest zbudowanie kolejnej budowli która się ukazała.

## Krok 2
Klikając żaróweczke pojawi się podpowiedź jak dać odpowiedni blok do ekwipunku agentowi i jak wybrać aktywny slot
Aktywny slot odpowiada za to z którego miejsca w ekwipunku agenta będzie korzystać.
Czyli ten z któego agent korzysta do budowania.
```blocks
agent.setItem(WOOL, 30, 1)
agent.setItem(BROWN_WOOL, 30, 2)
agent.setSlot(1)
```
## Krok 3
Wybuduj pokazane budowle z odpowiednich materiałów<br>
Jeśli się pomylisz możesz zresetować miejsce do budowania.
