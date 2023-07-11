codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/none_tutorial
dialogue change @e[name=Staruszka] quest2_2 @r
title @p title Gratulacje
title @p subtitle Wróć do staruszki
execute @p ~ ~ ~ tp @c -588 75 -66 
#reset planszy
execute @s ~ ~ ~ fill -593 79 -64 -580 72 -64 air

#wyłaczenie miejsca finiszu i testu finiszu
execute @p ~ ~ ~ setblock -594 65 -54 air