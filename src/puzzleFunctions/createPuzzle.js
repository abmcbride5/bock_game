export default function createPuzzle(){
	let newPuzzle = [];

	for (let i = 0; i < 6; i += 1){
		let temp = [];
		for (let k = 0; k < 5; k += 1){
			temp.push(Math.floor(Math.random() * (6 - 1) + 1));
		}
		newPuzzle.push(temp);
	}

	return newPuzzle;
}