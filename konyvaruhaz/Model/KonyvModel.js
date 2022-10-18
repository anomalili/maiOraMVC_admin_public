class KonyvModel {
  #konyvekTomb = [];

  constructor() {
    console.log("KonyvModel");
  }

  adatBe(vegpont, myCallBack) {
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.#konyvekTomb = data.konyv;
        console.log(this.#konyvekTomb);
        myCallBack(this.#konyvekTomb);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  adatTorol(adat) {
    console.log("törlöm a modellben");
  }
  adatModosit(modosit){
    console.log("modosítom a modellben")
  }
}

export default KonyvModel;
