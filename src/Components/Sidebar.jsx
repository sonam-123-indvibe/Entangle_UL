import React, { useState } from 'react';
import '../assets/Admin.css'; // Assuming styling is here

const Sidebar = ({ setActive }) => {
  const [activeTab, setActiveTab] = useState('courses');
  const [isOpen, setIsOpen] = useState(false); // Toggle sidebar on mobile

  const handleClick = (tab) => {
    setActiveTab(tab);
    setActive(tab);
    setIsOpen(false); // auto-close on mobile
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h3 className='pb-0 mb-0'>Entengle</h3>
        <h6 className='pt-0 pb-3 mt-0'>IT Solution</h6>
       
        <ul>
          <li className={activeTab === 'courses' ? 'active' : ''} onClick={() => handleClick('courses')}>Courses</li>
          <li className={activeTab === 'subcategories' ? 'active' : ''} onClick={() => handleClick('subcategories')}>Sub-Categories</li>
          <li className={activeTab === 'StudentManeger' ? 'active' : ''} onClick={() => handleClick('StudentManeger')}>StudentManeger</li>

          <li className={activeTab === 'CertificateUploadForm' ? 'active' : ''} onClick={() => handleClick('CertificateUploadForm')}>Certificate Upload Form</li>
          <li className={activeTab === 'AdminGallery' ? 'active' : ''} onClick={() => handleClick('AdminGallery')}>AdminGallery</li>
        </ul>
        {/*  */}
      </div>
    </>
  );
};

export default Sidebar;
