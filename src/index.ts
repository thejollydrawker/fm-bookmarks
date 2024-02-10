import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import './components/ui';
import './components/button';
import './components/card';
import './components/accordion';
import './components/tabs';
import './components/menu';
import './components/input';
import './components/image-text';
import tab1 from './assets/illustration-features-tab-1.svg'; 
import tab2 from './assets/illustration-features-tab-2.svg'; 
import tab3 from './assets/illustration-features-tab-3.svg'; 
import { BookmarkTab, TabItem } from './models/TabItem';

@customElement('my-element')
class MyElement extends LitElement {

  @state()
  activeTab: BookmarkTab = BookmarkTab.BOOKMARKING;

  @state()
  faq: string[] = ['What is Bookmark?', 'How can I request a new browser?', 'Is there a mobile app?', 'What about other Chromium browsers?'];
  
  render() {
    const tabItems: TabItem[] = [{title: 'Simple Bookmarking', key: BookmarkTab.BOOKMARKING}, {title: 'Speedy Searching', key: BookmarkTab.SEARCHING}, {title: 'Easy Sharing', key: BookmarkTab.SHARING}]
    return html`
      <!-- <bookmark-ui></bookmark-ui> -->
      <bookmark-menu .menuItems=${['FEATURES', 'PRICING', 'CONTACT', 'LOGIN']}></bookmark-menu>

       <bookmark-image-text>
        <svg slot="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="657" height="466"><defs><filter id="a" width="118%" height="126.9%" x="-9%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><rect id="c" width="578" height="385" rx="26"/><filter id="b" width="126%" height="139%" x="-13%" y="-11.7%" filterUnits="objectBoundingBox"><feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"/></filter><linearGradient id="d" x1="99.013%" x2="2.544%" y1="71.675%" y2="29.014%"><stop offset="0%" stop-color="#151515"/><stop offset="100%" stop-color="#3D3D3D"/></linearGradient><rect id="e" width="536" height="346" y="3" rx="8"/></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(39 9)"><g transform="translate(.5 .5)"><g fill-rule="nonzero"><use fill="#000" filter="url(#b)" xlink:href="#c"/><use fill="#777" xlink:href="#c"/></g><rect width="574.23" height="381.865" x="2" y="2" fill="url(#d)" fill-rule="nonzero" rx="25"/><g transform="translate(21.03 16.303)"><rect width="471.463" height="353.756" x="33" fill="#2A2A2A" fill-rule="nonzero" opacity=".1" rx="5"/><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#e"/><g mask="url(#f)"><path fill="#5267DF" d="M-3.53 3.197h547v59h-547z"/><g transform="translate(22.47 17.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#f)"><g transform="translate(57 96)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g></g></g><g transform="translate(110 135)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 201)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 257)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 313)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>
        <div slot="content" class="bookmark-flex-item">
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
      </bookmark-image-text>

       <section class="bookmark-section">
        <div class="features-section">
            <h2>Features</h2>
            <p class="text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
          <div class="py-3">
            <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${tabItems}>
              <bookmark-image-text>
                ${this.renderTab()}
              </bookmark-image-text>
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

        <section class="bookmark-section">
          <div class="features-section">
            <h2>Frequently Asked Questions</h2>
            <p class="text">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
          </div>
          <div class="py-3">
            ${this.renderAccordions()}
          </div>
          <div class="more-info-button">
            <bookmark-btn class="blue" content="More info"></bookmark-btn>
          </div>
        </section>
        <section class="bookmark-section banner">
          <h2>Stay up-to-date with what we're doing</h2>
          <h4>35,000+ ALREADY JOINED</h4>
          <form class="contact-us">
            <bookmark-input-text placeholder="Enter your email address" errorMsg="Whoops, make sure it's an email"></bookmark-input-text>
            <bookmark-btn class="red" content="Contact us"></bookmark-btn>
          </form>
        </section>
        <footer>
          <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#FFF" fill-rule="nonzero"/><g><circle fill="#FFF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#242A45"/></g></g></svg>
        </footer>
    `;
  }

  setActiveTab({detail}: CustomEvent) {
    this.activeTab = detail;
  }

  renderTab() {
    switch (this.activeTab) {
      case BookmarkTab.BOOKMARKING:
        return html`
        <img slot="svg" src=${tab1} />
        <div slot="content" class="text-container">
          <h1 class="title">
            A Simple Bookmark Manager
          </h1>
          <p class="text">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </p>
        </div>
        `;
      case BookmarkTab.SEARCHING:
        return html`
          <img slot="svg" src=${tab2} />
          <div slot="content" class="text-container">
            <h1 class="title">
              Intelligent search
            </h1>
            <p class="text">
              Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
        `;
      case BookmarkTab.SHARING:
        return html`
          <img slot="svg" src=${tab3} />
          <div slot="content" class="text-container">
            <h1 class="title">
              Share your bookmarks
            </h1>
            <p class="text">
            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
            </p>
          </div>
        `;
      default:
        return html`<div>No tab content provided</div>`
    }
  }

  renderAccordions() {
    return this.faq.map(q => {
        return html`
        <div class="accordion-container">
          <bookmark-accordion .title=${q}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae mollitia sunt voluptate nulla nihil nam enim natus illo accusantium dolores iste quibusdam, numquam eaque assumenda soluta exercitationem! Quisquam, nostrum?</p>
          </bookmark-accordion>
        </div>
        `;
    })
  }

  static styles = css`
      :host {
        padding: 2rem 2rem 0rem 2rem;
        font-size: 14px;
      }

      .px-5 {
        padding-left: 5rem;
        padding-right: 5rem;
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

      .accordion-container {
        display: flex;
        width: 90%;
        margin: auto;
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

      .overflow-x-hidden {
        overflow-x: hidden;
      }

      .text-container {
        text-align: center;
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

      bookmark-btn {
        &.blue {
          --btn-color: var(--soft-blue);
          width: 100%;
        }
        &.grey {
          --btn-color: var(--grayish-blue);
          width: 100%;
        }
        &.red {
          --btn-color: var(--soft-red);
          width: 100%;
        }
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

      .cards-section {
        width: 90%;
        margin: auto;
        padding: 1rem 0;

        bookmark-card {
          width: 100%;
        }
      }

      .more-info-button {
        width: fit-content;
        margin: auto;

        bookmark-btn {
          --padding-x: 2rem;
        }
      }

      .banner {
        background-color: var(--soft-blue);
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;

        h2, h4 {
          font-weight: 500;
          color: white;
          text-align: center;
        }

        h4 {
          order: 1;
        }

        h2 {
          order: 2;
        }

        form {
          order: 3;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }

      footer {
        background-color: var(--dark-blue);
        width: 100%;
        padding: 2rem 0;
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
          padding-left: 4rem;
          padding-right: 4rem;
        }

        .features-section {
          width: 40%;
          margin-left: auto;
          margin-right: auto;
        }

        .cards-section {
          width: 70%;

          bookmark-card {
            width: 30%;

            &:nth-of-type(2) {
              margin-top: 2.5rem;
            }

            &:nth-of-type(3) {
              margin-top: 5rem;
            }
          }
        }

        .text-container {
          padding-right: 5rem;
          padding-left: 3rem;
        }

        .accordion-container {
          width: 60%;
        }
      }
  `;
}