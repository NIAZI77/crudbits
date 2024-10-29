"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const data = [
    {
      title: "Diverse Engagement Types",
      description: "FHIRGo has experience across a wide range of engagement types, suggesting versatility in its services, including consulting, development, integration, and support tailored to unique client needs in various industry domains."
    },
    {
      title: "Industry Domain Expertise",
      description: "FHIRGo provides support across multiple industry domains, indicating a broad understanding of diverse business environments and challenges, beyond any single sector."
    },
    {
      title: "Recognition of FHIR Importance",
      description: "FHIRGo recognizes the significance of the Fast Healthcare Interoperability Resources (FHIR) standard, aligning with the industry's push for interoperability and standardized healthcare data exchange."
    },
    {
      title: "Investment in FHIR Standard Product",
      description: "FHIRGo has invested in developing a product based on the FHIR HL7 standard, showcasing a proactive approach to creating solutions that adhere to industry standards, potentially providing clients with interoperable products."
    },
    {
      title: "Independent FHIR Services Entity",
      description: "The FHIR HL7 standard product operates as an independent entity, indicating a dedicated focus on FHIR-related services, allowing for specialized attention to FHIR implementations and updates."
    },
    {
      title: "Comprehensive FHIR Services",
      description: "FHIRGo offers a comprehensive range of FHIR services, including implementation, integration, and support, addressing healthcare data interoperability and application development."
    },
    {
      title: "Tailored for HL7 FHIR",
      description: "FHIRGo's specialized process is designed specifically for HL7 FHIR, reflecting a deep understanding of this healthcare interoperability standard and enabling the creation of aligned solutions."
    },
    {
      title: "Efficiency and Precision",
      description: "The unique process implies a tailored workflow that optimizes FHIR implementations, leading to effective and streamlined outcomes for clients."
    },
    {
      title: "Industry Standards Adherence",
      description: "Specializing in HL7 FHIR, FHIRGo emphasizes adherence to industry standards, which is crucial for data accuracy, security, and interoperability in healthcare."
    },
    {
      title: "Innovation Integration",
      description: "The uniqueness of FHIRGo's process allows for the integration of innovative technologies and methodologies, enhancing their FHIR-related solutions."
    },
    {
      title: "Custom Solutions",
      description: "The specialized process reflects a commitment to delivering customized solutions rather than one-size-fits-all approaches, essential for meeting unique healthcare organization requirements."
    },
    {
      title: "Domain-Specific Knowledge",
      description: "FHIRGo's specialization in HL7 FHIR indicates deep domain-specific knowledge, ensuring solutions are not only technically sound but also contextually relevant to healthcare workflows."
    }
  ];
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div>
      <div
        className="hero max-h-96 h-screen w-full relative overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/industry.jpeg')` }}
      >
        <div className='w-full h-full bg-black opacity-50'></div>
        <div className="absolute inset-0 mx-auto text-white flex-col space-y-4 w-[80%] h-screen pt-[135px]">
          <h1 className="mt-8 mb-4 text-4xl font-extrabold text-center">Industry</h1>
        </div>
      </div>
      <div className='p-2 md:py-16 py-6 md:w-[80%] w-[90%] mx-auto'>
        <h2 className='h2-style font-semibold text-2xl py-3'>Crudbits</h2>
        <p className="text-gray-600 leading-6">
          FHIRGo is a versatile provider of healthcare interoperability solutions, specializing in the Fast Healthcare Interoperability Resources (FHIR) standard. With extensive experience across various engagement types, including consulting and integration, FHIRGo tailors its services to meet unique client needs across multiple industry domains. The company emphasizes adherence to industry standards, ensuring data accuracy and security. By investing in FHIR-compliant products and maintaining a dedicated focus on FHIR services, FHIRGo delivers comprehensive support for implementation and application development. Their unique, customized approach integrates innovative technologies, providing efficient, precise solutions that align with the specific requirements of healthcare organizations.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto pt-10">
        {data.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <div
              className="md:w-[40vw] md:min-h-[20vw] min-h-72 w-full bg-cover bg-center mx-auto"
              style={{ backgroundImage: `url('/industry.jpeg')`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            />
            <div className="bg-slate-100 border-2 border-slate-300 md:w-[80%] w-[90%] md:px-4 px-2 py-6 relative mx-auto bottom-[100px] flex-grow flex flex-col justify-between space-y-4">
              <span className="text-5xl font-bold text-red-500">{index < 9 ? '0' : ''}{index + 1}</span>
              <h2 className="text-xl font-bold text-slate-600">{item.title}</h2>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
