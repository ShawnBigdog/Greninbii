var form = 0;

function evolve() {
  if (form == 0) {
    form++;
    document.getElementById("froak").src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/657.png";
  } else if (form == 1) {
    form++;
    document.getElementById("froak").src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png";
  } else {
    form = 0;
    document.getElementById("froak").src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png";
  }
}

function cry() {
  var audio = new Audio(
    "https://play.pokemonshowdown.com/audio/cries/greninja.ogg"
  );
  audio.play();
}
