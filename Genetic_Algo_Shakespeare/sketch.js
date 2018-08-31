
var populations = [];
var num_element = 100;
var mating_pool = [];
var done = false;

var target = "Computer Engineering";

var mutation_rate = 0.01

var final;
var avg_fitness = 0;

function setup() {

	// frameRate(20);
	createCanvas(windowWidth, windowHeight);
	background(150);
	genPopulation();
	// console.log(populations)

}

function draw() {

	background(150);

	if(done == false){
		var total_fitness = 0;
		for(let i = 0; i < num_element; i++){
			populations[i].calcFitness();

			background(150);
			textSize(64);
			text("Population: " + num_element.toString(), 100, 100);
			text("target: " + target, 100, 300);
			text("Progress: " + populations[i].dna.value.join(""), 100, 500);
			text("Mutation rate: " + (mutation_rate * 100).toString() + "%", 100, 900);

			if(populations[i].dna.fitness == target.length){
				console.log("found");
				final = populations[i].dna.value;
				done = true;
			}
			total_fitness = total_fitness + populations[i].dna.fitness;
		}

		if(total_fitness == 0){
			genPopulation();
		}
		else{

			textSize(64);
			avg_fitness = avgFitness(total_fitness).toString();
			text("Avg Fitness: " + avg_fitness, 100, 700);

			// console.log(populations);
			genMatingPool(total_fitness);
			// console.log(mating_pool)

			for(let j = 0; j < num_element; j ++){

				var parent1 = mating_pool[floor(random(0, mating_pool.length))];
				var parent2 = mating_pool[floor(random(0, mating_pool.length))];

				// console.log(parent1)
				// console.log(parent2)

				var child_dna = parent1.crossover(parent2);
				var child = new Population(target);
				child.setDNA(child_dna);

				child.mutation(mutation_rate);

				populations[j] = child;
			}
		}

	}
	else{
		textSize(64);
		text("Population: " + num_element.toString(), 100, 100);
		text("Target: " + target, 100, 300);
		text("Progress: " + final.join(""), 100, 500);
		text("Avg Fitness: " + avg_fitness + "%", 100, 700);
		text("Mutation rate: " + (mutation_rate * 100).toString() + "%", 100, 900);
	}

}

function avgFitness(total_fitness){
	var sum = 0;
	for(let i = 0; i < num_element; i++){
		sum = sum + populations[i].dna.fitness / target.length;
	}
	return 100 * sum / num_element;
}

function genPopulation(){
	for(let i = 0; i < num_element; i++){
		populations[i] = new Population(target);
	}
}

function genMatingPool(total_fitness){
	mating_pool = [];
	for(let i = 0; i < num_element; i++){
		var probability = populations[i].dna.fitness / total_fitness;
		for(let j = 0; j < floor(probability * 100); j++){
			mating_pool.push(populations[i]);
		}
	}
}
