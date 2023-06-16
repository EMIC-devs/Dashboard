import { EmicWidget } from "./emicWidget.js";

class EmicWidgetSlider extends EmicWidget {
  static namesList = {};
  slider;

//****************************************************************************/
//                               Constructor
//****************************************************************************/
constructor() {
  super();
  this.attachShadow({ mode: "open" });
}
//****************************************************************************/
//                   Método para obtener un nuevo ID
//****************************************************************************/
 
  getNewID() {
    var i;
    for (i = 1; EmicWidgetSlider.namesList[`slider-${i}`]; i++);
    EmicWidgetSlider.namesList[`slider-${i}`] = this;
    return `slider-${i}`;
  }

//****************************************************************************/
//               Cuando el elemento es conectado al DOM
//****************************************************************************/

  connectedCallback() {
    if (!super.preconnectedCallback("Slider")) {
      return;
    }
    // Creamos un nuevo elemento <input>
    this.slider = document.createElement("input");

    // Establecemos el tipo de input como "range"
    this.slider.type = "range";
    // Establecemos el valor mínimo y maximo
    this.slider.min = "0";
    this.slider.max = "100";

    // Si el elemento no tiene un atributo "id", se le asigna uno nuevo
    if (!this.hasAttribute("id")) {
      this.setAttribute("id", this.getNewID());
    }
    // Mostrar identificador
    this.setAttribute("title", this.getAttribute("id"));

    // Si el elemento no tiene un atributo "value", se le asigna el valor 0
    if (!this.hasAttribute("value")) {
      this.setAttribute("value", 0);
    }

    // Si el elemento no tiene un atributo "max", se le asigna el valor 100
    if (!this.hasAttribute("max")) {
      this.setAttribute("max", 100);
    }

    // Si el elemento no tiene un atributo "min", se le asigna el valor 0
    if (!this.hasAttribute("min")) {
      this.setAttribute("min", 0);
    }

    this.shadowRoot.appendChild(this.slider);

    // Establecemos el ancho y la altura del slider
    this.slider.style = "width:150px; height:40px;";

    // Agregamos un event listener para el evento "change" del slider
    this.slider.addEventListener("change", this.change);

    super.connectedCallback();
  }

  // Método llamado cuando ocurre el evento "change" en el slider
  change(event) {
    console.log("change", event.target.value);

    // Si existe una función global "sliderChange", se llama a esa función y se le pasa el ID del slider y su nuevo valor
    if (window.sliderChange)
      sliderChange(this.getAttribute("id"), event.target.value);
  }
//****************************************************************************/
//                               Si hay cambios
//****************************************************************************/
  // Lista de atributos observados por el elemento
  static get observedAttributes() {
    return ["value", "max", "min"];
  }

  // Método llamado cuando hay cambios en los atributos del elemento
  attributeChangedCallback(name, old, now) {
    // Si el slider no está definido, se retorna
    if (typeof this.slider == "undefined") return;

    switch (name) {
      // Si el atributo cambiado es "max", se actualiza el valor máximo del slider
      case "max":
        this.slider.max = now;
        break;
      // Si el atributo cambiado es "min", se actualiza el valor mínimo del slider
      case "min":
        this.slider.min = now;
        break;
    }
  }
//****************************************************************************/
  // Método para obtener el valor del atributo "value"
  get value() {
    return this.getAttribute("value");
  }

  // Método para obtener el valor del atributo "max"
  get max() {
    return this.getAttribute("max");
  }

  // Método para obtener el valor del atributo "min"
  get min() {
    return this.getAttribute("min");
  }

  // Método para establecer el valor del atributo "max"
  set max(newVal) {
    this.setAttribute("max", newVal);
  }

  // Método para establecer el valor del atributo "min"
  set min(newVal) {
    this.setAttribute("min", newVal);
  }
}

// Se define el nuevo elemento "emic-widget-slider"
customElements.define("emic-widget-slider", EmicWidgetSlider);