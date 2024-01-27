import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('bookmark-btn')
class BookmarkBtn extends LitElement {

    @property()
    content: string;

    render() {
        return html`
            <button
                class="bookmark-btn"
            >
                ${this.content}
            </button>
        `;
    }

    static styles = css`
        .bookmark-btn {
            box-sizing: border-box;
            padding: 0.8rem 1rem;
            color: white;
            border: none;
            border-radius: 3px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            cursor: pointer;
            background-color: var( --btn-color, 'grey' );
            border: solid 1px var( --btn-color, 'grey' );
        }

        .bookmark-btn:hover {
            background-color: white;
            color: var( --btn-color, 'grey' );
            border: solid 1px var( --btn-color, 'grey' );
        }
    `;
}