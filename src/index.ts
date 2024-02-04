import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './components/ui';
import './components/button';
import './components/card';
import './components/accordion';
import './components/tabs';
import './components/menu';

@customElement('my-element')
class MyElement extends LitElement {
  
  render() {
    return html`
      <!-- <bookmark-ui></bookmark-ui> -->
      <div class="px-5">
        <bookmark-menu .menuItems=${['FEATURES', 'PRICING', 'CONTACT', 'LOGIN']}></bookmark-menu>
      </div>

      <section class="px-5 py-5 flex-container content-between overflow-x-hidden">
        <div class="w-50 text-container">
          <h1 class="title">
            A Simple Bookmark Manager
          </h1>
          <p class="text">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div class="flex-container content-between py-3">
            <bookmark-btn class="blue" content="Get it on Chrome"></bookmark-btn>
            <bookmark-btn class="grey" content="Get it on Firefox"></bookmark-btn>
          </div>
        </div>
        <div class="w-50">
          <div class="image-container overflow-x-hidden">
            <div class="background-form"></div>
            <div class="background-form-circle"></div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="657" height="466"><defs><filter id="a" width="118%" height="126.9%" x="-9%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><rect id="c" width="578" height="385" rx="26"/><filter id="b" width="126%" height="139%" x="-13%" y="-11.7%" filterUnits="objectBoundingBox"><feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"/></filter><linearGradient id="d" x1="99.013%" x2="2.544%" y1="71.675%" y2="29.014%"><stop offset="0%" stop-color="#151515"/><stop offset="100%" stop-color="#3D3D3D"/></linearGradient><rect id="e" width="536" height="346" y="3" rx="8"/></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(39 9)"><g transform="translate(.5 .5)"><g fill-rule="nonzero"><use fill="#000" filter="url(#b)" xlink:href="#c"/><use fill="#777" xlink:href="#c"/></g><rect width="574.23" height="381.865" x="2" y="2" fill="url(#d)" fill-rule="nonzero" rx="25"/><g transform="translate(21.03 16.303)"><rect width="471.463" height="353.756" x="33" fill="#2A2A2A" fill-rule="nonzero" opacity=".1" rx="5"/><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#e"/><g mask="url(#f)"><path fill="#5267DF" d="M-3.53 3.197h547v59h-547z"/><g transform="translate(22.47 17.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#f)"><g transform="translate(57 96)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g></g></g><g transform="translate(110 135)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 201)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 257)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 313)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>
          </div>
        </div>
       </section>
    `;
  }

  static styles = css`
      :host {
        padding: 2rem;
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
      }

      .content-between {
        justify-content: space-between; 
      }

      .image-container {
        position: relative;
        min-height: 550px;
        width: 1200px;
      }

      .overflow-x-hidden {
        overflow-x: hidden;
      }

      .text-container {
        padding-right: 5rem;
        padding-left: 3rem;
      }

      .title {
        font-size: 48px;
      }

      .text {
        color: var(--grayish-blue);
      }

      bookmark-btn.blue {
        --btn-color: var(--soft-blue);
      }

      bookmark-btn.grey {
        --btn-color: var(--grayish-blue);
      }
  
      @media (min-width: 376px) {
        .flex-container {
          flex-direction: row;
        }

        .w-50 {
          width: 50%;
        }

        .background-form, .background-form-circle {
          background-color: var(--soft-blue);
          position: absolute;
          z-index: -1;
        }

        .background-form {
          width: 100vw;
          height: 370px;
          top: 125px;
          left: 395px;
        }

        .background-form-circle {
          width: 370px;
          height: 370px;
          border-radius: 100%;
          top: 125px;
          left: 200px;
        }
      }
  `;
}