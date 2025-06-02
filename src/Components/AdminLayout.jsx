import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Courses from './CourseManager'; // Replace with active component
// import SubCategories from './SubCategorieM';
// import Topics from './Topics';
// import Testimonials from './Testimonials';
// import '../assets/Admin.css';

import "../assets/Admin.css"
import SubCategoryManager from './SubCategoryManager';
import StudentManeger from './StudentManeger';
import AdminGallery from './AdminGallery';
import CertificateUploadForm from './CertificateUploadForm';

const AdminLayout = () => {
  const [active, setActive] = useState('courses');

  const renderContent = () => {
    switch (active) {
      case 'courses': return <Courses />;
      case 'subcategories': return <SubCategoryManager />;
      case 'StudentManeger': return <StudentManeger />;
      case 'testimonials': return <Testimonials />;
      case 'AdminGallery': return <AdminGallery />;
      case 'CertificateUploadForm': return <CertificateUploadForm />;

      // CertificateUploadForm
      default: return <Courses />;
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar setActive={setActive} />
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminLayout;
