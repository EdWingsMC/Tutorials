
execute @e[type=agent,x=-575,y=69,z=-4,dx=0,dy=0,dz=0] ~ ~ ~ scoreboard players set @p success 1

execute @p[scores={makecode=0,success=1}] ~ ~ ~ function quest4/fail     
execute @p[scores={makecode=1,success=1}] ~ ~ ~ function quest4/stage_1_end 

