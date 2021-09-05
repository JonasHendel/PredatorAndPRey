import { useEffect, useState } from 'react';
import Chart from '../components/Chart2';

const Home = () => {
	const [predArr, setPredArr] = useState([500]);
	const [preyArr, setPreyArr] = useState([500]);
	const [simulate, setSimulate] = useState(false);

	let tempArr = [];

	const createArr = () => {
		let arr = [];
		for (let i = 0; i < preyArr[preyArr.length - 1]; i++) {
			arr.push('prey');
		}
		for (let i = 0; i < predArr[predArr.length - 1]; i++) {
			arr.push('predator');
		}
		return arr;
	};

	const getTwo = (arr) => {
		let random = Math.floor(Math.random() * arr.length);

		const type1 = arr[random];
		arr.splice(random, 1);

		random = Math.floor(Math.random() * arr.length);

		const type2 = arr[random];
		arr.splice(random, 1);

		return [
			{ type: type1, num: Math.round(Math.random()) },
			{ type: type2, num: Math.round(Math.random()) },
		];
	};

	const oneRound = () => {
		let tempPrey = preyArr[preyArr.length - 1];
		let tempPred = predArr[predArr.length - 1];
		const arr = createArr();
		for (let i = 0; i < (tempPred + tempPrey) / 2; i++) tempArr.push(getTwo(arr));
		tempArr.map((pair) => {
			if (pair[0].type === pair[1].type) {
				if (pair[0].type === 'prey') {
					if (pair[0].num === pair[1].num) {
						tempPrey++;
					}
					return;
				}
				if (pair[0].type === 'predator') {
					tempPred = tempPred - 2;
				}
			}
			if (pair[0].type !== pair[1].type) {
				if (pair[0].num === pair[1].num) {
					tempPrey--;
					tempPred++;
				}
				if (pair[0].num !== pair[1].num) {
					return;
				}
			}
		});
		setPredArr((prevState) => [...prevState, tempPred]);
		setPreyArr((prevState) => [...prevState, tempPrey]);
	};

	useEffect(() => {
		if (simulate) {
			const interval = setInterval(() => {
				if (preyArr[preyArr.length - 1] > 0) {
					oneRound();
				} else {
					setSimulate((prevState) => !prevState);
				}
			}, 100);
			return () => clearInterval(interval);
		}
	}, [preyArr, simulate]);

	return (
		<div className='bg-gray-900 h-screen text-white'>
			<div className='w-full flex flex-col items-center'>
				<h1 className='text-3xl my-5'>Prey and Predator</h1>
				<p className='w-2/5 text-center'>
					Two pairs are picked. If the pair contains two prey, there is a 50% chance they will breed. If the pair consists of 2 predators, they both die. If the pair consists of a prey and a
					predator, there is a 50% chance the predator kills they prey and gets a child, if the prey escapes they both survive.{' '}
				</p>
				<div className='flex items-center'>
					<button onClick={() => setSimulate((prevState) => !prevState)} className={`border-2 rounded-md px-4 h-10 mr-10 mt-5 w-28 sm:text-lg text-white ${simulate && 'border-green-400'}`}>
						Simulate
					</button>
					<button
						onClick={() => {
							setPreyArr([500]);
							setPredArr([500]);
						}}
						className='border-2 w-28 rounded-md px-4 h-10 mt-5 sm:text-lg text-white'>
						Reset
					</button>
					<div className='flex mt-5 mx-10 text-xl'>
						<p className='w-48'>Current preys: {preyArr[preyArr.length - 1]}</p>
						<p className='w-48'>Current predators: {predArr[predArr.length - 1]}</p>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-center'>
				<Chart predArr={predArr} preyArr={preyArr} />
			</div>
		</div>
	);
};

export default Home;
