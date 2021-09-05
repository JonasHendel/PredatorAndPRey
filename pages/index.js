import { useEffect, useState } from 'react';
import Chart from '../components/Chart2';

const Home = () => {
	const [predators, setPredators] = useState(500);
	const [prey, setPrey] = useState(500);
	const [array, setArray] = useState([]);
	const amount = predators + prey;

	const [predArr, setPredArr] = useState([]);
	const [preyArr, setPreyArr] = useState([]);

	// 0 = predator
	// 1 = prey
	let tempArr = [];
	let predatorNum = 0;
	let preyNum = 0;
	const [run, setRun] = useState(false);
	let ones = 0;
	let zeros = 0;

	const createArr = () => {
		let arr = [];
		for (let i = 0; i < prey; i++) {
			arr.push('prey');
		}
		for (let i = 0; i < predators; i++) {
			arr.push('predator');
		}
		return arr;
	};

	const getTwo = (arr) => {
		// console.log('length', arr.length)

		let random = Math.floor(Math.random() * arr.length);

		const type1 = arr[random];

		// console.log('random', random)

		// console.log('pre', arr)

		arr.splice(random, 1);

		// console.log('post', arr)

		random = Math.floor(Math.random() * arr.length);
		const type2 = arr[random];
		arr.splice(random, 1);
		// console.log('length', arr.length)

		const num = Math.round(Math.random());
		const num2 = Math.round(Math.random());

		num === 1 ? ones++ : zeros++;
		num2 === 1 ? ones++ : zeros++;

		type1 === 'predator' ? predatorNum++ : preyNum++;
		type2 === 'predator' ? predatorNum++ : preyNum++;
		return [
			{ type: type1, num: num },
			{ type: type2, num: num2 },
		];
	};

	const oneRound = () => {
		let tempPrey = prey;
		let tempPred = predators;
		const arr = createArr();
		for (let i = 0; i < (predators + prey) / 2; i++) tempArr.push(getTwo(arr));
		tempArr.map((pair) => {
			if (pair[0].type === pair[1].type) {
				if (pair[0].type === 'prey') {
					if (pair[0].num === pair[1].num) {
						tempPrey++;
					}
					return;
					console.log(pair, 'two preys');
				}
				if (pair[0].type === 'predator') {
					console.log(pair, 'two predators');
					tempPred = tempPred - 2;
				}
			}
			if (pair[0].type !== pair[1].type) {
				if (pair[0].num === pair[1].num) {
					console.log(pair, 'prey and pred same');
					tempPrey--;
					tempPred++;
				}
				if (pair[0].num !== pair[1].num) {
					console.log(pair, 'prey and pred different');
          return
				}
			}
		});
		setPredArr((prevState) => [...prevState, tempPred]);
		setPreyArr((prevState) => [...prevState, tempPrey]);
		setPrey(tempPrey);
		setPredators(tempPred);
		// console.log('prey', tempPrey);
		// console.log('predators', predators);
	};

	useEffect(() => {
		oneRound();
		const ran = Math.random();
		console.log(ran);
		console.log(Math.round(ran));
	}, [run]);

  useEffect(()=>{
    const interval = setInterval(()=>{
    }, 100)
    return () => clearInterval(interval)
  })

	return (
		<div>
			<button
				onClick={() => {
					setRun((prevState) => !prevState);
				}}>
				RUn
			</button>
			<p>Current preys: {prey}</p>
			<p>Current predators: {predators}</p>
			<Chart predArr={predArr} preyArr={preyArr}/> 
		</div>
	);
};

export default Home;
