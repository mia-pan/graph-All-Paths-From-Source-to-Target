//Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// Example:
// Input: [[1, 2], [], [3], []] 
// Output: [[0,1,3],[0,2,3]] 
// Explanation: The graph looks like this:
// 0--->1
// |    |
// v    v
// 2--->3
//There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

 var allPathsSourceTarget = function(graph) {
    let result = []
    const findPaths = (index, path) => {
        avail = graph[index] // [1,2] at index 0
        if (index === graph.length - 1)
        for (let i = 0; i < avail.length; i++) {
            findPaths(avail[i], [...path, avail[i]])
        }
    }
    findPaths(0, [0])
    return result
};
