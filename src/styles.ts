import {css} from 'lit';

export const globalStyles = css`
    html {
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        
    }

    :host {
        --soft-blue: hsl(231, 69%, 60%);
        --soft-red: hsl(0, 94%, 66%);
        --grayish-blue: hsl(229, 8%, 60%);
        --dark-blue: hsl(229, 31%, 21%);
    }
`;