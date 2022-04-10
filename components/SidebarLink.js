function SidebarLink({ Icon, text, active }) {
	return (
		<div
			className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-base space-x-4	 hoverAnimation ${
				active && 'font-bold'
			} `}
		>
			<Icon className="sm:h-8 xl:h-5"></Icon>
			<span className="hidden xl:inline ">{text}</span>
		</div>
	);
}

export default SidebarLink;
