import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './components/ui';

@customElement('my-element')
class MyElement extends LitElement {
  
  render() {
    return html`
      <bookmark-ui></bookmark-ui>
    `;
  }
}