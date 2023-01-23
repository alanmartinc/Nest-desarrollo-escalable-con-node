import { charmander } from './bases/05-decorators';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <h1>Hello ${charmander.name}!</h1>
    </div>
  </div>
`
