import './style.css';
import { bulbasaur } from './bases/02-objects';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <h1>Hello ${bulbasaur.name} !!!</h1>
    </div>
  </div>
`
