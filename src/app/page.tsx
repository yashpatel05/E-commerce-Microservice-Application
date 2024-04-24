import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img src="images/404.png" alt="404NotFound Team Logo" className="w-16 h-16 mr-4" />
        <div>
          <h1 className="text-3xl font-semibold">Welcome to the <br></br> E-commerce Microservice Application</h1>
          <p className="text-lg pt-2 text-gray-600">Developed by <b>Team 404NotFound</b></p>
        </div>
      </div>
      <p className="mb-4">This project will build a basic e-commerce application using microservices architecture with Spring Framework in Java. Containerization with Docker and communication via Kafka will be implemented.</p>
      
      {/* Team Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Team Details:</h2>
        <div className="flex items-center mb-4">
          <img src="/images/404.png" alt="404NotFound Team Logo" className="w-10 h-10 mr-4" />
          <div>
            <p className="font-semibold">Team Name:</p>
            <p>404NotFound</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <p>JP</p>
          </div>
          <div>
            <p className="font-semibold">Team Member:</p>
            <p>Jainish Patel</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <p>SS</p>
          </div>
          <div>
            <p className="font-semibold">Team Member:</p>
            <p>Shrey Shah</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <p>VP</p>
          </div>
          <div>
            <p className="font-semibold">Team Member:</p>
            <p>Vijul Patel</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <p>YP</p>
          </div>
          <div>
            <p className="font-semibold">Team Member:</p>
            <p>Yash Patel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
