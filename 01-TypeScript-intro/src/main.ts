import './style.css';
import { name, age } from './bases/01-types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <h1>Soy ${name}, tengo ${age} años</h1>
    </div>
  </div>
`
