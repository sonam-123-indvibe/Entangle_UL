import React, { useState } from "react";

const MediaUpload = () => {
  const [name, setName] = useState("");
  const [media, setMedia] = useState(null);
  const [type, setType] = useState("photo"); // default to photo

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!name || !media || !type) return alert("All fields are required");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("media", media);
    formData.append("type", type); // add type

    try {
      const res = await fetch("https://entangle1-api.onrender.com/media/addMedia", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert("Uploaded successfully!");
      console.log(data);

      // Reset form
      setName("");
      setMedia(null);
      setType("photo");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="text"
        placeholder="Media Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="photo">Photo</option>
        <option value="video">Video</option>
      </select>
      <input
        type="file"
        onChange={(e) => setMedia(e.target.files[0])}
        accept="image/*,video/*"
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default MediaUpload;
