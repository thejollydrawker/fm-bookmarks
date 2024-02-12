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
import * as images from './images';
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

       <bookmark-image-text class="header-banner">
        <img slot="svg" src=${images.headerImage} />
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

       <section class="features">
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
            <bookmark-card .content="${{header: 'Add to Chrome', subheader: 'Minimum version 62'}}">
              <img src=${images.chrome} />
            </bookmark-card>
            <bookmark-card .content="${{header: 'Add to opera', subheader: 'Minimum version 55'}}">
              <img src=${images.opera} />
            </bookmark-card>
            <bookmark-card .content="${{header: 'Add to Firefox', subheader: 'Minimum version 46'}}">
              <img src=${images.firefox} />
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
        <img slot="svg" src=${images.tabImage1} />
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
          <img slot="svg" src=${images.tabImage2} />
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
          <img slot="svg" src=${images.tabImage3} />
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

      .bookmark-section {
        padding: 3rem 2rem 0rem 2rem;
        margin-top: 2rem;
      }

      .cards-section {
        width: 90%;
        margin: auto;
        padding: 1rem 0;

        bookmark-card {
          width: 100%;
          margin-top: 1rem;
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
        gap: 2rem;
        padding-top: 3rem;
        padding-bottom: 2.5rem;
        margin-top: 3.5rem;

        h2, h4 {
          font-weight: 500;
          color: white;
          text-align: center;
        }

        h4 {
          order: 1;
          font-size: 12px;
          letter-spacing: 0.5rem;
        }

        h2 {
          order: 2;
        }

        form {
          order: 3;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          bookmark-btn {
            --btn-shadow: none;
          }
        }
      }

      .header-banner {
        display: block;
        margin-top: 3rem;
      }

      .features {
        margin-top: 3rem;
      }

      .tab-text {
          text-align: center;
          bookmark-btn {
          display: none;
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

        .banner {
            form {
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

          h4, h2 {
            width: 30%;
            margin: auto;
          }
        }

        .tab-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width:75%;
          margin: auto;
          text-align: start;

          p, h1 {
            margin: 0;
          }

          bookmark-btn {
            display: block;
            width: 25%;
          }
        }
      }
  `;
}