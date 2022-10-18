import KonyvekViewP from "../View/PublicKonyvekView.js";
import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
  constructor() {
    console.log("KonyvController");
    const konyvmodel = new KonyvModel();
    konyvmodel.adatBe("../adat.json", this.konyvAdatokAdmin);
    $(window).on("torol", (event) =>
      console.log("meghívva a controllerbe a view clikk töröl", event.detail)
    );

    $(window).on("modosit", (event) =>
      console.log("meghívva a controllerbe a view clikk modosit", event.detail)
    );

    
    const konyvmodelP = new KonyvModel();
    konyvmodel.adatBe("../adat.json", this.konyvAdatokPublic);

  }

  konyvAdatokAdmin(tomb) {
    console.log(tomb);
    let szuloElem = $("main");
    new KonyvekView(tomb, szuloElem);
  }

  konyvAdatokPublic(tomb) {
    console.log(tomb);
    let szuloElem = $("publik");
    new KonyvekView(tomb, szuloElem);
  }

}

export default KonyvController;
