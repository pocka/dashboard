import { addDays, isSaturday, isSunday, isSameDay, format } from 'date-fns'
import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('sid-calendar')
export class SidCalendar extends LitElement {
  /**
   * An ID of the current setInterval, for cancelling.
   */
  #timerRef: ReturnType<typeof setInterval> | null = null

  /**
   * Internal datetime value.
   * @type {Date}
   */
  @property({ attribute: false }) value: Date = new Date()

  /**
   * A date to display.
   * The value must be able to be parsed by JavaScript's `Date` constructor.
   * Using ISO-8601 datetime string is recommended.
   *
   * If you omit the property/attribute, the component uses current date and
   * auto-increment it.
   *
   * @type {Date|string|null|undefined}
   */
  @property({
    converter: {
      fromAttribute(value: string | null): Date | null {
        if (!value) {
          return null
        }

        return new Date(value)
      },
      toAttribute(value: Date | null) {
        if (!value) {
          return void 0
        }

        return value.toISOString()
      }
    }
  })
  date = null

  /**
   * A formatter to format datetime to display.
   * This is passed as the 2nd argument for date-fns#format.
   */
  @property({type: String})format = 'EEE'

  /**
   * Which casing methods to use.
   * Available values:
   * - upper ... Upper case
   * - lower ... Lower case
   * - capitalize ... Capitalize
   * - none ... Do not apply casing function
   */
  @property({type: String})casing = 'upper'

  /**
   * A list of holidays.
   * Each items must be able to be parsed by JavaScript's `Date` constructor.
   * Use comma as separator for an attribute string.
   *
   * @type {Date[]|string[]|null|undefined}
   */
  @property({
    converter: {
      fromAttribute(value: string | null): Date[] | null {
        if (!value) {
          return null
        }

        return value.split(',').map(fragment => new Date(fragment.trim()))
      },
      toAttribute(value: Date[] | null) {
        if (!value) {
          return void 0
        }

        return value.map(date => format(date, 'yyyy-MM-dd')).join(',')
      }
    }
  })
  holidays = []

  static get styles() {
    return css`
      :host {
        --color-fg: var(--sid-fg, #fff);
        --color-bg: var(--sid-bg, #222);
        --unit: var(--sid-unit, 8px);

        display: flex;
      }

      .item {
        position: relative;
        display: block;
        padding: calc(var(--unit) * 1.5) calc(var(--unit) * 1.5);
        box-sizing: border-box;

        border-radius: 1px;
      }

      .item:first-of-type {
        background-color: var(--color-fg);
        color: var(--color-bg);
      }
      .item:nth-of-type(2) {
        opacity: 0.6;
      }
      .item:nth-of-type(3) {
        opacity: 0.2;
      }

      .item[data-holiday="true"]::after {
        content: '';

        position: absolute;
        display: block;
        width: var(--unit);
        height: var(--unit);
        left: 50%;
        bottom: calc(var(--unit) * 0.5);

        background-color: currentColor;
        border-radius: 50%;

        transform: translateX(-50%);
      }

      .item[data-casing="upper"] {
        text-transform: uppercase;
      }
      .item[data-casing="lower"] {
        text-transform: lowercase;
      }
      .item[data-casing="capital"] {
        text-transform: capitalize;
      }
    `
  }

  render() {
    const dates = [
      this.value,
      addDays(this.value, 1),
      addDays(this.value, 2)
    ]

    return html`
      ${dates.map(date => {
        const isHoliday = isSaturday(date) ||
          isSunday(date) ||
          ((this.holidays ?? []) as Date[]).some(
            d => isSameDay(d, date)
          )

        return html`
          <span
            class="item"
            data-casing=${this.casing}
            data-holiday=${isHoliday}
          >
            ${format(date, this.format)}
          </span>
        `
      })}
    `
  }

  connectedCallback() {
    super.connectedCallback()

    this.#registerTimer()
  }

  disconnectedCallback() {
    super.disconnectedCallback()

    this.#clearTimer()
  }

  updated(changedAttributes: Map<string, any>) {
    // Init timer scheduling and other things.
    // NOTE: Please add a check at here when you add properties affect whether to use timer
    if (changedAttributes.has('time') || changedAttributes.has('format')) {
      this.#registerTimer()
    }
  }

  #clearTimer = () => {
    if (this.#timerRef === null) {
      return
    }

    clearInterval(this.#timerRef)
  }

  #registerTimer = () => {
    if (!this.date) {
      if (this.#timerRef !== null) {
        return
      }

      // Triggers a function that updates current time every seconds.
      this.#timerRef = setInterval(() => {
        this.value = new Date()
      }, 1000)
      return
    }

    this.#clearTimer()

    // this.time should be converted by converter.fromAttribute
    const t = this.date as unknown as Date

    // Is invalid datetime?
    if (isNaN(t.valueOf())) {
      this.value = new Date()
      console.warn('sid-calendar: Invalid datetime passed to `time` attribute/prop.')
      return
    }

    this.value = t
  }
}
