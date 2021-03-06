import { Synonym } from 'types/entities';

export type Props = {
  data: Synonym[];
  className?: string;
  onSynonymSelect?: (synonym: string) => void;
};
