import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';


@customElement('bookmark-input-text')
class BookmarkInputText extends LitElement {

    @property({type: String})
    errorMsg: string = 'input value is incorrect';

    @property({type: String})
    placeholder: string = '';

    @state()
    showError: boolean = false;

    @state()
    value: string = '';

    @query('#bookmarkInput')
    input: HTMLElement;

    render() {
        return html`
        <div class="input-container ${this.showError ? 'error' : ''}">
            <input id="bookmarkInput" placeholder=${this.placeholder} .value=${this.value} class="bookmark-input" @change=${this.handleInputEvent} type="text" />
            <svg class="error-icon ${this.showError ? 'show' : 'hide'}" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
            <span class="error-msg ${this.showError ? 'show' : 'hide'}">${this.errorMsg}</span>
        </div>
        `;
    }

    handleInputEvent(): void {
        this.value = (this.input as HTMLInputElement).value;
        this.showError = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value) !== true && this.value !== '';

    }

    static styles = css`
        .bookmark-input {
            width: 100%;
            height: 100%;
            min-height: 1rem;
            box-sizing: border-box;
            padding: 0.7rem;
            padding-inline: 12px;
            border-radius: 6px;
            border: 1px solid var(--dark-blue, 'darkblue');

            &:focus {
                outline: solid var(--dark-blue, 'lightblue');
            }
        }

        .input-container {
            position: relative;
            width:100%;
            height: 100%;
            border-radius: 5px;

            &.error {
                background-color: var(--soft-red, 'red');
                height: initial;

                & .bookmark-input {
                    border: solid 2px var(--soft-red, 'red');

                    &:focus {
                        outline: solid var(--soft-red, 'red');
                    }
                }
            }
        }

        .error-msg {
            display: flex;
            font-size: 12px;
            color: white;
            font-weight: 500;
            width: 100%;
            overflow-y: hidden;
            padding: 0;
            transition: 0.1s ease-in-out;
            background-color: var(--soft-red, 'red');
            border-radius: 5px;
            box-sizing: border-box;

            &.show {
                max-height: 400px;
                padding: 0.7rem 0.7rem;
            }

            &.hide {
                max-height: 0;
            }
        }

        .error-icon {
            position: absolute;
            top: 0.7rem;
            right: 0.7rem;
            transition: transform 0.1s ease-in;

            &.show {
                transform: scale(1);
            }

            &.hide {
                transform: scale(0);
            }
        }
    `;
}