class DNA{

  constructor(target){
    this.target = target;

    this.gene = [];
    for(let i = 0; i < target.length; i++){
      this.gene.push(this.randomChar());
    }

    this.fitness = 0;

  }

  randomChar(){
    var ascii = floor(random(32, 127));
    return String.fromCharCode(ascii)
  }

  calcFitness(){
    this.fitness = 0;
    for(let i = 0; i < target.length; i++){
      if(this.target[i] == this.gene[i]){
        this.fitness = this.fitness + 1;
      }
    }
  }

  setDNA(dna){
    this.gene = dna.gene;
  }

  crossover(other){
    var rand = floor(random(1, target.length));
    var child_dna = new DNA(this.target);
    for(let i = 0; i < target.length; i++){
      if(i < rand){
        child_dna.gene[i] = this.gene[i];
      }
      else{
        child_dna.gene[i] = other.dna.gene[i];
      }
    }
    return child_dna;

  }

  mutation(mutation_rate){
    for(let i = 0; i < target.length; i++){
      if(random() <= mutation_rate){
        this.gene[i] = this.randomChar();
      }
    }
  }

}
