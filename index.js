// Classe genérica que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // normaliza para evitar erros
  }

  // Método que retorna o ataque conforme o tipo
  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso com laço de repetição
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 25, "ninja")
];

// Iterando sobre os heróis e chamando o método atacar
for (let heroi of herois) {
  heroi.atacar();
}
