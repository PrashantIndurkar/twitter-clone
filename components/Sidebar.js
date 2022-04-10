import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/solid';
import SidebarLink from './SidebarLink';

import {
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	ClipboardListIcon,
	UserIcon,
	DotsCircleHorizontalIcon,
	DotsHorizontalIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
	return (
		<div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 sm:py-2 sm:px-0 fixed h-full">
			<div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
				<Image src="https://rb.gy/ogau5a" width={30} height={30} />
			</div>
			<div className="space-y-2 xl:space-y-1 xl:mt-0  xl:ml-24">
				<SidebarLink text="Home" Icon={HomeIcon} active />
				<SidebarLink text="Explore" Icon={HashtagIcon} />
				<SidebarLink text="Notifications" Icon={BellIcon} />
				<SidebarLink text="Messages" Icon={InboxIcon} />
				<SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
				<SidebarLink text="Lists" Icon={ClipboardListIcon} />
				<SidebarLink text="Profile" Icon={UserIcon} />
				<SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
				<button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-36 h-[52px] text-base font-bold shadow-md hover:bg-[#1a8cd8]">
					Tweet
				</button>
			</div>
			<div className="xl:ml-auto xl:-mr-5 text-[#d9d9d9] flex items-center justify-center hoverAnimation mt-auto mb-3">
				<img
					src="https://lh3.googleusercontent.com/a-/AOh14Gg2ZhrTdy9DhfADuCdVFdusR1ajxjPWV0uiuCbbE80=s100"
					alt="profile"
					className="h-9 w-9 sm:h-6 sm:w-6 rounded-full "
				/>
				<div className="hidden xl:inline leading-5 mx-3">
					<h4 className="font-semibold text-sm">Prashant </h4>
					<p className=" font-normal text-xs text-[#6e767d]">@prashant2weet</p>
				</div>
				<DotsHorizontalIcon className="h-5 hidden xl:inline" />
			</div>
		</div>
	);
};

export default Sidebar;
