'use strict';
class Button extends HTMLElement{
  constructor(){
    super();
    this.rendered = false;
  };

  render(){
    this._prefix = String(this.getAttribute('_prefix')).trim();
    this._text   = String(this.getAttribute('_text')).trim();
    this._suffix = String(this.getAttribute('_suffix')).trim();
    this._href   = String(this.getAttribute('_href')).trim();

    // prefix icon
    if(this._prefix && this._prefix !== 'null'){
      this._prefixHTML =`<svg class="_prefix"><use href="#${this._prefix}"/></svg>`;}
    else this._prefixHTML = '';

    // core text
    if(this._text && this._text !== 'null'){
      this._textHTML =`<span class="_text">${this._text}</span>`;}
    else this._textHTML = '';

    // suffix icon
    if(this._suffix && this._suffix !== 'null'){
      this._suffixHTML =`<svg class="_suffix"><use href="#${this._suffix}"/></svg>`;}
    else this._suffixHTML = '';

    // build
    this.innerHTML = ` 
      ${this._prefixHTML}
      ${this._textHTML}
      ${this._suffixHTML}`;
    
    // link
    const buttonClick = function(){location.href = this._href}

    if(this._href && this._href !== 'null'){
      this.addEventListener('click',buttonClick, false);
    };

    this.rendered = true;

  };

  connectedCallback(){
    if(!this.rendered) this.render();
  };

  disconnectedCallback(){
    this.rendered = false;
  };

  static get observedAttributes(){
    return ['_prefix','_text','_suffix'];
  };

  attributeChangedCallback(name, oldValue, newValue){
    this.render();
  };

};

customElements.define('button-',Button);