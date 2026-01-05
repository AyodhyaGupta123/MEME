import React from 'react';

const LeftSidebar = () => {
  return (
    <>
      {/* Desktop Sidebar (Left side) */}
      <aside className="hidden md:flex w-12 bg-[#0B0E11] border-r border-[#262930] flex-col items-center py-4 gap-6 shrink-0 text-slate-500">
        <SidebarIcons />
      </aside>

      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-14 bg-[#15181C] border-t border-[#262930] flex items-center justify-around z-50 text-slate-500 px-4">
        <SidebarIcons isMobile />
      </div>
    </>
  );
};

// Reusable icons component to avoid code duplication
const SidebarIcons = ({ isMobile }) => (
  <>
    <a href="#" className="text-[#FCD535] flex flex-col items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-5 sm:h-5">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
      </svg>
      {isMobile && <span className="text-[10px]">Charts</span>}
    </a>

    <a href="#" className="hover:text-white transition-colors flex flex-col items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-5 sm:h-5">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
      {isMobile && <span className="text-[10px]">Orders</span>}
    </a>

    {/* Mobile only extra items */}
    {isMobile && (
      <>
        <a href="#" className="hover:text-white transition-colors flex flex-col items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          <span className="text-[10px]">Trade</span>
        </a>
        <a href="#" className="hover:text-white transition-colors flex flex-col items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span className="text-[10px]">Profile</span>
        </a>
      </>
    )}
  </>
);

export default LeftSidebar;