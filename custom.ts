
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
    //% block
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