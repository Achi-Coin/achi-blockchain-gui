const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Achi {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const achi_formatter = (value, unit) => new Achi(value, unit);

achi_formatter.convert = convert;
achi_formatter.setDisplay = units.setDisplay;
achi_formatter.setUnit = units.setUnit;
achi_formatter.getUnit = units.getUnit;
achi_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const sten_to_achi = (sten) => {
  return achi_formatter(Number.parseInt(sten), 'sten').to('achi').value();
};

export const achi_to_sten = (achi) => {
  return achi_formatter(Number.parseFloat(Number(achi)), 'achi')
    .to('sten')
    .value();
};

export const sten_to_achi_string = (sten) => {
  return achi_formatter(Number(sten), 'sten').to('achi').toString();
};

export const sten_to_colouredcoin = (sten) => {
  return achi_formatter(Number.parseInt(sten), 'sten')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_sten = (colouredcoin) => {
  return achi_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('sten')
    .value();
};

export const sten_to_colouredcoin_string = (sten) => {
  return achi_formatter(Number(sten), 'sten').to('colouredcoin').toString();
};
