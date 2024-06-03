import React from "react";

export default function About() {
  return (
    <div className="font-">
      <section className="relative transition-all duration-300 ease-in-out">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-2xl mt-10 font-inter md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span>
                  The motivation behind this project stems from a profound
                  recognition
                </span>
                <br />
                <span>
                  of its potential to revolutionize healthcare outcomes.
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Developing a Multi-Disease Detection system in Retinal Imaging
                  with Disease Prediction using Heterogeneous Deep Learning
                  Models is driven by the imperative to transform healthcare
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Multi-Disease Detection Algorithms</h1>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div> {/* Empty column (2/12) */}
        
        {/* Second column (4/12) */}
        <div className="col-span-4">
          {/* Convolutional Neural Networks (CNNs) Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Convolutional Neural Networks (CNNs)</h2>
            <p className="text-lg text-gray-800 mb-4">
              Convolutional Neural Networks (CNNs) are a class of deep learning models
              commonly used for image recognition and computer vision tasks.
            </p>
            {/* Add more information about CNNs */}
          </section>
          
          {/* DenseNet Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">DenseNet Algorithm</h2>
            <p className="text-lg text-gray-800 mb-4">
              DenseNet (Densely Connected Convolutional Networks) is a deep learning
              architecture known for its dense connectivity pattern and efficient
              parameter usage. 
            </p>
            {/* Add more information about DenseNet */}
          </section>
          
          {/* MobileNetV2 Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">MobileNetV2 Algorithm</h2>
            <p className="text-lg text-gray-800 mb-4">
              MobileNetV2 is a lightweight convolutional neural network architecture
              designed for mobile and embedded vision applications. 
            </p>
            {/* Add more information about MobileNetV2 */}
          </section>
          
          {/* VGG16 Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">VGG16 Algorithm</h2>
            <p className="text-lg text-gray-800 mb-4">
              VGG16 (Visual Geometry Group 16) is a deep convolutional neural network
              architecture that achieved outstanding performance on the ImageNet
              dataset. 
            </p>
            {/* Add more information about VGG16 */}
          </section>
        </div>
        
        <div className="col-span-2"></div> {/* Empty column (2/12) */}
      </div>
    </div>
      </section>
    </div>
  );
}
