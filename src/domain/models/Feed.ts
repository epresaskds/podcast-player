import { Icon } from "./Icon";
import { Author } from "./Author";
import Entry from "./Entry/Entry";
import { Link } from "./Link";

export interface Feed {
  author: Author;
  entry: Entry[];
  icon: Icon;
  id: Icon;
  link: Link[];
  rights: Icon;
  title: Icon;
  updated: Icon;
}
