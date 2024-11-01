import React from 'react';
import ServiceComponent from '../components/ServiceComponent';

const Page = () => {
    return (
        <div>
            <div
                className="hero max-h-96 h-screen w-full relative overflow-hidden bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('/Data-Migration-Services.jpg')` }}
            >
                <div className="w-full h-full bg-black opacity-50"></div>
                <div className="absolute inset-0 mx-auto text-white flex flex-col space-y-4 w-[80%] h-screen pt-[135px]">
                    <h1 className="mt-8 mb-4 text-4xl font-extrabold text-center">Services</h1>
                    <p className="text-md text-center">Pioneering Digital Transformation for Healthcare Excellence</p>
                </div>
            </div>
            <div className="p-2 md:py-16 py-6 md:w-[80%] w-[90%] mx-auto">
                <h2 className="h2-style font-semibold text-2xl py-3">Crudbits</h2>
                <p className="text-gray-600 leading-6">
                    LLC is a cutting-edge technology services company specializing in transforming healthcare through digital innovation. We provide expert solutions in cloud platforms like AWS, Azure, Databricks, and Snowflake, while aligning with HL7 Fast Healthcare Interoperability Resources (FHIR) standards to ensure seamless data integration and interoperability. Our services include software development, legacy system migration, clinical decision support, and end-to-end data solutions designed to modernize healthcare applications. By leveraging the power of cloud computing and healthcare standards, CRUDBits LLC helps organizations improve operational efficiency, drive innovation, and ensure compliance with industry regulations. We are dedicated to building scalable, secure, and future-ready systems that enhance healthcare delivery and outcomes.
                </p>
                <p className="text-gray-600 leading-6">
                    LLC is a cutting-edge technology services company specializing in transforming healthcare through digital innovation. We provide expert solutions in cloud platforms like AWS, Azure, Databricks, and Snowflake, while aligning with HL7 Fast Healthcare Interoperability Resources (FHIR) standards to ensure seamless data integration and interoperability.
                </p>
            </div>
            <ServiceComponent />
        </div>
    );
};

export default Page;
