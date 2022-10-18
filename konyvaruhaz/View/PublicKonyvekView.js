import KonyvViewP from "./PublicKonyvView.js";

class KonyvekViewP {
    constructor(tomb, szuloElemP) {
        szuloElemP.append(`
                <div class ="cime">${elem.cim}</div>
                <div class ="szerzo">${elem.szerzo}}</div>
                <div class ="ar">${elem.ar}</div>
                <div class ="kep"><img src="nagyon_okos_cica.jpg" alt="nagyon_okos_cica" width="350" height="490"></div>
                
            </table>`);
    //    this.tablaElem = szuloElemP.children("table:last-child");
     //   this.tbodyElem = this.tablaElem.children("tbody");
        tomb.forEach(konyv => {
            const konyvOBJ = new KonyvViewP(konyv, this.tbodyElem);
        });
    }
}

export default KonyvekViewP;