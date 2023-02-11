
/**
* Użyj tego pliku, aby zdefiniować niestandardowe funkcje i bloki.
* Czytaj więcej na https://minecraft.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Brama {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    
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

    // /**
    //  * TODO: describe your function here
    //  * @param value describe value here, eg: 5
    //  */
    // //% block
    // export function fib(value: number): number {
    //     return value <= 1 ? value : fib(value -1) + fib(value - 2);
    // }
}
//% weight=100 color=#0fbc11 icon=""
namespace Schody {
    
    //% block="Napraw niebieskie schody"
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
//% weight=100 color=#D2AFFF icon=""
namespace Matematyka {
     //% block="Odpowiedź to "
    export function Math_result_1(value: number): void {
        if (value == 31) {
    player.teleport(world(148, 28, -552))
} else {
    player.say("Zła odpowiedź")
}
    }
     //% block="Odpowiedź to "
    export function Math_result_2(value: number): void {
        if (value == 10) {
    player.teleport(world(148, 48, -552))
} else {
    player.say("Zła odpowiedź")
}
    }
}
