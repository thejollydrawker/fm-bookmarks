import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('bookmark-accordion')
class BookmarkAccordion extends LitElement {

    @property()
    title: string;

    @property({type: Boolean})
    isOpen: boolean = false;

    render() {
        return html`
            <div @click=${this.toggle} class="header">
                <h3>${this.title}</h3>
                <svg class="${this.isOpen ? 'arrow-down text-red' : 'arrow-up'}" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
            </div>
            <div class="content ${this.isOpen ? 'open' : 'hidden'}">
                <slot></slot>
            </div>
        `;
    }

    private toggle(): void {
        this.isOpen = !this.isOpen;
    }

    static styles = css`

        ::slotted(*) {
            font-size: inherit;
            color: var(--grayish-blue);
            font-weight: 400;
            font-size: inherit
        }

        :host {
            width: 100%;
        }

        .content {
            transition: max-height ease-in-out 400ms;
            overflow-y: hidden;
            line-height: 2.2;

            &.open {
                max-height: 300px;
            }

            &.hidden{
                max-height: 0;
            }

        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid lightgray;
            cursor: pointer;

            & svg {
                color: #5267DF;
                transition: transform ease-in-out 500ms;

                &.arrow-up {
                    transform: rotate(0deg);
                }

                &.arrow-down {
                    transform: rotate(180deg);
                }

                &.text-red {
                    color: var(--soft-red);
                }
            }

            & h3 {
                font-size: inherit;
                font-weight: 400;
                color: var(--dark-blue);
                cursor: pointer;
                
                &:hover {
                    color: var(--soft-red);
                }
            }
        }
    
    `;
}