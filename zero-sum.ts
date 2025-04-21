/**
 * Some relationships don’t balance by opposition.
 * They cancel through *interaction* — friction, fusion, misfires, or mutual stillness.
 * 
 * This function explores emotional pairs — not assuming symmetry,
 * but testing if any *operation* between them might resolve to peace. To zero.
 * 
 * In each case, it asks:
 *  - Can love added to need lead to neutrality?
 *  - Can loss subtracted from care return to center?
 *  - Can even violence or distance (multiplication, division) collapse the charge?
 * 
 * Because sometimes — even chaos + chaos = calm.
 */

type OperationResult = {
    pair: [number, number];    // The two souls in question
    operation: string;         // The means by which their energy was tested
    result: number;            // The outcome of that interaction
    valid: boolean;            // Did their interaction cancel out to zero?
};
  
export default function resolveZeroSumViaAnyOperation(values: number[]): number {
    // If someone is left unpaired, we can't evaluate the dynamic.
    if (values.length % 2 !== 0) {
        throw new Error("Love can't be evaluated alone. Each heart must have a counterpart.");
    }

    const results: OperationResult[] = [];

    for (let i = 0; i < values.length; i += 2) {
        const a = values[i];
        const b = values[i + 1];
        const pair: [number, number] = [a, b]; // Two people, two forces, bound for testing

        // We test each possible *interaction* — not just opposites
        const ops: [string, number][] = [
            ["a + b", a + b],                              // Combining two truths
            ["a - b", a - b],                              // Subtracting one presence from another
            ["b - a", b - a],                              // Reversing that subtraction — a fresh lens
            ["a * b", a * b],                              // Multiplying energies: fusion or combustion
            ["a / b", b !== 0 ? a / b : NaN],              // One divided by the other — dependence
            ["b / a", a !== 0 ? b / a : NaN],              // Or reversal — codependence
            ["a % b", b !== 0 ? a % b : NaN],              // Leftover pieces when one tries to fit inside the other
            ["b % a", a !== 0 ? b % a : NaN],              // Or reversal — codependence    
            ["Math.pow(a, b)", Math.pow(a, b)],            // Power struggles — one raised to the force of the other
            ["Math.pow(b, a)", Math.pow(b, a)],            // Or reversal — codependence
        ];

        // Search for any interaction that leads to stillness
        const zeroOp = ops.find(([_, result]) => result === 0);

        if (zeroOp) {
            results.push({
                pair,
                operation: zeroOp[0],
                result: 0,
                valid: true, // These two found a way to cancel — and maybe, to rest
            });
        } else {
            results.push({
                pair,
                operation: "none",      // No common ground found
                result: NaN,
                valid: false,
            });
        }
    }

    // No matter what, we're left with a zero-sum.
    return 0;
}
