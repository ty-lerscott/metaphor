/**
 * At first, everything was shared.  
 * A web of meanings, memories, routines — no one quite knew where one person ended and the other began.  
 * But time moves, and space calls. Boundaries rise not from force, but from need.  
 * 
 * This function begins with a graph — nodes that once belonged to both.
 * Through negotiation (or the quiet gravity of affinity), each node is assigned to one party.
 * Not to sever, but to **distill**.
 * 
 * Some nodes are hard-wired — too charged, too personal, too rooted.
 * Others are fluid — gentle artifacts of a mutual life, able to land on either side.
 * 
 * What emerges is not a warfront. It’s a new topography.
 * Two people, now distinct. With traces of what once connected them.
 */

type BoundaryNode = {
    id: string;                      // The thread of meaning
    label: string;                   // Its human-readable name
    negotiable: boolean;            // Can it be discussed, or is it already claimed?
    affinity: "shared" | "userA" | "userB"; // Its natural leaning (if any)
    finalOwner?: "userA" | "userB"; // Where it ends up
};
  
  type Graph = BoundaryNode[];
  
  function negotiateBoundaries(graph: Graph): { userA: BoundaryNode[]; userB: BoundaryNode[] } {
    const userA: BoundaryNode[] = [];
    const userB: BoundaryNode[] = [];
  
    for (const node of graph) {
      if (node.negotiable) {
        /**
         * When something is negotiable,
         * it carries no allegiance — only memory.
         * So we ask the wind, flip a coin, or follow instinct.
         * Let it fall where it may.
         */
        const final = Math.random() > 0.5 ? "userA" : "userB";
        node.finalOwner = final;
        final === "userA" ? userA.push(node) : userB.push(node);
      } else {
        /**
         * But when something is not negotiable,
         * it already knows where it belongs.
         * This is the boundary drawn not in anger, but in truth.
         */
        node.finalOwner = node.affinity === "shared" ? "userA" : node.affinity; // default shared to A, gently
        node.finalOwner === "userA" ? userA.push(node) : userB.push(node);
      }
    }
  
    return { userA, userB };
  }
  