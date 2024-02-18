import { LitElement, html, css } from "lit";
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
                <div class="slider" style="width: ${this.width(false)}%; left: ${this.positionX(false)}%"></div>
                <div class="mobile-slider" style="width: ${this.width(true)}%; left: ${this.positionX(true)}%; top: ${100/this.tabs.length * (this.activeTab+1)}%"></div>
            </div>
            <slot></slot>
        `;
    }

    private setActiveTab(e: Event) {
        const key = (e.target as HTMLElement).getAttribute('record');
        this.activeTab = this.tabs.findIndex(tab => tab.key === key);
        this.dispatchEvent(new CustomEvent('tab-change', { detail: key }));
    }

    private positionX(mobile: boolean): number {
        if (this.tabs.length > 1 && !mobile) {
            return (100/this.tabs.length) * this.activeTab
        }
        return 100/3;
    }

    private width(mobile: boolean): number {
        if (this.tabs.length > 1 && !mobile) {
            return 100/this.tabs.length;
        }
        return 100/3;
    }

    static styles = css`
    
        :host {
            width: 100%;
        }

        .tabs {
            position: relative;
            width: 100%;
        }

        .slider, .mobile-slider {
            position: absolute;
            bottom: 0;
            height: 0px;
            border: 1.5px solid var(--soft-red);
        }

        .slider {
            display: none;
            transition: 400ms ease-in-out;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
            -webkit-user-select: none;
            user-select: none;
        }

        ul:first-child {
            border-top: 1px solid lightgray;
        }
    
        li {
            all: unset;
            text-align: center;
            padding: 0.5rem 0.5rem 1rem 0.5rem;
            flex: 1 1 0;
            border-bottom: 1px solid lightgray;
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
            padding-top: 3rem;
            display: block;
            transition: 200ms ease-in;
        }

        @media (min-width: 769px) {
            .tabs {
                width: 60%;
                margin: auto;
            }
            ul {
                flex-direction: row;
                border-top: unset;
            }

            ul:first-child {
                border-top: unset;
            }

            .slider {
                display: block;
            }

            .mobile-slider {
                display: none
            }
        }
    `;
}