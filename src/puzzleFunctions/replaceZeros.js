export default function replaceZeros(grid){
	/**
	 * Replaces all the zeros with
	 * randomly generated numbers between 1-3
	 */

	console.log("replace", grid)
	const lengthI = grid.length;
	const lengthK = grid[0].length;

	for (let i = 0; i < lengthI; ++i){
		for (let k = 0; k < lengthK; ++k){
			// console.log("grid[i][k], i, k:", grid[i][k], i, k);
			if (grid[i][k] === 0){
				// console.log("zero grid[i][k], i, k:", grid[i][k], i, k);
				grid[i][k] = Math.floor(Math.random() * (4 - 1) + 1);
			}
		}
	}
	return grid
}