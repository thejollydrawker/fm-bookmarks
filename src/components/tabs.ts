import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement('bookmark-tabs')
class BookmarkTabs extends LitElement {

    @property({type: Array})
    tabs: string[];

    @state()
    activeTab: number = 0;

    render() {
        return html`
            <ul>
                ${this.tabs.map((item, index) => html`<li record='${index}' class="${this.activeTab === index ? 'active' : ''}" @click=${this.setActiveTab}>${item}</li>`)}
            </ul>
            <div class="slider" style="width: ${100/this.tabs.length}%; left: ${ 0 + (100/this.tabs.length) * this.activeTab}%"></div>
        `;
    }

    private setActiveTab(e: Event) {
        this.activeTab = parseInt((e.target as HTMLElement).getAttribute('record'));
        console.log(this.activeTab);
    }

    static styles = css`

        :host {
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
            padding: 0 0.5rem 1rem 0.5rem;
            margin: 0;
            display: flex;
            border-bottom: 1px solid lightgray;
            box-sizing: border-box;
            width: 100%;
        }
    
        li {
            all: unset;
            text-align: center;
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
    `;
}