class Footer extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = /*html*/`
            <style>
                    
                #footer{
                    text-align:center;
                      }
                            
               
            </style>
            
            <div id ='footercontainer'>
                 <p id ='footer'> &copy;  2026 | Stefan Basten  |  Köln-Klettenberg |  </p>
            </div>
           
            `;
    }
}

customElements.define('webcomponent-footer', Footer);