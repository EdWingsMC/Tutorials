
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

//% weight=100 color=#D2AFFF icon="" block="Agent"
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
//% weight=100 color=#FC7703 icon="" 
namespace AgentMove {

    //% block="agent obróć się w $value"
    export function AgentTurn(value: TurnDirection): void {
        agent.turn(value)
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
            blocks.place(AIR_BLOCK, world(-1033, 63, 1821))
            blocks.place(AIR, world(-1032, 63, 1820))
            blocks.place(REDSTONE_TORCH, world(-1014, 60, 1819))
        } else {
            player.say("Źle ustawiony agent")
        }
    }
}
