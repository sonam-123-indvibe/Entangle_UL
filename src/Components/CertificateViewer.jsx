import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateViewer = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  

  const fetchCertificate = async () => {
    try {
      const res = await axios.get(`https://entangen.onrender.com/certificate/getCertificate/${rollNumber}`);
      setCertificate(res.data);
      setError('');
    } catch (err) {
      setCertificate(null);
      setError('Certificate not found or course incomplete');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Find Certificate</h2>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button onClick={fetchCertificate} className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>

      {error && <p className="mt-3 text-red-500">{error}</p>}

      {certificate && (
        <div className="mt-4">
          <p><strong>Name:</strong> {certificate.name}</p>
          <p><strong>Course:</strong> {certificate.course}</p>
          <p><strong>Completion Date:</strong> {certificate.completionDate}</p>
          <p><strong>Certificate:</strong></p>
          {certificate.certificateUrl.endsWith('.pdf') ? (
            <a href={`https://entangen.onrender.com${certificate.certificateUrl}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">View PDF</a>
          ) : (
            <img src={`https://entangen.onrender.com${certificate.certificateUrl}`} alt="Certificate" className="w-full mt-2 border" />
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateViewer;
