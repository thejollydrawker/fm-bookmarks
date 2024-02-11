import { LitElement, html, css } from "lit";
import { customElement, property} from "lit/decorators.js";

import './button';

export enum ImagePosition {
    left = 'left',
    right = 'right'
}

@customElement('bookmark-image-text')
class BookmarkImageText extends LitElement {

    @property({type: String})
    imagePosition: ImagePosition = ImagePosition.right;

    render() {
        return html`
        <section class="bookmark-image-text ${this.imagePosition === 'right' ? '' : 'left'}">
            <div class="image">
                <div part="image-container" class="image-container">
                    <div part="background-form" class="background-form"></div>
                    <slot name="svg"></slot>
                </div>
            </div>
            <div class="text">
                <div class="text-container">
                    <slot name="content"></slot>
                </div>
            </div>
        </section>
        `;
    }

    static styles = css`
        .bookmark-image-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            overflow-x: hidden;

            .image {
                order: 1;
                width: 100%;
            }

            .text {
                order: 2;
                width: 100%;
            }
        }

        .image-container {
            position: relative;
            min-height: 466px;
            width: 1200px;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .background-form {
            background-color: var(--soft-blue);
            position: absolute;
            z-index: -1;
            width: 1200px;
            height: 350px;
            top: 100px;
            left: 150px;
            border-radius: 370px 0 0 370px;
        }

        .bookmark-image-text.left {
            transform: scaleX(-1);

            ::slotted(*) {
                transform: scaleX(-1);
            }
        }

        @media (min-width: 376px) {
            .bookmark-image-text {
                flex-direction: row;
                padding-left: 4rem;
                padding-right: 4rem;
                
                .image {
                    order: 2;
                    width: 50%;
                }

                .text {
                    order: 1;
                    width: 50%;
                }
            }
        }
    `;
}