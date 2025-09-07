import React, { useState, useEffect, useRef } from 'react';

const CommunicationSocial = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const chatsRef = useRef(null);
  const socialRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio (most visible)
        let mostVisible = entries.reduce((prev, current) => {
          return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
        });
        
        // Only update if the most visible section has a reasonable intersection ratio
        if (mostVisible.intersectionRatio > 0.1) {
          const id = mostVisible.target.getAttribute('data-section');
          setActiveTab(id);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (chatsRef.current) observer.observe(chatsRef.current);
    if (socialRef.current) observer.observe(socialRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);

    return () => {
      if (chatsRef.current) observer.unobserve(chatsRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
      if (eventsRef.current) observer.unobserve(eventsRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const refs = {
      'chats': chatsRef,
      'social': socialRef,
      'events': eventsRef
    };
    
    if (refs[sectionId]?.current) {
      refs[sectionId].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main heading with icon - positioned above everything */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-black">Communication & Social</h2>
        </div>

        {/* Navigation and Content Section */}
        <div className="flex items-start justify-between">
          {/* Left side - Single Navigation menu - STICKY */}
          <div className="flex-1 max-w-md sticky top-24">
            <nav className="space-y-6">
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${activeTab === 'chats' ? 'text-black font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
                onClick={() => scrollToSection('chats')}
              >
                <div className={`text-xl pb-2 inline-block transition-all duration-300 ${activeTab === 'chats' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}>
                  Chats
                </div>
                <div className={`absolute -bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeTab === 'chats' ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
              </div>
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${activeTab === 'social' ? 'text-black font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
                onClick={() => scrollToSection('social')}
              >
                <div className={`text-xl pb-2 inline-block transition-all duration-300 ${activeTab === 'social' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}>
                  Social walls
                </div>
                <div className={`absolute -bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeTab === 'social' ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
              </div>
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${activeTab === 'events' ? 'text-black font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
                onClick={() => scrollToSection('events')}
              >
                <div className={`text-xl pb-2 inline-block transition-all duration-300 ${activeTab === 'events' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}>
                  Events
                </div>
                <div className={`absolute -bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeTab === 'events' ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
              </div>
            </nav>
          </div>

          {/* Right side - Scrollable Content Sections */}
          <div className="flex-1 max-w-2xl ml-16 space-y-32">
            
            {/* Chats Content */}
            <div ref={chatsRef} data-section="chats" className="space-y-12">
              {/* Main heading */}
              <div>
                <h3 className="text-5xl font-bold text-black mb-4">
                  Chats. <span className="text-gray-400">Connect everyone.</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With both private and group chats everyone can reach each other in a quick and effective way.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Fully encrypted for maximum safety
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    One-click shift chats with people working that day
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Push notifications on messages, replies and reactions
                  </p>
                </div>
              </div>
            </div>

            {/* Social Walls Content */}
            <div ref={socialRef} data-section="social" className="space-y-12">
              {/* Main heading */}
              <div>
                <h3 className="text-5xl font-bold text-black mb-4">
                  Social walls. <span className="text-gray-400">Create a vibrant community.</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A place for everyone to share information, images, videos and polls — every department has their own.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Pin important posts
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Mute specific walls for full control
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    @mentions users for targeted communication
                  </p>
                </div>
              </div>

              {/* Social Wall Mockup */}
              <div className="mt-16">
                <div className="bg-gray-50 rounded-2xl p-8 max-w-lg">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-orange-600">WA</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Wesley Ackman</p>
                          <p className="text-sm text-gray-500">May 24, 2025 in Copenhagen</p>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Team gathering"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                        +8
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div></div>
                      <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Pin for</span>
                        <span className="text-sm font-medium text-gray-900">3 days</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Content */}
            <div ref={eventsRef} data-section="events" className="space-y-12">
              {/* Main heading */}
              <div>
                <h3 className="text-5xl font-bold text-black mb-4">
                  Events. <span className="text-gray-400">Get together.</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Have HQ or managers create events targeted just to the right people.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="m23 11-2-2-2 2" />
                      <path d="M21 9v6" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    See who is attending and who is not
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M13 8H7" />
                      <path d="M17 12H7" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Comments and mentions on all events
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-600">
                    Events are shown in the calendar
                  </p>
                </div>
              </div>

              {/* Events Mockup */}
              <div className="mt-16 flex gap-8">
                {/* Event Card */}
                <div className="bg-gray-50 rounded-2xl p-6 max-w-sm">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <h4 className="font-semibold text-gray-900">Event</h4>
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Summer party"
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs uppercase tracking-wide">
                          UPCOMING
                        </span>
                        <h3 className="text-white font-bold text-xl mt-1">Summer Party 2025</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Card */}
                <div className="bg-gray-50 rounded-2xl p-6 max-w-sm">
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Staff meeting</h4>
                      <span className="text-sm text-gray-500">JUN 8, 2025</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Emily Johnson</span>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          @All Remember we start at 18:00 tomorrow 👋
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-orange-600">12</span>
                        </div>
                      </div>
                      
                      <div className="bg-green-100 rounded-lg px-3 py-2 inline-block">
                        <span className="text-sm font-medium text-green-800">Got it, see you there.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSocial;
