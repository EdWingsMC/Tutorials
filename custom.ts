
/**
* Użyj tego pliku, aby zdefiniować niestandardowe funkcje i bloki.
* Czytaj więcej na https://minecraft.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Brama {


    //% block="Otwórz brame"
    export function Open_Gate(): void {
        loops.pause(200)
        blocks.fill(
            AIR,
            world(93, -4, -385),
            world(93, -4, -386),
            FillOperation.Replace
        )
        loops.pause(400)
        blocks.fill(
            AIR,
            world(93, -3, -385),
            world(93, -3, -386),
            FillOperation.Replace
        )
        loops.pause(400)
        blocks.fill(
            AIR,
            world(93, -2, -385),
            world(93, -2, -386),
            FillOperation.Replace
        )
        loops.pause(100)
        blocks.place(REDSTONE_TORCH, world(111, -8, -378))
        agent.teleport(world(87, -3, -394), NORTH)
    }


}
//% weight=100 color=#0fbc11 icon=""
namespace Schody {

    //% block="Napraw pomarańczowe schody"
    export function Repair_Orange_Stairs(): void {
        blocks.place(RED_SANDSTONE_STAIRS, world(99, 3, -426))
        blocks.place(RED_SANDSTONE_STAIRS, world(99, 3, -425))
        blocks.place(RED_SANDSTONE_STAIRS, world(102, 6, -426))
        blocks.place(RED_SANDSTONE_STAIRS, world(102, 6, -425))
        blocks.place(RED_SANDSTONE_STAIRS, world(105, 9, -426))
        blocks.place(RED_SANDSTONE_STAIRS, world(105, 9, -425))
        loops.pause(200)
        if (blocks.testForBlock(RED_SANDSTONE_STAIRS, world(99, 3, -426)) && (blocks.testForBlock(DARK_PRISMARINE_STAIRS, world(107, 11, -426)) && blocks.testForBlock(QUARTZ_STAIRS, world(100, 4, -426)))) {
            blocks.fill(
                AIR,
                world(98, 3, -425),
                world(98, 3, -426),
                FillOperation.Replace
            )
            agent.teleport(world(133, 16, -449), WEST)
        }
    }
    //% block="Napraw zielone schody"
    export function Repair_Green_Stairs(): void {
        blocks.place(DARK_PRISMARINE_STAIRS, world(104, 8, -426))
        blocks.place(DARK_PRISMARINE_STAIRS, world(104, 8, -425))
        blocks.place(DARK_PRISMARINE_STAIRS, world(107, 11, -426))
        blocks.place(DARK_PRISMARINE_STAIRS, world(107, 11, -425))
        blocks.place(DARK_PRISMARINE_STAIRS, world(101, 5, -426))
        blocks.place(DARK_PRISMARINE_STAIRS, world(101, 5, -425))
        loops.pause(200)
        if (blocks.testForBlock(RED_SANDSTONE_STAIRS, world(99, 3, -426)) && (blocks.testForBlock(DARK_PRISMARINE_STAIRS, world(107, 11, -426)) && blocks.testForBlock(QUARTZ_STAIRS, world(100, 4, -426)))) {
            blocks.fill(
                AIR,
                world(98, 3, -425),
                world(98, 3, -426),
                FillOperation.Replace
            )
            agent.teleport(world(133, 16, -449), WEST)
        }
    }
    //% block="Napraw białe schody"
    export function Repair_White_Stairs(): void {
        blocks.place(QUARTZ_STAIRS, world(100, 4, -426))
        blocks.place(QUARTZ_STAIRS, world(100, 4, -425))
        blocks.place(QUARTZ_STAIRS, world(103, 7, -426))
        blocks.place(QUARTZ_STAIRS, world(103, 7, -425))
        blocks.place(QUARTZ_STAIRS, world(106, 10, -426))
        blocks.place(QUARTZ_STAIRS, world(106, 10, -425))
        loops.pause(200)
        if (blocks.testForBlock(RED_SANDSTONE_STAIRS, world(99, 3, -426)) && (blocks.testForBlock(DARK_PRISMARINE_STAIRS, world(107, 11, -426)) && blocks.testForBlock(QUARTZ_STAIRS, world(100, 4, -426)))) {
            blocks.fill(
                AIR,
                world(98, 3, -425),
                world(98, 3, -426),
                FillOperation.Replace
            )
            agent.teleport(world(133, 16, -449), WEST)
        }
    }
}

//% weight=100 color=#D2AFFF icon="" block="Podaj odpowiedź"
namespace PodajOdp {
    //% block="Odpowiedź to $value"
    export function Math_result_1(value: number): void {
        if (value == 31) {
            player.teleport(world(148, 28, -552))
        } else {
            player.say("Zła odpowiedź")
        }
    }
    //% block="Odpowiedź to $value"
    export function Math_result_2(value: number): void {
        if (value == 10) {
            player.teleport(world(148, 48, -552))
        } else {
            player.say("Zła odpowiedź")
        }
    }
}
//% weight=100 color=#FC7703 icon="" block="Agent"
namespace AgentMove {

     //% block="agent umieść $value"
    export function AgentPlace(value: SixDirection): void {
        agent.place(value)
    }
    //% block="agent obróć się w $value"
    export function AgentTurn(value: TurnDirection): void {
        agent.turn(value)
    }
     //% block="agent przesuń $value o $dist"
     export function AgentMove(value: SixDirection,dist:number): void {
        agent.move(value, dist)
    }
    //% block="Zbadaj blok"
    export function AgentTest_1(): void {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            blocks.place(GLASS, world(-1031, 63, 1821))
            blocks.place(GOLD_BLOCK, world(-1032, 63, 1822))
            blocks.place(GLASS, world(-1033, 63, 1821))
            blocks.place(GLASS, world(-1032, 63, 1820))
            blocks.place(REDSTONE_TORCH, world(-1014, 60, 1825))
        } else {
            player.say("Źle ustawiony agent")
        }
    }
    //% block="Zbadaj blok"
    export function AgentTest_2(): void {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            blocks.place(GLASS, world(-1031, 63, 1821))
            blocks.place(GLASS, world(-1032, 63, 1822))
            blocks.place(GLASS, world(-1033, 63, 1821))
            blocks.place(GOLD_BLOCK, world(-1032, 63, 1820))
            blocks.place(REDSTONE_TORCH, world(-1014, 60, 1823))
        } else {
            player.say("Źle ustawiony agent")
        }

    }
    //% block="Zbadaj blok"
    export function AgentTest_3(): void {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            blocks.place(GOLD_BLOCK, world(-1031, 63, 1821))
            blocks.place(GLASS, world(-1032, 63, 1822))
            blocks.place(GLASS, world(-1033, 63, 1821))
            blocks.place(GLASS, world(-1032, 63, 1820))
            blocks.place(REDSTONE_TORCH, world(-1014, 60, 1821))
        } else {
            player.say("Źle ustawiony agent")
        }

    }
    //% block="Zbadaj blok"
    export function AgentTest_4(): void {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            blocks.place(AIR, world(-1031, 63, 1821))
            blocks.place(AIR, world(-1032, 63, 1822))
            blocks.place(AIR, world(-1033, 63, 1821))
            blocks.place(AIR, world(-1032, 63, 1820))
            blocks.place(REDSTONE_TORCH, world(-1014, 60, 1819))
        } else {
            player.say("Źle ustawiony agent")
        }
    }
      //% block="Daj nasiona agentowi"
      export function AgentGetItem(): void {
        agent.setItem(SEEDS, 8, 1)
    }
}
//% weight=100 color=#7FFC03 icon="" block="Strefa badań"
namespace HarvestTest {
    //% block="Zbadaj czy zaorane"
    export function TillTest(): void {
        let x = 1771
        for (let index = 0; index < 7; index++) {
            if (blocks.testForBlock(FARMLAND, world(-1039, 63, x))) {
                x += 1
            }
        }
        if (x == 1778) {
            blocks.place(REDSTONE_TORCH, world(-1043, 60, 1754))
            agent.teleport(world(-1039, 64, 1770), SOUTH)
        } else {
            player.say("Nie wszystkie pola są zaorane")
        }
    }
  
     //% block="Zbadaj czy zasadzone"
     export function SeedsTest(): void {
        let x = 1771
        for (let index = 0; index < 7; index++) {
            if (blocks.testForBlock(CROPS, world(-1039, 64, x))) {
                x += 1
            }
        }
        if (x == 1778) {
            blocks.place(REDSTONE_TORCH, world(-1041, 60, 1754))
            blocks.place(REDSTONE_TORCH, world(-1031, 60, 1756))
        } else {
            player.say("Nie wszystkie pola są zasadzone")
        }
        
    }
      //% block="Czy jest bezpiecznie"
     export function BeeTest(): void {
        if (blocks.testForBlock(AIR, world(-1069, 63, 1845)) && (blocks.testForBlock(AIR, world(-1074, 63, 1839)) && blocks.testForBlock(AIR, world(-1075, 63, 1848)))) {
    blocks.place(REDSTONE_TORCH, world(-1065, 60, 1854))
}else{
    player.say("Nie zniszczyłeś wszystkich uli")
}
        
    }
}
//% weight=100 color=#D2AFFF icon="" block="Podaj odpowiedź"
namespace Mapa8 {
    //% block="Odpowiedź to $value"
    export function Math_result_1(value: number): void {
        if (value == 3) {
            player.say("Gratulacje")
            blocks.fill(AIR, world(-127, 90, -237), world(-126, 90, -237), FillOperation.Replace)
        } else {
            player.say("Zła odpowiedź")
        }
    }
    //% block="Odpowiedź to $value"
    export function Math_result_2(value: number): void {
        if (value == -6) {
            player.say("Gratulacje")
            player.teleport(world(-74, 97, -238))
        } else {
            player.say("Zła odpowiedź")
        }
    }
    //% block="Odpowiedź to $value"
    export function Math_result_3(value: number): void {
        if (value == 8) {
            player.say("Gratulacje")
        blocks.place(REDSTONE_TORCH, world(-73, 95, -237))
        } else {
            player.say("Zła odpowiedź")
        }
    }
    }
//% weight=100 color=#8F6D40 icon="" block="Rozgrywka"
namespace Mapa9 {

 //% block="Przełącz opady"
    export function weatherChange(): void {
        gameplay.timeSet(gameplay.time(DAY))
        blocks.place(REDSTONE_TORCH, world(82,70,413))
        
}
 //% block="Odpowiedź to $value"
    export function Math_result(value: number): void {
       
         if (value == 18) {
            player.say("Gratulacje")
           blocks.place(REDSTONE_TORCH, world(68,107,387))
        } else {
            player.say("Zła odpowiedź")
        }
}
}
//% weight=100 color=#8F6D40 icon="" block="Agent"
namespace Mapa15 {

 //% block="Agent przesuń do przodu o 1"
    export function MoveAgentForOneToForward(): void {
       agent.move(FORWARD, 1)
        
}
     //% block="Agent przesuń do tyłu o 1"
    export function MoveAgentForOneToBack(): void {
       agent.move(BACK, 1)
        
}
     //% block="Agent przesuń w lewo o 1"
    export function MoveAgentForOneToLeft(): void {
       agent.move(LEFT, 1)
        
}
     //% block="Agent przesuń w prawo o 1"
    export function MoveAgentForOneToRight(): void {
       agent.move(RIGHT, 1)
        
}
         //% block="Agent przesuń do góry o 1"
    export function MoveAgentForOneToUP(): void {
       agent.move(UP, 1)
        
}
}
