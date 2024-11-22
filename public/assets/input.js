'use strict';
class Input extends HTMLElement{
  constructor(){
    super();
    this.rendered = false;
  };

  render(){
    this._prefix      = String(this.getAttribute('_prefix')).trim();
    this._suffix      = String(this.getAttribute('_suffix')).trim();
    this._type        = String(this.getAttribute('_type')).trim();
    this._placeholder = String(this.getAttribute('_placeholder')).trim();

    // prefix icon
    if(this._prefix && this._prefix !== 'null'){
      this._prefixHTML =`
        <div class="_prefix">
          <svg><use href="#${this._prefix}"/></svg>
        </div>`;}
    else this._prefixHTML = '';

    // suffix icon
    if(this._suffix && this._suffix !== 'null'){
      this._suffixHTML =`
        <div class="_suffix">
          <svg><use href="#${this._suffix}"/></svg>
        </div>`;}
    else this._suffixHTML = '';

    // type
    if(this._type && this._type !== 'null'){
      this._typeHTML =` type="${this._type}"`;}
    else this._typeHTML = '';

    // placeholder
    if(this._placeholder && this._placeholder !== 'null'){
      this._placeholderHTML =`placeholder="${this._placeholder}"`;}
    else this._placeholderHTML = '';

    // core
    this._inputHTML =`<input${this._typeHTML}${this._placeholderHTML}>`;

    // build
    this.innerHTML =`
      ${this._prefixHTML}
      ${this._inputHTML}
      ${this._suffixHTML}
    `;
   

    this.querySelector('input').addEventListener('focus', function(){
      this.closest('input-').classList.add('active')
    });

    this.querySelector('input').addEventListener('blur', function(){
      this.closest('input-').classList.remove('active')
    });


  };

  connectedCallback(){
    if(!this.rendered){
      this.render();
      this.rendered = true;
    }
  };

  disconnectedCallback(){
    this.rendered = false;
  };

  static get observedAttributes(){
    return ['_prefix','_suffix'];
  };

  attributeChangedCallback(name, oldValue, newValue){
    this.render();
  };


};

customElements.define('input-',Input);