class DNA{

  constructor(target){
    this.target = target;

    this.value = [];
    for(let i = 0; i < target.length; i++){
      this.value.push(this.randomChar());
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
      if(this.target[i] == this.value[i]){
        this.fitness = this.fitness + 1;
      }
    }
  }

  setDNA(dna){
    this.value = dna.value;
  }

  crossover(other){
    var rand = floor(random(1, target.length));
    var child_dna = new DNA(this.target);
    for(let i = 0; i < target.length; i++){
      if(i < rand){
        child_dna.value[i] = this.value[i];
      }
      else{
        child_dna.value[i] = other.dna.value[i];
      }
    }
    return child_dna;

  }

  mutation(mutation_rate){
    for(let i = 0; i < target.length; i++){
      if(random() <= mutation_rate){
        this.value[i] = this.randomChar();
      }
    }
  }

}
