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
import './components/footer';
import tab1 from './assets/illustration-features-tab-1.svg'; 
import tab2 from './assets/illustration-features-tab-2.svg'; 
import tab3 from './assets/illustration-features-tab-3.svg'; 
import image1 from './assets/illustration-hero.svg'; 
import { BookmarkTab, TabItem } from './models/TabItem';
import { ImagePosition } from './components/image-text';

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
        <img slot="svg" src=${image1} />
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

       <section>
        <div class="features-section">
            <h2>Features</h2>
            <p class="text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
          <div class="py-3">
            <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${tabItems}>
              <bookmark-image-text id="tabImageText" imagePosition="${ImagePosition.left}">
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
        <bookmark-footer></bookmark-footer>
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
        <div slot="content" class="tab-text">
          <h1 class="tab-title">
            A Simple Bookmark Manager
          </h1>
          <p class="text">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </p>
          <bookmark-btn class="blue" content="More info"></bookmark-btn>
        </div>
        `;
      case BookmarkTab.SEARCHING:
        return html`
          <img slot="svg" src=${tab2} />
          <div slot="content" class="tab-text">
            <h1 class="tab-title">
              Intelligent search
            </h1>
            <p class="text">
              Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
            </p>
            <bookmark-btn class="blue" content="More info"></bookmark-btn>
          </div>
        `;
      case BookmarkTab.SHARING:
        return html`
          <img slot="svg" src=${tab3} />
          <div slot="content" class="tab-text">
            <h1 class="tab-title">
              Share your bookmarks
            </h1>
            <p class="text">
            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
            </p>
            <bookmark-btn class="blue" content="More info"></bookmark-btn>
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

      .tab-title {
        font-size: 28px;
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

      #tabImageText::part(background-form) {
          height: 300px;
      }

      #tabImageText::part(image-container) {
          min-height: 400px;
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

        .banner form {
          width: 50%;
          margin: auto;
          flex-direction: row;

          bookmark-input-text {
            width: 75%;
          }

          bookmark-btn {
            width: 25%;
          }
        }

        .tab-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width:75%;
          margin: auto;

          p, h1 {
            margin: 0;
          }

          bookmark-btn {
            width: 25%;
          }
        }
      }
  `;
}