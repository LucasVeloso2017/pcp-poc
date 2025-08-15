'use client'
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  maxVisiblePages?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange = () => {},
  maxVisiblePages = 5,
  className
}) => {
  const getVisiblePages = (): number[] => {
    const pages: number[] = [];
    const half = Math.floor(maxVisiblePages / 2);
    
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePrevious = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number): void => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const navButtonBaseClasses = 'cursor-pointer rounded-[8px] p-3 shadow-[0px_3px_6px_0px_#3333331A]';
  
  const pageButtonBaseClasses = 'cursor-pointer rounded-[8px] shadow-[0px_3px_6px_0px_#3333331A] font-dm-sans font-medium text-[20px] leading-[120%] transition-all duration-200';

  return (
    <div className={twMerge('flex flex-row justify-center items-center self-center gap-4 py-[40px]', className)}>
     
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={twMerge(
         'min-w-9.5 min-h-9.5',
          navButtonBaseClasses,
          currentPage === 1 
            ? 'bg-[#3333331A] text-[#ABABAB] cursor-not-allowed' 
            : 'bg-[#3333331A] text-[#666666] hover:bg-[#278AFF] hover:text-white'
        )}
        aria-label='Página anterior'
      >
        <PiCaretLeft className='text-[#ABABAB]' />
      </button>

      {visiblePages.map((page: number) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          aria-label={`Acesso à página ${page}`}
          className={twMerge(
            'min-w-9.5 min-h-9.5',
            pageButtonBaseClasses,
            page === currentPage
              ? 'bg-[#278AFF] text-white'
              : 'bg-[#3333331A] text-[#666666] hover:bg-[#278AFF] hover:text-white'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={twMerge(
         'min-w-9.5 min-h-9.5',
          navButtonBaseClasses,
          currentPage === totalPages 
            ? 'bg-[#3333331A] text-[#ABABAB] cursor-not-allowed' 
            : 'bg-[#3333331A] text-[#666666] hover:bg-[#278AFF] hover:text-white'
        )}
        aria-label='Próxima página'
      >
        <PiCaretRight className='text-[#ABABAB]' />
      </button>
    </div>
  );
};