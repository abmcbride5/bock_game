function checkColumn(grid, oI, oK, i, k){
	
	let temp = 0;
	if (i - 1 >= 0 && grid[i][k] === 0){
		checkColumn(grid, oI, oK, i - 1, k);
	} else if (grid[i][k] !== 0){
		temp = grid[i][k];
		grid[i][k] = grid[oI][oK];
		grid[oI][oK] = temp;
		return grid
	}
}

export default function liftZeros(grid){
	/**  takes in 2D array 
	*	checks any space that contains zero
	*	if zero is found fucntion to check
	*	column for nonzero and brings nonzero
	*	down to the end if found, lifting all
	*	zeros up to the to the topmost position.
	*/

	let i = grid.length -1;
	const lengthK= grid[0].length;
	let k = 0;

	for (i; i >= 0 ; i -= 1){
		k = lengthK - 1;
		for (k; k >= 0; k -= 1){
			if (grid[i][k] === 0){
				checkColumn(grid, i, k, i, k)
			}
		}
	}
	return grid
}