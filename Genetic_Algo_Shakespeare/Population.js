class Population{
  constructor(target){
    this.dna = new DNA(target);
  }

  calcFitness(){
    return this.dna.calcFitness();
  }

  setDNA(dna){
    this.dna.setDNA(dna);
  }

  crossover(other){
    return this.dna.crossover(other);
  }

  mutation(mutation_rate){
    this.dna.mutation(mutation_rate);
  }

}
