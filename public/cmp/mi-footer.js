class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Rivera Gonzalez Diego IC-51.`;
    }
}
customElements.define("mi-footer", MiFooter);