import { charmander } from './bases/04-injection';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <h1>Hello ${charmander.name}!</h1>
    </div>
  </div>
`
