import { Rel, Type } from "./Entry/Headers";

export interface Link {
  attributes: LinkAttributes;
}

interface LinkAttributes {
  href: string;
  rel: Rel;
  type?: Type;
}
