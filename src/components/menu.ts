import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './button';
import { globalStyles } from '../styles';

@customElement('bookmark-nav')
class BookmarkNav extends LitElement {
  render() {
    return html`
      <nav>Buton component: </nav>
      <bookmark-btn class="red" content="Login"></bookmark-btn>
      <bookmark-btn class="blue" content="Blue"></bookmark-btn>
      <bookmark-btn class="grey" content="Gray"></bookmark-btn>
    `;

  }

  static styles = css`
      bookmark-btn.red {
        --btn-color: var(--soft-red);
      }
      bookmark-btn.blue {
        --btn-color: var(--soft-blue);
      }
      bookmark-btn.grey {
        --btn-color: var(--grayish-blue);
      }
  `;
}