const calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	multiply(a, b) {
		return a * b;
	},
	divide(a, b) {
		if (b === 0) {
			return 'Cannot divide by zero';
		}

		return a / b;
	},
};

function parseInputValue(inputId) {
	const input = document.getElementById(inputId);
	return Number(input.value);
}

function calculate(operation) {
	const firstNumber = parseInputValue('num-a');
	const secondNumber = parseInputValue('num-b');

	if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
		return 'Please enter valid numbers';
	}

	const operationHandler = calculator[operation];

	if (typeof operationHandler !== 'function') {
		return 'Unknown operation';
	}

	return operationHandler(firstNumber, secondNumber);
}

function renderCalculatorResult(result) {
	const resultElement = document.getElementById('calc-result');
	resultElement.textContent = String(result);
}

function attachCalculatorEvents() {
	const buttons = document.querySelectorAll('[data-op]');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const operation = button.dataset.op;
			const result = calculate(operation);
			renderCalculatorResult(result);
			console.log(`Calculator (${operation}):`, result);
		});
	});
}

function getJavaScriptExercises() {
	const student = {
		name: 'John Doe',
		course: 'JavaScript Fundamentals',
		isActive: true,
	};

	const numbers = [5, 12, 3, 20, 8];

	return [
		{
			title: '1. Variable Types',
			value: `Name is ${student.name} (${typeof student.name}), active status is ${typeof student.isActive}`,
		},
		{
			title: '2. Condition Check',
			value: numbers[1] > 10 ? '12 is greater than 10' : '12 is not greater than 10',
		},
		{
			title: '3. For Loop Sum (1..5)',
			value: (() => {
				let sum = 0;
				for (let index = 1; index <= 5; index += 1) {
					sum += index;
				}
				return sum;
			})(),
		},
		{
			title: '4. Function: Even or Odd (17)',
			value: (function isEven(value) {
				return value % 2 === 0 ? 'Even' : 'Odd';
			})(17),
		},
		{
			title: '5. Array Map (double numbers)',
			value: numbers.map((value) => value * 2).join(', '),
		},
		{
			title: '6. Array Filter (> 10)',
			value: numbers.filter((value) => value > 10).join(', '),
		},
		{
			title: '7. Array Reduce (max value)',
			value: numbers.reduce((max, value) => (value > max ? value : max), numbers[0]),
		},
		{
			title: '8. Object Access',
			value: `${student.name} is learning ${student.course}`,
		},
		{
			title: '9. While Loop Countdown',
			value: (() => {
				const values = [];
				let counter = 3;

				while (counter >= 1) {
					values.push(counter);
					counter -= 1;
				}

				return values.join(' -> ');
			})(),
		},
		{
			title: '10. Function with Default Parameter',
			value: (function greet(userName = 'Guest') {
				return `Hello, ${userName}!`;
			})(),
		},
	];
}

function renderExercises() {
	const listElement = document.getElementById('exercise-results');
	const exercises = getJavaScriptExercises();

	exercises.forEach((exercise) => {
		const listItem = document.createElement('li');
		listItem.textContent = `${exercise.title}: ${exercise.value}`;
		listElement.appendChild(listItem);
		console.log(`${exercise.title}:`, exercise.value);
	});
}

function initializeDay05() {
	attachCalculatorEvents();
	renderExercises();
	console.log('Day 05 ready: calculator + 10 exercises loaded');
}

initializeDay05();
