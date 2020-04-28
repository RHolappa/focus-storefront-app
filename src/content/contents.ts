export interface Link {
  name: string;
  url: string;
}

export interface Model {
  name: string;
  startYear: number;
  endYear?: number;
  type: string;
  description: string;
  tags: string[];
  roles: string[];
  links: Link[];
  images: string[];
}

