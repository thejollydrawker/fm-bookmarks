import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './components/menu';

@customElement('my-element')
class MyElement extends LitElement {
  
  render() {
    return html`
      <div>It works!</div>
      <bookmark-nav></bookmark-nav>
    `;
  }
}