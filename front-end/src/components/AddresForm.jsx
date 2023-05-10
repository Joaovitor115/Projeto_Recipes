import React from 'react';
import PropTypes from 'prop-types';

export default function AddresForm({ sellers, address, number, handleCheckout }) {
  return (
    <div className="address-form-container">
      <h3>Detalhes e Endereço para Entrega</h3>
      <div className="addres-form">
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            aria-label="seller"
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
          >
            {
              sellers
                .map(({ name }) => <option key={ name } value={ name }>{name}</option>)
            }
          </select>
        </label>
        <label htmlFor="input-address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="input-address"
            name="address"
            value={ address }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
            id="address-number"
            name="number"
            value={ number }
          />
        </label>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ handleCheckout }
      >
        Finalizar Pedido

      </button>
    </div>
  );
}

AddresForm.propTypes = PropTypes.shape({}).isRequired;
