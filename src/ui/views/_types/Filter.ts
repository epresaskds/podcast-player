export interface FilterProps {
  placeholder: string;
  value: string;
  onFilter: (event: React.FormEvent<HTMLInputElement>) => void;
}
