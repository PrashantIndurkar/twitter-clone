import { SparklesIcon } from '@heroicons/react/outline';
import React from 'react';
import Input from './Input';

const Feed = () => {
	return (
		<div className="text-white flex-grow border-l border-r border-gray-700 max-w-xl sm:ml-[73px] xl:ml-[400px]">
			<div className="text-[#d9d9d9] flex items-center justify-between py-2 px-3 sticky top-0 z-50">
				<h2 className="text-sm sm:text-lg font-medium">Home</h2>
				<div className="hoverAnimation flex items-center justify-center xl:px-0 ml-auto w-9 h-9">
					<SparklesIcon className="h-5" />
				</div>
			</div>

			<Input />
		</div>
	);
};

export default Feed;
