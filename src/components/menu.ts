import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import './button';


@customElement('bookmark-menu')
class BookmarkMenu extends LitElement {

    @property()
    title: string | null;

    @property({type: Array})
    menuItems: string[] = [];

    @state()
    isOpen: boolean = false;

    render() {
        const mql = window.matchMedia("(max-width: 375px)");
        //close mobile menu if the screen size changes
        mql.onchange = (e) => {
            if (!e.matches) {
                this.isOpen = false;
            }
        };

        return html`
            <nav>
                <div class="menu">
                    <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#242A45" fill-rule="nonzero"/><g><circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg>
                
                    <div class="hamburguer" @click=${this.toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>
                    </div>
                    <ul class="desktop-menu">
                        ${this.renderList()}
                    </ul>
                </div>
                <div class="mobile" .hidden=${!this.isOpen}>
                    <div class="overlay"></div>
                    <div class="mobile-menu">
                        <div class="flex-container-space">
                            <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#FFF" fill-rule="nonzero"/><g><circle fill="#FFF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#242A45"/></g></g></svg>
                            <svg @click=${this.toggle} class="close-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>
                        </div>   
                        <ul>
                            ${this.renderList()}
                        </ul>
                    </div>
                    <div class="flex-container-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#FFF" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>
                    </div>
                </div>
            </nav>
        `;
    }

    toggle(e: Event): void {
        this.isOpen = !this.isOpen;
    }

    renderList() {
        return this.menuItems.map((item, index) => {
            if(index !== this.menuItems.length-1) 
                return html`<li><a class="menu-item">${item}</a></li>`; 
            else 
                return html `<bookmark-btn class="${this.isOpen ? 'white' : 'red'}" content="${item}" .fill=${!this.isOpen}></bookmark-btn>`;
            }
        )
    }

    static styles = css`
        a, li, ul {
            all: unset;
        }

        :host {
            width: 100%;
            display: block;
            font-size: 16px;
        }

        .desktop-menu {
            display: none;
        }

        .mobile {
            z-index: 1;
        }

        .menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 3rem;

            & svg {
                width: 100%;
            }
        }

        .overlay {
            background-color: var(--dark-blue);
            opacity: 0.9;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        ul{
            display: flex;
            gap: 1.5rem;
            align-items: center;
            width: 100%;
            justify-content: space-evenly;
        }

        .mobile-menu {
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem 1rem;
            box-sizing: border-box;
            z-index: 1;

            & ul {
                flex-direction: column;
                width: 100%;
                max-width: 100%;
                margin-top: 2rem;

                & li {
                    border-top: white solid 0.5px;
                    color: white;
                    width: 100%;
                    text-align: center;
                    padding: 1.5rem 0rem;
                }
            }

            & bookmark-btn {
                --btn-shadow: none;
            }
        }

        .hamburguer {
            cursor: pointer;
        }

        .flex-container-space {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flex-container-icons {
            position: fixed;
            bottom: 10%;
            left: 0%;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            display: flex;
            z-index: 1;
        }

        .close-icon {
            cursor: pointer;
        }

        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 7px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: rgba(0,0,0,.5);
            -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
            box-shadow: 0 0 1px rgba(255,255,255,.5);
        }

        li {
            text-transform: uppercase;
            cursor: pointer;
            color: var(--dark-blue);
        }

        li:hover {
            color: var(--soft-red);
        }

        bookmark-btn.red {
            --btn-color: var(--soft-red);
            --padding-x: 2rem;
        }
        
        bookmark-btn.white {
            --btn-color: white;
            width: 100%;
        }

        @media (min-width: 769px) {
            .hamburguer {
                display: none;
            }

            .overlay {
                display: none;
            }

            .desktop-menu {
                display: flex;
            }
        }
    `;

}