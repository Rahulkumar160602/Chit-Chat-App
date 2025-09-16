import { User } from '@/context/AppContext';
import { MenuIcon, UserCircle } from 'lucide-react';
import React from 'react';

interface ChatHeaderProps {
  user: User | null;
  setSidebarOpen: (open: boolean) => void;
  isTyping: boolean;
}

const ChatHeader = ({ user, setSidebarOpen, isTyping }: ChatHeaderProps) => {
  return (
    <>
      {/* mobile menu toggle */}
      <div className="sm:hidden fixed top-4 right-4 z-30">
        <button
          className="p-3 bg-gray-800 rounded-lg shadow-lg text-gray-300 hover:bg-gray-700 transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="w-5 h-5 text-gray-200" />
        </button>
      </div>

      {/* chat header */}
      <div className="mb-6 bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="relative">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white ">
                  <UserCircle className="w-8 h-8 text-gray-300" />
                </div>
                {/* online user setup */}
              </div>
              {/* user info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-bold text-white truncate">
                    {user.name}
                  </h2>
                </div>
                {isTyping && (
                  <p className="text-sm text-green-400">typing...</p>
                )}
              </div>
              {/* to show typing status */}
            </>
          ) : (
            <div className='filex items-center gap-4'>
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white ">
                    
                    <UserCircle className="w-8 h-8 text-gray-300" />
                    </div>
                    <div >
                        <h2 className='text-2xl font-bold text-gray-400'>
                            Select a user to start Conversation
                        </h2>   
                        <p className='text-sm text-gray-500 mt-1'>
                            Choose a user from the sidebar to begin chatting
                        </p>
                    
                    </div>
            </div>
               ) }
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
