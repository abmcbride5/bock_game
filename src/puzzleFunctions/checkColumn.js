export default function checkColumn(grid, oI, oK, i, k){
	
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