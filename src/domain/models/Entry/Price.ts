enum Currency {
  Usd = "USD",
}

enum PriceLabel {
  Get = "Get",
}

interface PriceAttributes {
  amount: string;
  currency: Currency;
}

export interface Price {
  attributes: PriceAttributes;
  label: PriceLabel;
}
