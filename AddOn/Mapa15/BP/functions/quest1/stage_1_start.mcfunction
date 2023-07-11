codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/zajecia15/zad1

tp @c -601 69 -28 facing -600 69 -28 
clone -597 64 -33 -597 64 -33 -597 67 -24 replace 
title @p actionbar §6Kliknij C aby zacząć programować


#Zmiana planszy dodanie liści
#execute run setblock -601 69 -27 leaves 
#execute run setblock -598 69 -27 leaves
#execute run setblock -599 69 -25 leaves
#execute run setblock -597 69 -25 leaves
execute @s ~ ~ ~ setblock -601 69 -27 leaves 
execute @s ~ ~ ~ setblock -598 69 -27 leaves
execute @s ~ ~ ~ setblock -599 69 -25 leaves
execute @s ~ ~ ~ setblock -599 69 -27 leaves
execute @s ~ ~ ~ setblock -597 69 -25 leaves
#Zmiana planszy usuniecie liści
#execute run setblock  -600 69 -28 air 
#execute run setblock  -599 69 -26 air 
#execute run setblock  -598 69 -26 air 
#execute run setblock  -598 69 -24 air 
execute @s ~ ~ ~ setblock -600 69 -28 air 
execute @s ~ ~ ~ setblock -600 69 -26 air
execute @s ~ ~ ~ setblock -599 69 -26 air 
execute @s ~ ~ ~ setblock -598 69 -26 air 
execute @s ~ ~ ~ setblock -598 69 -24 air 