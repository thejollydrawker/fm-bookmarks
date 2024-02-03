import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import './button';
import './card';
import './accordion';
import './tabs';

@customElement('bookmark-ui')
class BookmarkUi extends LitElement {

  @state()
  activeTab: string = 'i1';

  render() {
    return html`
      <h2>Components:</h2>

      <h3>Buttons:</h3>
      <div class="container">
        <bookmark-btn class="red" content="Login"></bookmark-btn>
        <bookmark-btn class="blue" content="Blue"></bookmark-btn>
        <bookmark-btn class="grey" content="Gray"></bookmark-btn>
      </div>

      <h3>Cards:</h3>
      <div class="container">
        <bookmark-card .content="${{header: 'Card with image', subheader: 'Minimum version 62'}}">
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="100"><g fill="none"><path fill="#E16B5A" d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"/><path fill="#FFD464" d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"/><path fill="#74B340" d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"/><ellipse cx="50.646" cy="50.406" fill="#FFF" rx="23.064" ry="22.656"/><ellipse cx="50.638" cy="50.406" fill="#2995CC" rx="18.292" ry="17.969"/><path fill="#268CBF" d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"/></g></svg>
        </bookmark-card>
        <bookmark-card .content="${{header: 'Card wihthout image', subheader: 'subheader'}}">
        </bookmark-card>
      </div>
      
      <h3>Accordion:</h3>
      <div class="container w-50">
        <bookmark-accordion title="FAQ title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae mollitia sunt voluptate nulla nihil nam enim natus illo accusantium dolores iste quibusdam, numquam eaque assumenda soluta exercitationem! Quisquam, nostrum?</p>
        </bookmark-accordion>
      </div>

      <h3>Tabs:</h3>
      <div class="container w-50">
        <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${[{title:'Item1', key: 'i1'}, {title:'Item2', key: 'i2'}, {title:'Item3', key: 'i3'}]}>
          ${this.renderTab()}
        </bookmark-tabs>
      </div>
    `;

  }

  setActiveTab({detail}: CustomEvent) {
    this.activeTab = detail;
  }
  
  renderTab() {
    switch (this.activeTab) {
      case 'i1':
        return html`<div>Content 1</div>`;
      case 'i2':
        return html`<div>Content 2</div>`;
      case 'i3':
        return html`<div>Content 3</div>`
      default:
        return html`<div>No tab content provided</div>`
    }
    
  }

  static styles = css`

    .container {
      display: flex;
      gap: 1rem;
      margin: 1rem;
      padding-left: 2rem;
    }

    .w-50 {
      width: 50%;
    }

    h3 {
      margin: 3rem 0rem;
      padding-left: 2rem;
    }

    bookmark-card {
      width: 20%;
    }
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