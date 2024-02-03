import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TabItem } from "../models/TabItem";

@customElement('bookmark-tabs')
class BookmarkTabs extends LitElement {

    @property({type: Array})
    tabs: TabItem[];

    @state()
    activeTab: number = 0;

    render() {
        return html`
            <div class="tabs">
                <ul>
                    ${this.tabs.map((item, index) => html`<li record='${item.key}' class="${this.activeTab === index ? 'active' : ''}" @click=${this.setActiveTab}>${item.title}</li>`)}
                </ul>
                <div class="slider" style="width: ${100/this.tabs.length}%; left: ${ 0 + (100/this.tabs.length) * this.activeTab}%"></div>
            </div>
            <slot></slot>
        `;
    }

    private setActiveTab(e: Event) {
        const key = (e.target as HTMLElement).getAttribute('record');
        this.activeTab = this.tabs.findIndex(tab => tab.key === key);
        this.dispatchEvent(new CustomEvent('tab-change', { detail: key }));
    }

    static styles = css`
    
        :host {
            width: 100%;
        }

        .tabs {
            position: relative;
            width: 100%;
        }

        .slider {
            position: absolute;
            bottom: 0;
            border: 1px solid var(--soft-red);
            transition: 400ms ease-in-out;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            border-bottom: 1px solid lightgray;
            box-sizing: border-box;
            width: 100%;
            -webkit-user-select: none;
            user-select: none;
        }
    
        li {
            all: unset;
            text-align: center;
            padding: 0 0.5rem 1rem 0.5rem;
            flex: 1 1 0;
            width: 0;
            cursor: pointer;
            color: var(--grayish-blue);
            
            &.active {
                color: var(--dark-blue);
            }

            &:hover {
                color: var(--soft-red);
            }
        }

        ::slotted(*) {
            padding: 1rem;
        }
    `;
}