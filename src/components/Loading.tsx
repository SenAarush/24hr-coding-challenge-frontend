import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] text-white gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
};

export default Loading;
