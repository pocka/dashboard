import { html } from 'lit-html'
import '.'

export default {
  title: 'sid-clock',
  component: 'sid-clock'
}

export const demo = () => html`
  <sid-clock />
`

export const fixedTime = () => html`
  <sid-clock time="2020-01-01T00:00:00" />
`

export const specifyFormat = () => html`
  <sid-clock format="hh:mm:ss aaa" />
`
