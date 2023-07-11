codebuilder navigate @p false http://minecraft.makecode.com/#tutorial:https://github.com/EdWingsMC/Tutorials/none_tutorial
dialogue change @e[name=starzec] quest1 @r
dialogue change @e[name=Staruszka] quest1_2 @r
dialogue change @e[name=Grzybiarz] quest1_3 @r
dialogue change @e[name=Leszy] quest1_4 @r
gamerule doDaylightCycle false
time set day
gamerule doWeatherCycle false
weather clear
gamerule showBorderEffect false
gamerule fallDamage false
gamerule fireDamage false
gamerule drowningDamage false
gamerule randomTickSpeed 1
gamerule commandblockoutput false
gamerule sendcommandfeedback false
scoreboard players reset *
scoreboard objectives add makecode dummy
scoreboard objectives add success dummy
tp @c -615 65 -42 facing -601 69 -26
execute @s ~ ~ ~ fill -612 66 -44 -612 66 -39 air
#etap1
execute @s ~ ~ ~ setblock -596 68 -42 wood 2
execute @s ~ ~ ~ setblock -596 69 -42 wood 2
execute @s ~ ~ ~ setblock -597 68 -43 wood 2
execute @s ~ ~ ~ setblock -597 69 -43 wood 2
#etap2
execute @s ~ ~ ~ setblock -582 68 -41 wood 2
execute @s ~ ~ ~ setblock -582 69 -41 wood 2
#etap3
execute @s ~ ~ ~ fill -566 70 -18 -567 71 -18 wood 2
#etap 4
execute @s ~ ~ ~ fill -570 71 -2 -568 72 -2 wood 2
#reset planszy z zadania 2
execute @s ~ ~ ~ fill -593 79 -64 -580 72 -64 air
#reset planszy z zadania 4
clone -593 71 -8 -593 70 -1 -575 68 -12 