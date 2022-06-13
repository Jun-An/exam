export interface Profile {
  total: string;
  totalPages: string;
  page: string;
  pageSize: string;
  data: Person[];
}

export interface Person {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}
