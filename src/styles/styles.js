import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Server Mono";
  src: url("/ServerMono-Regular.otf");
}

:root {
  /* Colours */
  --background: #F9F9F9;
  --dark: #151618;
  --grey: #666666;
  --light-grey: #999999;
  --accent: #AB8011;

  --spacing-unit: 4px;
  --space8: calc(2 * var(--spacing-unit));
  --space12: calc(3 * var(--spacing-unit));
  --space16: calc(4 * var(--spacing-unit));
  --space20: calc(5 * var(--spacing-unit));
  --space24: calc(6 * var(--spacing-unit));
  --space32: calc(8 * var(--spacing-unit));
  --space40: calc(10 * var(--spacing-unit));
  --space48: calc(12 * var(--spacing-unit));
  --space64: calc(16 * var(--spacing-unit));
  --space72: calc(18 * var(--spacing-unit));
  --space80: calc(20 * var(--spacing-unit));

  /* Typography */
  --primary-font: Server Mono;

  --type12: calc(3 * var(--spacing-unit));
  --type14: calc(3.5 * var(--spacing-unit));
  --type16: calc(4 * var(--spacing-unit));

}

body {
  background: var(--background);
  color: var(--dark);
  margin: 0 auto;
  width: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font16oothing: antialiased;
  transition: all 0.3s;
}

::selection {
  background: var(--highlight);
  color: var(--dark-base);
}
::-moz-selection {
  background: var(--highlight);
  color: var(--dark-base);
}

h1 {
  font: 400 var(--type14)/1.4 var(--primary-font), monospace;
  margin: 0;
}

h2 {
  font: 400 var(--type12)/1.4 var(--primary-font), monospace;
  color: var(--grey);
  margin: 0px;
}

h3 {
  font: 400 var(--type16)/1.4 var(--primary-font), monospace;
  margin: 0px 0px var(--space8) 0px;
  color: var(--grey);
}

h4 {
  font: 400 var(--type12)/1.4 var(--primary-font), monospace;
  margin: var(--space8) 0px var(--space8) 0px;
  color: var(--light-grey);
}

p, label {
  font: 400 var(--type14)/1.4 var(--primary-font), monospace;
  vertical-align: baseline;
  margin: 0px;
}

a {
  font: 400 var(--type14)/1.4 var(--primary-font), monospace;
  color: var(--grey);
  text-decoration: none;
  transition: 0.2s all;

  :hover { 
    cursor: pointer;
  }
}

img {
  max-width: 100%;
  margin-bottom: 0px;
}
`
;

export const cardStyles = css`
    background-color: var(--background-card);
    border-radius: var(--space12);
    padding: var(--space16);
    margin: var(--space20) 0px;

    @media (min-width: 660px) {
        padding: var(--space16) var(--space20) var(--space20) var(--space20);
    }
`;

export const containerStyles = css`
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    margin: var(--space20) 0px;
`;

export const ProjectCardStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space20);
    background: rgba(0, 0, 0, 0);
    border-radius: var(--space12);
    margin: 0px -12px;
    padding: var(--space12);
    transition: 0.3s ease all;

    :hover {
        color: var(--text);
        background: var(--card-hover);
    }

    img {
        width: inherit;
    }
`;

export const heroImage = css`
    img {
        max-width: 480px;
        border-radius: var(--space8);
        margin: 0px 0px var(--space32) 0px;
    }
`;

export const imageContainer = css`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-card);
    border-radius: var(--space8);
    padding: var(--space8);

    @media {
        min-wudth: 660px;
    }
    border-radius: var(--space12);
    padding: var(--space12);
    margin: var(--space32) 0px;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

