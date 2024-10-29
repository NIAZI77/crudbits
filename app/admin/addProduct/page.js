"use client";
import React, { useState } from 'react';
import { CldUploadWidget } from "next-cloudinary";

const AddProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [para, setPara] = useState([{ title: '', description: '' }]);
  const [images, setImages] = useState("");

  const handleAddPara = () => {
    const lastPara = para[para.length - 1];
    if (lastPara.title !== '' && lastPara.description !== '') {
      setPara([...para, { title: '', description: '' }]);
    }
  };

  const handleRemovePara = (index) => {
    setPara(para.filter((_, i) => i !== index));
  };

  const handleParaChange = (index, field, value) => {
    setPara(para.map((p, i) => (i === index ? { ...p, [field]: value } : p)));
  };

  const handleUploadSuccess = (result) => {
    setImages(result.info.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      para,
      image: images
    };

    try {
      const response = await fetch('/admin/api/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      alert('Product added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPara([{ title: '', description: '' }]);
    setImages("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {images && (
          <div className="mt-4">
            <p className="font-bold block text-sm text-slate-600">Uploaded Image:</p>
            <div className="flex flex-wrap">
              <div className="w-1/4 p-2">
                <img
                  src={images}
                  alt="Uploaded Product"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-2">
          <label className="font-bold block text-sm text-slate-600">Image</label>
          <div className="text-center border-2 border-slate-600 text-lg py-1 font-bold hover:text-white hover:bg-slate-600 transition-all">
            <CldUploadWidget
              uploadPreset="preset"
              onSuccess={handleUploadSuccess}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={open}
                >
                  {images.length !== 0 ? "Change Product Image" : "Upload Product Image"}
                </button>
              )}
            </CldUploadWidget>
          </div>
        </div>
        <h2 className='text-xl text-center py-4 font-bold'>Paragraph</h2>
        {para.map((p, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`para-title-${index}`}>Title</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`para-title-${index}`}
              type="text"
              value={p.title}
              onChange={(e) => handleParaChange(index, 'title', e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`para-description-${index}`}>Description</label>
            <textarea
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`para-description-${index}`}
              value={p.description}
              onChange={(e) => handleParaChange(index, 'description', e.target.value)}
            />
            {index > 0 && (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleRemovePara(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddPara}
        >
          Add Para
        </button>
        <button
          className="my-10 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;