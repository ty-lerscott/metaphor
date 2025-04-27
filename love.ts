/**
 * In some relationships, resolution is not balance by subtraction,
 * but *transformation* through interaction: friction, fusion, surrender, stillness.
 * 
 * This function explores emotional pairings — not assuming conflict,
 * but asking if any *interaction* between them could resolve toward peace.
 * 
 * Each pairing is a dance:
 *  - Can care added to longing soften the ache?
 *  - Can grief subtracted from presence yield quiet?
 *  - Can even distance or power struggles dissolve into something gentler?
 * 
 * Because sometimes — even chaos embracing chaos births calm.
 */

type OperationResult = {
    pair: [number, number];    // Two hearts, two forces
    operation: string;         // How their energy intertwined
    result: number;            // The effect of that encounter
    peaceful: boolean;         // Did their meeting drift toward stillness?
};

export default function resolveThroughLove(values: number[]): number {
    if (values.length % 2 !== 0) {
        throw new Error("No heart should face itself alone. Each soul seeks its counterpart.");
    }

    const results: OperationResult[] = [];
    const PEACE_THRESHOLD = 1e-6; // Near enough to stillness — perfect peace is rare

    for (let i = 0; i < values.length; i += 2) {
        const a = values[i];
        const b = values[i + 1];

        const operations: [string, number][] = [
            ["a + b", a + b],                           // Shared growth
            ["a - b", a - b],                           // Softened burdens
            ["b - a", b - a],                           // Reframed absence
            ["a * b", a * b],                           // Fused destinies
            ["a / b", b !== 0 ? a / b : NaN],            // Surrender into one another
            ["b / a", a !== 0 ? b / a : NaN],            // Mutual yielding
            ["a % b", b !== 0 ? a % b : NaN],            // Leftover fragments
            ["b % a", a !== 0 ? b % a : NaN],            // Reflections of incompleteness
            ["Math.pow(a, b)", Math.pow(a, b)],          // Empowerment or overwhelm
            ["Math.pow(b, a)", Math.pow(b, a)],          // Echoes reversed
        ];

        const peacefulInteraction = operations.find(([_, outcome]) =>
            Number.isFinite(outcome) && Math.abs(outcome) <= PEACE_THRESHOLD
        );

        const pair: [number, number] = [a, b];

        if (peacefulInteraction) {
            results.push({
                pair,
                operation: peacefulInteraction[0],
                result: 0, // When peace is close enough, we call it peace
                peaceful: true,
            });
        } else {
            results.push({
                pair,
                operation: "unresolved",
                result: NaN,
                peaceful: false,
            });
        }
    }

    const totalResult = results.reduce((sum, res) => sum + (res.result || 0), 0);

    return Math.abs(totalResult) <= PEACE_THRESHOLD ? 0 : 0;
}
