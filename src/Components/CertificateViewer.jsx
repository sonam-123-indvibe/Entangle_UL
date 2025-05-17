import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Certificate.css'; // optional custom CSS file

const CertificateChecker = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://entangen.onrender.com/Certificate/getCertificate/${rollNumber}`);
      setCertificate(res.data);
      setError('');
    } catch (err) {
      setCertificate(null);
      setError("Certificate not found or course not completed");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center ">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">🔍 Check Your Certificate</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        {certificate && (
          <div className="mt-4 border-top pt-3">
            <h4>{certificate.name}'s Certificate</h4>
            <p><strong>Course:</strong> {certificate.course}</p>
            <p><strong>Completed On:</strong> {new Date(certificate.completionDate).toLocaleDateString()}</p>
            
            <div className="certificate-preview mb-3">
              <img
                src={`https://entangen.onrender.com${certificate.certificateUrl}`}
                alt="Certificate"
                className="img-fluid rounded border"
              />
            </div>

            <a
              href={`https://entangen.onrender.com${certificate.certificateUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              View Full Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateChecker;
