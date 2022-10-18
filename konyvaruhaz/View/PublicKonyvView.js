class KonyvekViewP {
    #elem;
  constructor(elem, szuloElemP) {
    // console.log("KonyvView");
    console.log(szuloElemP);
    this.#elem = elem;
    szuloElemP.append(`
    
    <tr>
                            <td>${elem.ID}</td>
                            <td>${elem.cim}</td>
                            <td>${elem.szerzo}</td>
                            <td>${elem.ar}</td>
                            <td><button type="button" class="btn btn-success" id = "M${elem.ID}">módosítás</button></td>
                            <td><button type="button" class="btn btn-danger" id = "T${elem.ID}">törlés</button></td></tr>`);
    this.recordElem = szuloElemP.children(`tr:last-child`);

    this.kosarbaElem = this.recordElem
      .children("td:nth-child(7)")
      .children("button");
    this.megveszElem = this.recordElem
      .children("td:nth-child(8)")
      .children("button");
    console.log(this.recordElem);

    this.kosarbanElem.on("click", () => {
      console.log("kosárba");
        this.kattintasTrigger("kosarba");
    });
   
    
    this.megveszElem.on("click", () => {
        console.log("megvesz");
          this.kattintasTrigger("megvesz");
      });
  

}

  kattintasTrigger(esemenyNeve) {
    console.log(esemenyNeve)
    const esemeny = new CustomEvent("modosit", { detail: this.#elem.ID });
    window.dispatchEvent(esemeny);
    
}


}

export default KonyvekViewP;
