export const validatePageNumber = (pageNumber: string | null): number => {
    const pageNum = Number(pageNumber);
    return pageNumber && !isNaN(pageNum) && pageNum > 0 ? pageNum : 1;
};