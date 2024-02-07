import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import './components/ui';
import './components/button';
import './components/card';
import './components/accordion';
import './components/tabs';
import './components/menu';
import { BookmarkTab, TabItem } from './models/TabItem';

@customElement('my-element')
class MyElement extends LitElement {

  @state()
  activeTab: BookmarkTab = BookmarkTab.BOOKMARKING;
  
  render() {
    const tabItems: TabItem[] = [{title: 'Simple Bookmarking', key: BookmarkTab.BOOKMARKING}, {title: 'Speedy Searching', key: BookmarkTab.SEARCHING}, {title: 'Easy Sharing', key: BookmarkTab.SHARING}]
    return html`
      <!-- <bookmark-ui></bookmark-ui> -->
      <div class="">
        <bookmark-menu .menuItems=${['FEATURES', 'PRICING', 'CONTACT', 'LOGIN']}></bookmark-menu>
      </div>

      <section class="bookmark-section flex-container content-between overflow-x-hidden">
        <div class="bookmark-flex-item">
          <div class="text-container">
            <h1 class="title">
              A Simple Bookmark Manager
            </h1>
            <p class="text">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
          </div>
          <div class="buttons-get-extension">
            <bookmark-btn class="blue" content="Get it on Chrome"></bookmark-btn>
            <bookmark-btn class="grey" content="Get it on Firefox"></bookmark-btn>
          </div>
        </div>
        <div class="bookmark-flex-item">
          <div class="image-container overflow-x-hidden">
            <div class="background-form"></div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="657" height="466"><defs><filter id="a" width="118%" height="126.9%" x="-9%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><rect id="c" width="578" height="385" rx="26"/><filter id="b" width="126%" height="139%" x="-13%" y="-11.7%" filterUnits="objectBoundingBox"><feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"/></filter><linearGradient id="d" x1="99.013%" x2="2.544%" y1="71.675%" y2="29.014%"><stop offset="0%" stop-color="#151515"/><stop offset="100%" stop-color="#3D3D3D"/></linearGradient><rect id="e" width="536" height="346" y="3" rx="8"/></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(39 9)"><g transform="translate(.5 .5)"><g fill-rule="nonzero"><use fill="#000" filter="url(#b)" xlink:href="#c"/><use fill="#777" xlink:href="#c"/></g><rect width="574.23" height="381.865" x="2" y="2" fill="url(#d)" fill-rule="nonzero" rx="25"/><g transform="translate(21.03 16.303)"><rect width="471.463" height="353.756" x="33" fill="#2A2A2A" fill-rule="nonzero" opacity=".1" rx="5"/><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#e"/><g mask="url(#f)"><path fill="#5267DF" d="M-3.53 3.197h547v59h-547z"/><g transform="translate(22.47 17.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#f)"><g transform="translate(57 96)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g></g></g><g transform="translate(110 135)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 201)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 257)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 313)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>
          </div>
        </div>
       </section>

       <section class="bookmark-section features-section">
          <h2>Features</h2>
          <p class="text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
       
          <div class="py-3">
            <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${tabItems}>
              ${this.renderTab()}
            </bookmark-tabs>
          </div>
        </section>

        <section class="bookmark-section">
          <div class="features-section">
            <h2>Download the extension</h2>
            <p class="text">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
          </div>
          
          <div class="flex-container content-between cards-section">
            <bookmark-card .content="${{header: 'Card with image', subheader: 'Minimum version 62'}}">
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="100"><g fill="none"><path fill="#E16B5A" d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"/><path fill="#FFD464" d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"/><path fill="#74B340" d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"/><ellipse cx="50.646" cy="50.406" fill="#FFF" rx="23.064" ry="22.656"/><ellipse cx="50.638" cy="50.406" fill="#2995CC" rx="18.292" ry="17.969"/><path fill="#268CBF" d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"/></g></svg>
            </bookmark-card>
            <bookmark-card .content="${{header: 'Card with image', subheader: 'Minimum version 62'}}">
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="100"><path fill="#FF9800" d="M105 50c0 28.862-23.513 50-52.5 50S0 76.588 0 47.726c0-9.043 2.33-17.59 6.392-25a.995.995 0 0 1 .23-.366C4.338 18.956 3.334 10.318 9.128 4.541c0 2.411 1.464 6.548 3.104 9.638 1.326 2.457 2.737 4.228 3.741 4 2.284-.543 10.27-.543 11.412 0 1.877-2.405 6.445-9.09 13.703-9.09-4.062 4.045-15.704 18.185 4.567 18.185h4.568L36.52 36.363s1.556 3 0 4.548c-1.732-1.732-9.128 1.862-9.128 6.815s5.296 11.363 15.98 11.363c10.683 0 7.986-4.548 13.696-4.548 5.709 0 6.844 4.548 6.844 4.548-7.855 0-13.558 9.09-22.824 9.09 4.567 3.364 7.58 4.547 13.696 4.547 15.113 0 27.392-12.225 27.392-27.274 0-6.09-2.008-11.683-5.388-16.224a27.414 27.414 0 0 1 10.96 19.498 40.554 40.554 0 0 0 1.279-10.089c0-13.683-5.84-31.776-15.98-38.637C87.655 4.358 105 18.466 105 45.452V50z"/></svg>
            </bookmark-card>
            <bookmark-card .content="${{header: 'Card with image', subheader: 'Minimum version 62'}}">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100"><path fill="#EB6060" fill-rule="evenodd" d="M48 100C21.49 100 0 77.614 0 50S21.49 0 48 0s48 22.386 48 50-21.49 50-48 50zm0-10c13.807 0 25-17.909 25-40S61.807 10 48 10 23 27.909 23 50s11.193 40 25 40z"/></svg>
            </bookmark-card>
          </div>
        </section>

        <section class="bookmark-section py-3 features-section">
          <h2>Frequently Asked Questions</h2>
          <p class="text">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
       
          <div class="py-3">
            
          </div>
        </section>
        
    `;
  }

