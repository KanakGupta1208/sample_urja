import React from 'react'

function page() {
    return (
        <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-18 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full shadow-2xl rounded-2xl overflow-hidden bg-black">
                {/* Header Section */}
                <div className=" text-white p-8 text-center bg-gray-600">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        Multi-Tenant Headless CMS Project
                    </h1>
                </div>

                {/* Content Sections */}
                <div className="p-8 space-y-6">
                    {/* Problem Statement */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg hover:scale-102">
                        <h2 className="text-2xl font-bold text-blue-800 mb-3">
                            Problem Statement
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Create a multi-tenant headless CMS for blogs, e-commerce, and content platforms, addressing the need for a flexible and scalable content management solution.
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg hover:scale-102">
                        <h2 className="text-2xl font-bold text-green-800 mb-3">
                            Solution
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Develop a scalable and efficient multi-tenant headless CMS that provides robust solutions for blogs, e-commerce, and content platforms, ensuring maximum flexibility and performance.
                        </p>
                    </div>

                    {/* Challenges */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg hover:scale-102">
                        <h2 className="text-2xl font-bold text-orange-800 mb-3">
                            Key Challenges
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li className="pl-2">
                                Implement separate database instances for each tenant dynamically
                            </li>
                            <li className="pl-2">
                                Provide GraphQL/REST API access for each tenant dynamically
                            </li>
                        </ul>
                    </div>

                    {/* Team Members */}
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg hover:scale-102">
                        <h2 className="text-2xl font-bold text-purple-800 mb-3">
                            Team Members
                        </h2>
                        <div className="flex flex-wrap gap-3 hover:scale-102">
                            {[
                                "Aditya Giri", 
                                "Aditya Mudliar", 
                                "Ankite Jatav", 
                                "Kanak Gupta"
                            ].map((member, index) => (
                                <span 
                                    key={index} 
                                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {member}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        //     <h1 className="text-3xl font-bold text-center mb-6">About Our Project</h1>

        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold">Problem Statement</h2>
        //         <p className="text-gray-700">
        //             Create a multi-tenant headless CMS for blogs, e-commerce, and content platforms.
        //         </p>
        //     </div>

        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold">Solution</h2>
        //         <p className="text-gray-700">
        //             Our solution is to develop a scalable and efficient multi-tenant headless CMS that caters to various use cases such as blogs, e-commerce, and content platforms.
        //         </p>
        //     </div>

        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold">Challenges</h2>
        //         <ul className="list-disc list-inside text-gray-700">
        //             <li>Implement separate database instances for each tenant dynamically.</li>
        //             <li>Provide GraphQL/REST API access for each tenant dynamically.</li>
        //         </ul>
        //     </div>

        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold">Team Members</h2>
        //         <p className="text-gray-700">Aditya Giri, Aditya Mudliar, Ankite Jatav, Kanak Gupta</p>
        //     </div>
        // </div>
    );
}

export default page