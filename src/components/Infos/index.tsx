import { FaShoppingCart, FaBox } from "react-icons/fa";

import Coffe from '../../assets/Imagem.svg';
import { Information } from './Information';

import './styles.css';

export function Infos() {
  return (
    <section>
      <div className="content">
        <div className="infos">
          <h2>
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </span>

          <div className="marketing">
            <Information
              backgroundColor='var(--primary-color)'
              icon={<FaShoppingCart />}
              text='Compra simples e segura'
            />

            <Information
              backgroundColor='var(--text)'
              icon={<FaBox />}
              text='Embalagem mantém o café intacto'
            />

            <Information
              backgroundColor='var(--secondary-color)'
              icon={<FaShoppingCart/>}
              text='Entrega rápida e rastreada'
            />

            <Information
              backgroundColor='var(--primary-color)'
              icon={<FaShoppingCart/>}
              text='Compra simples e segura'
            />
          </div>
        </div>

        <img src={Coffe} alt="coffe" />
      </div>
    </section>
  )
}
