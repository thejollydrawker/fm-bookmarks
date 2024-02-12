import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import './button';

import { globalStyles } from "../styles";

@customElement('bookmark-card')
class BookmarkCard extends LitElement {

    @property({type: Object})
    content?: { header: String, subheader: String };

    render() {
        return html`
            <article>
                <slot></slot>
                <h2>${this.content.header}</h2>
                <h3>${this.content.subheader}</h3>
                <div class="divider"></div>
                <bookmark-btn class="blue" content="Add & Install Extension"></bookmark-btn>
            </article>
        `;
    }

    static styles = [
        globalStyles,
        css`
        bookmark-btn.blue {
            --btn-color: var(--soft-blue);
            margin-top: 1rem;
            width: 75%;
            font-size: 14px;
        }

        article {
            width: 100%;
            padding: 2rem 0rem;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 8px;
            --shadow-color: 0px 5px 5px lightgray, -5px 5px 5px lightgray, 5px 5px 5px lightgray;
            box-shadow: var(--shadow-color);
        }

        h2 {
            font-size: 18px;
            font-weight: 500;
            width: fit-content;
            margin-top: 2rem;
            color: var(--dark-blue);
        }

        h3 {
            font-size: 14px;
            font-weight: 400;
            width: fit-content;
            margin: 0;
            margin-bottom: 0.5rem;
            color: var(--grayish-blue);
        }

        .divider::before {
            content: '.......................................................';
            font-size: 32px;
            opacity: 0.5;
            letter-spacing: 10px;
            color: var(--grayish-blue);
        }
    `];
}