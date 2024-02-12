import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('bookmark-btn')
class BookmarkBtn extends LitElement {

    @property()
    content: string;

    @property({type: Boolean})
    fill: boolean = true;

    render() {
        return html`
            <button
                class="bookmark-btn ${this.fill ? '' : 'no-fill'}"
            >
                ${this.content}
            </button>
        `;
    }

    static styles = css`
        .bookmark-btn {
            box-sizing: border-box;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            padding-right: var(--padding-x, 0.5rem);
            padding-left: var(--padding-x, 0.5rem);
            color: white;
            border: none;
            border-radius: 3px;
            font-family: inherit;
            font-size: inherit;
            font-weight: 500;
            width: 100%;
            cursor: pointer;
            background-color: var( --btn-color, grey );
            border: solid 1px var( --btn-color, grey );
            --box-shadow: 5px 5px 5px var( --btn-shadow, lightgrey );
            box-shadow: var(--box-shadow);
        }

        .bookmark-btn.no-fill{
            background-color: unset;
        }

        .bookmark-btn:not(.no-fill):hover {
            background-color: white;
            color: var( --btn-color, grey );
            border: solid 1px var( --btn-color, grey );
        }
    `;
}