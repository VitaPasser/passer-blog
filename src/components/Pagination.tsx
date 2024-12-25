'use client'
import Link from 'next/link';
import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Pagination = ({
    currentPage,
    totalPages
}: {
    currentPage: number;
    totalPages: number;
}) => {

    const getPageNumbers = () => {
        if (totalPages <= 6) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        const pages = new Set<number>();
        pages.add(1);
        pages.add(totalPages);

        for (let i = -2; i < 3; i++) {
            const page = currentPage + i;
            if (page > 1 && page < totalPages) {
                pages.add(page);
            }
        }

        return Array.from(pages).sort((a, b) => a - b);
    };

    const pagesToDisplay = getPageNumbers();

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-5 pt-5">
            <Link
                href={"/" + (currentPage - 1)}
                className={"flex flex-row gap-2 text-sm font-medium text-pale-sky items-center " + (currentPage === 1 ? "pointer-events-none" : "")}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
            >
                <GoArrowLeft className='w-5 h-5' />
                <p>
                    Previous
                </p>
            </Link>

            <div className="flex gap-[1px]">
                {pagesToDisplay.map((page, index, array) => (
                    <React.Fragment key={page}>
                        {index > 0 && page !== array[index - 1] + 1 && (
                            <span className="aspect-square items-center flex align-middle justify-center w-[40px] text-pale-sky">...</span>
                        )}
                        <Link
                            href={"/post/" + page}
                            className={`flex items-center justify-center aspect-square w-[40px] text-sm font-medium rounded-md ${page === currentPage
                                ? 'bg-purple-50 text-purple-700 dark:bg-slate-50 dark:text-slate-700'
                                : 'bg-white dark:bg-haiti text-pale-sky dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {page}
                        </Link>
                    </React.Fragment>
                ))}
            </div>

            <Link
                href={"/" + (currentPage + 1)}
                className={"flex flex-row gap-2 text-sm font-medium text-pale-sky items-center " + (currentPage === totalPages ? "pointer-events-none" : "")}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
            >
                <p>
                    Next
                </p>
                <GoArrowRight className='w-5 h-5' />
            </Link>
        </div>
    );
};

export default Pagination;
