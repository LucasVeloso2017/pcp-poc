export interface PagedRequest {
  page?: number;
  pageSize?: number;
  search?: string;
  icAtivo?: boolean;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}