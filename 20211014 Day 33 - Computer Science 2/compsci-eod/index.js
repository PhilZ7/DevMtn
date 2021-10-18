function nonMemoized(num) { // ~ 70 ms
	const arr = [];

	for (let i = 2; i < num; i++) {
		if (Math.floor(num / i) === (num / i) ) {
			arr.push(i)
		}
	}

	return arr;
}


function closure() { // ~ 7ms
	const cache = {};
	
	return function(num) {
		if (cache[num]) {
			return cache[num]
		}
		
		const arr = [];

		for (let i = 2; i < num; i++) {
			if (Math.floor(num / i) === (num / i) ) {
				arr.push(i)
			}
		}

		cache[num] = arr;

		return arr;
	}

}

const closure1 = closure();
console.time('memo')
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);
closure1(1000);

closure1(500)
console.log(closure1(1000));
console.timeEnd('memo')