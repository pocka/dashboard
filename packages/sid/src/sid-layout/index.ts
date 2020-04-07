import { LitElement, css, html, customElement, property } from 'lit-element'

/**
 * A layout element.
 *
 * @element
 *
 * @slot - Top area.
 * @slot secondary - Bottom area.
 */
@customElement('sid-layout')
export class SidLayout extends LitElement {
  static get styles() {
    return css`
      :host {
        --unit: var(--sid-unit, 8px);
        --color-fg: var(--sid-fg, #fff);
        --color-bg: var(--sid-bg, #222);

        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: var(--color-bg);
        color: var(--color-fg);
        overflow: hidden;
      }

      .main {
        position: absolute;
        top: 60%;
        left: 0;
        right: 0;
      }

      .line {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(100vw + 100vh);

        border-bottom: 1px solid var(--color-fg);
        transform: translate(-50%);
      }

      .main-container {
        position: absolute;
        bottom: calc(var(--unit) * 3);
        right: 10%;
      }

      .secondary-container {
        position: absolute;
        top: calc(60% + var(--unit) * 3);
        right: 10%;
      }
    `
  }

  render() {
    return html`
      <div class="container">
        <div class="main">
          <i class="line"></i>
          <div class="main-container">
            <slot />
          </div>
        </div>
        <div class="secondary-container">
          <slot name="secondary" />
        </div>
      </div>
    `
  }
}
