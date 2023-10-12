import { Button } from "../ui/button";

function Pagination({ setPageUi, pageUi, page, totalPage, countProducts }) {
    return (
        <nav
            className="flex items-center justify-between pt-4 smt:flex-col smt:space-y-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {page}-{totalPage} of {countProducts}
                </span>
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
                <li>
                    <Button
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => {
                            if (pageUi > 1) {
                                setPageUi(pageUi - 1);
                            }
                        }}
                    >
                        Previous
                    </Button>
                </li>
                {pageUi > 1 && (
                    <li>
                        <Button
                            onClick={() => {
                                if (pageUi > 1) {
                                    setPageUi(pageUi - 1);
                                }
                            }}
                            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            {pageUi - 1}
                        </Button>
                    </li>
                )}
                <li>
                    <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 bg-yellow-400 border border-gray-300   hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white "
                    >
                        {pageUi > totalPage ? setPageUi(1) : pageUi}
                    </a>
                </li>
                {pageUi < totalPage && (
                    <li>
                        <Button
                            onClick={() => {
                                if (pageUi < totalPage) {
                                    setPageUi(pageUi + 1);
                                }
                            }}
                            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            {pageUi + 1}
                        </Button>
                    </li>
                )}
                <li>
                    <Button
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => {
                            if (pageUi < totalPage) {
                                setPageUi(pageUi + 1);
                            }
                        }}
                    >
                        Next
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
