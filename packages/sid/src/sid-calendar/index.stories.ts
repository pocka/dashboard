import { addDays, format } from 'date-fns'
import { html } from 'lit-html'
import '.'

export default {
  title: 'sid-calendar',
  component: 'sid-calendar',
  decorators: [
    story => html`
      <style>
        :root {
          --sid-fg: #222;
          --sid-bg: #fff;
        }
      </style>
      ${story()}
    `
  ]
}

export const demo = () => html`
  <sid-calendar />
`

export const fixedDate = () => html`
  <sid-calendar date="2020-01-01T00:00:00" />
`

export const specifyFormat = () => html`
  <sid-calendar format="EEEE" />
`

export const casing = () => html`
  <sid-calendar casing="lower" />
`

export const holiday = () => html`
  <sid-calendar date="2020-01-01" holidays="2020-01-01,2020-01-03" />
`
