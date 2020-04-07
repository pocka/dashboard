import { format } from 'date-fns'
import { LitElement, html, customElement, property } from 'lit-element'

/**
 * A clock component. Just displaying datetime.
 * It has no styles so it'll inherit parents' ones.
 */
@customElement('sid-clock')
export class SidClock extends LitElement {
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
   * A time to display.
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
  time = null

  /**
   * A formatter to format datetime to display.
   * This is passed as the 2nd argument for date-fns#format.
   */
  @property({type: String})format = 'HH:mm'

  render() {
    return html`
      ${format(this.value, this.format)}
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
    if (!this.time) {
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
    const t = this.time as unknown as Date

    // Is invalid datetime?
    if (isNaN(t.valueOf())) {
      this.value = new Date()
      console.warn('sid-clock: Invalid datetime passed to `time` attribute/prop.')
      return
    }

    this.value = t
  }
}
