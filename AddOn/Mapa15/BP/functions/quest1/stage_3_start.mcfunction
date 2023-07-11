codebuilder navigate @p false http://minecraft.makecode.com/?lockedEditor=1#tutorial:https://github.com/EdWingsMC/Tutorials/zajecia15/zad3
tp @c -601 69 -28 facing -601 69 -26
clone -599 64 -33 -599 64 -33 -597 67 -24 replace 
effect @p blindness 99999 true
title @p title Zostałeś oślepiony !
title @p subtitle W samouczku napisałem ci co musisz zrobić
title @p actionbar §6Kliknij C aby zacząć programować

#Zmiana planszy usuniecie liści
execute @s ~ ~ ~ setblock -601 69 -27 air 
execute @s ~ ~ ~ setblock -599 69 -25 air
execute @s ~ ~ ~ setblock -599 69 -27 air
execute @s ~ ~ ~ setblock -597 69 -25 air
#Zmiana planszy dodanie liści
execute @s ~ ~ ~ setblock -600 69 -28 leaves 
execute @s ~ ~ ~ setblock -600 69 -26 leaves
execute @s ~ ~ ~ setblock -598 69 -26 leaves 
execute @s ~ ~ ~ setblock -598 69 -24 leaves 

title @p actionbar §6Kliknij C aby zacząć programować