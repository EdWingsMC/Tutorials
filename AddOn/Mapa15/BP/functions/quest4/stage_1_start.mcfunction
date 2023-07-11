codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/zajecia15/zad10
title @p actionbar §6Kliknij C aby zacząć programować
scoreboard players set @p makecode 0
tp @c -575 69 -13 facing -575 69 -11
clone -593 71 -8 -593 70 -1 -575 68 -12 
execute @s ~ ~ ~ setblock -572 66 -13 redstone_torch
execute @s ~ ~ ~ setblock -572 66 -7 redstone_torch

