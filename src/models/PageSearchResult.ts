export class PageSearchResult<TEntity> {
    page: number = 0;
    results: TEntity[] = [];
    total_pages: number = 0;
}
