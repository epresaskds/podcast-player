import { Category } from "./Category";
import { Artist } from "./Artist";
import { ContentType } from "./ContentType";
import { Image } from "./Image";
import { Icon } from "../Icon";
import { Price } from "./Price";
import { ReleaseDate } from "./ReleaseDate";
import { Link } from "../Link";

interface ID {
  attributes: IDAttributes;
  label: string;
}

interface IDAttributes {
  "im:id": string;
}

export default interface Entry {
  category: Category;
  id: ID;
  "im:artist": Artist;
  "im:contentType": ContentType;
  "im:image": Image[];
  "im:name": Icon;
  "im:price": Price;
  "im:releaseDate": ReleaseDate;
  link: Link;
  rights?: Icon;
  summary: Icon;
  title: Icon;
}