  setActiveTab({detail}: CustomEvent) {
    this.activeTab = detail;
  }

  renderTab() {
    switch (this.activeTab) {
      case BookmarkTab.BOOKMARKING:
        return html`<div>Content 1</div>`;
      case BookmarkTab.SEARCHING:
        return html`<div>Content 2</div>`;
      case BookmarkTab.SHARING:
        return html`<div>Content 3</div>`
      default:
        return html`<div>No tab content provided</div>`
    }
  }

  static styles = css`
      :host {
        padding: 2rem;
        font-size: 14px;
      }

      .px-5 {
        padding-left: 5rem;
        padding-right: 5rem;
      }

      .py-5 {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }

      .py-3 {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .flex-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
      }

      .buttons-get-extension {
        display: flex;
        align-items: center;
        margin: 3rem 0;
        justify-content: space-between;
        gap: 1rem; 
      }

      .content-between {
        justify-content: space-between;
      }

      .image-container {
        position: relative;
        min-height: 550px;
        width: 1200px;
      }

      .background-form {
        background-color: var(--soft-blue);
        position: absolute;
        z-index: -1;
        width: 1200px;
        height: 370px;
        top: 125px;
        left: 150px;
        border-radius: 370px 0 0 370px;
      }

      .overflow-x-hidden {
        overflow-x: hidden;
      }

      .text-container {
        text-align: center;
        order: 2;
      }

      .title {
        font-size: 32px;
      }

      h2, h1 {
        font-weight: 500;
      }

      .text {
        color: var(--grayish-blue);
      }

      bookmark-btn.blue {
        --btn-color: var(--soft-blue);
        width: 100%;
      }

      bookmark-btn.grey {
        --btn-color: var(--grayish-blue);
        width: 100%;
      }

      .features-section {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }

      .bookmark-section{
        padding: 0 2rem;
        margin-top: 2rem;
      }

      .bookmark-flex-item {
        width: 100%;
      }

      .bookmark-section .bookmark-flex-item:last-of-type {
        order: 1;
      }

      .bookmark-section .bookmark-flex-item:first-of-type {
        order: 2;
      }

      bookmark-card {
        width: 100%;
      }

      .cards-section {
        width: 90%;
        margin: auto;
        padding: 1rem 0;
      }

      @media (min-width: 376px) {
        :host {
          font-size: 18px;
        }
        .title {
          font-size: 48px;
        }
        .flex-container {
          flex-direction: row;
        }

        .bookmark-section{
          padding: 0 4rem;
        }

        .bookmark-section .bookmark-flex-item:last-of-type {
          order: 2;
        }

        .bookmark-section .bookmark-flex-item:first-of-type {
          order: 1;
        }

        .bookmark-flex-item {
          width: 50%;
        }

        .features-section {
          width: 40%;
          margin-left: auto;
          margin-right: auto;
        }

        bookmark-card {
          width: 30%;
        }

        bookmark-card:nth-of-type(2) {
          margin-top: 2.5rem;
        }

        bookmark-card:nth-of-type(3) {
          margin-top: 5rem;
        }

        .cards-section {
          width: 70%;
        }

        .text-container {
          padding-right: 5rem;
          padding-left: 3rem;
        }
      }
  `;
}