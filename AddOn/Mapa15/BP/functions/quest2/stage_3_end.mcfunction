codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/none_tutorial
dialogue change @e[name=Staruszka] quest4_2 @r
title @p title Gratulacje
title @p subtitle Wróć do staruszki
execute @p ~ ~ ~ tp @c -587 68 -58
#wyłaczenie miejsca finiszu i testu finiszu
execute @p ~ ~ ~ setblock -594 65 -63 air

#reset planszy
execute @s ~ ~ ~ fill -593 79 -64 -579 72 -64 air

#otwarcie przejscia
execute @s ~ ~ ~ setblock -582 68 -41 air
execute @s ~ ~ ~ setblock -582 69 -41 air