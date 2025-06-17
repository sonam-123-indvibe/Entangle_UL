import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsCurrencyRupee } from "react-icons/bs";
import axios from 'axios';
import { FaClock, FaLanguage, FaCertificate, FaUserTie } from 'react-icons/fa';
import { MdOutlineAccessTime } from "react-icons/md";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import '../assets/SubCat.css';
import bgimg from '../assets/binary.jpg';
import Nav from "./Nav";

const SubcategoryDetail = () => {
  const { id } = useParams();
  const [subcategory, setSubcategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        const res = await axios.get(`https://entangle1-api.onrender.com/api/getsubCaterory/${id}`);
        setSubcategory(res.data);
      } catch (err) {
        console.error("Failed to fetch subcategory details", err);
      }
    };
    fetchSubcategory();
  }, [id]);

  const handleDownloadPDF = async () => {
    const input = pdfRef.current;
    const buttons = input.querySelectorAll('button');

    // Hide buttons during capture
    buttons.forEach(btn => btn.style.display = 'none');

    window.scrollTo(0, 0);
    await new Promise(resolve => setTimeout(resolve, 300));

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      scrollY: 0,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${subcategory.name}_Details.pdf`);

      // Show buttons again
      buttons.forEach(btn => btn.style.display = 'inline-block');
    });
  };

  if (!subcategory) return <div className="text-center py-5">Loading...</div>;

  return (
    <>
      <Nav />
      <div
        className="subcat-background"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="subcat-overlay">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-8">
                <div className="card p-4 shadow-lg subcat-card">
                  <div className="text-center mb-4">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="img-fluid subcat-image"
                      style={{ width: '190px', objectFit: 'contain' }}
                    />
                    <h2 className="pt-3">{subcategory.name}</h2>
                    <p>{subcategory.description}</p>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => setShowModal(true)}
                    >
                      View Full Details & Download PDF
                    </button>
                  </div>

                  <h4 className="mb-3">Inside the Course</h4>
                  <ul className="list-group vertical-topic-list">
                    {subcategory.topics.map((topic, index) => (
                      <li key={index} className="list-group-item topic-item">
                        <Link to={`/topic/${topic._id}`} className='Topic text-decoration-none'>
                          {topic.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mt-5">
                  <div className="table-responsive">
                    <div className="course-feature">
                      <h3>Course Feature</h3>
                    </div>
                    <table className="table table-bordered custom-vertical-table">
                      <tbody>
                        <tr>
                          <th className='font feature-table'><MdOutlineAccessTime style={{ fontSize: "40px" }} /> Duration</th>
                          <td className='t-data'>{subcategory.duration}</td>
                        </tr>
                        <tr>
                          <th className='font feature-table'><FaLanguage style={{ fontSize: "40px" }} /> Language</th>
                          <td className='t-data'>English / Hindi</td>
                        </tr>
                        <tr>
                          <th className='font feature-table'><FaCertificate style={{ fontSize: "40px" }} /> Certificate</th>
                          <td className='t-data'>Yes</td>
                        </tr>
                        <tr>
                          <th className='font feature-table'><FaUserTie style={{ fontSize: "40px" }} /> Expert Trainer</th>
                          <td className='t-data'>Yes</td>
                        </tr>
                        <tr>
                          <th className='font feature-table'><FaClock style={{ fontSize: "40px" }} /> Flexible Timing</th>
                          <td className='t-data'>Yes</td>
                        </tr>
                        <tr>
                          <th className='font feature-table'> <BsCurrencyRupee style={{ fontSize: "40px" }} />Fees</th>
                          <td className='t-data'>₹{subcategory.fees}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {showModal && (
            <div
              className="modal fade show"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}
              onClick={() => setShowModal(false)}
            >
              <div
                className="modal-dialog modal-lg modal-fullscreen"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content p-4" ref={pdfRef} style={{ backgroundColor: 'white', color: 'black' }}>
                  <div className="modal-header">
                    <h5 className="modal-title">{subcategory.name} - Full Details</h5>
                    <button className="btn btn-success ms-auto" onClick={handleDownloadPDF}>
                      Download PDF
                    </button>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className='text-dark'><strong>Description:</strong> {subcategory.description}</p>
                    <p className='text-dark'><strong>Duration:</strong> {subcategory.duration}</p>
                    <h5>Topics & Subtopics</h5>
                    {subcategory.topics.map((topic) => (
                      <div key={topic._id} style={{ marginBottom: '1rem' }}>
                        <h6>{topic.title}</h6>
                        <p>{topic.description}</p>
                        {topic.subtopics && topic.subtopics.length > 0 ? (
                          <ul>
                            {topic.subtopics.map((subtopic) => (
                              <li key={subtopic._id}>
                                <strong>{subtopic.title}</strong>
                              </li>
                            ))}
                          </ul>
                        ) : <p>No Subtopics</p>}
                        <hr />
                      </div>
                    ))}
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={handleDownloadPDF}>
                      Download PDF
                    </button>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default SubcategoryDetail;
