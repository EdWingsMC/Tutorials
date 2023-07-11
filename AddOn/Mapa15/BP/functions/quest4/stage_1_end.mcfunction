codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/none_tutorial
dialogue change @e[name=Grzybiarz] quest2_4 @r
title @p title Gratulacje
title @p actionbar Udało się
tp @c -575 69 -13 facing -575 69 -11
execute @s ~ ~ ~ setblock -572 66 -13 air
execute @s ~ ~ ~ setblock -572 66 -7 air
execute @s ~ ~ ~ fill -570 71 -2 -568 72 -2 air

