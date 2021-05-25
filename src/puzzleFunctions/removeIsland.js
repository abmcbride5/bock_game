export default function removeIsland(grid, r, c, selected, listOfCords){
	// console.log("remove, gird, girdOf:", grid, grid[r][c]);
	
	if (r >= grid.length || c >= grid[0].length || r < 0 || c < 0){
		// console.log("first return cords", listOfCords);
		console.log("first return cords", grid);
		return listOfCords.length;
	}
	// console.log("r", r)
	if (grid[r][c] !== selected) {
		console.log("second return cords", grid);
		return listOfCords.length;
	}
	if (grid[r][c] === selected){
		if (!listOfCords.includes([[r, c]]))
			// console.log("does in include:", listOfCords.includes([r, c]), r, c)
			listOfCords.push([r, c]);
			grid[r][c] = 0;
		 removeIsland(grid, r + 1, c, selected, listOfCords);
		// console.log("hello next run", r, c, selected, listOfCords);
		 removeIsland(grid, r - 1, c, selected, listOfCords);
		// console.log("hello third run", r, c, selected, listOfCords);
		 removeIsland(grid, r, c + 1, selected, listOfCords)
		// console.log("hello fourth run", r, c, selected, listOfCords);
		 removeIsland(grid, r, c - 1, selected, listOfCords)
	} else 
		console.log("return cords", grid);
		return listOfCords.length;
	
}