import Image from "next/image";

const Education = () => {
    return (
        <section className="py-8 md:py-24 bg-white dark:bg-black" id="education">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-black dark:from-neutral-50 dark:to-neutral-400 tracking-tight">
                        Education
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        My academic journey and qualifications
                    </p>
                </div>

                <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-8">
                    {/* First Entry */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0 rounded-full shadow-sm bg-white border border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center">
                            <img
                                src="/assets/images/iiitm_logo.jpeg"
                                alt="ABV-IIITM Logo"
                                className="w-full h-full object-contain rounded-full bg-white scale-90"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                    Indian Institute of Information Technology and Management
                                </h3>
                                <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 mt-1 md:mt-0 whitespace-nowrap">
                                    Aug 2023 - May 2028
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1">
                                <p className="text-base text-gray-700 dark:text-gray-300 italic">
                                    Integrated B.Tech + MBA in Information Technology
                                </p>
                                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic mt-1 md:mt-0 text-right">
                                    Gwalior, Madhya Pradesh
                                </span>
                            </div>

                            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 mt-4 leading-relaxed">
                                <span className="font-bold">Coursework:</span> Object-Oriented Programming, Data Structures, Database Systems, Operating Systems, Computer Networks
                            </p>
                        </div>
                    </div>

                    {/* Second Entry */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0 rounded-full shadow-sm bg-white border border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center">
                            <img
                                src="/assets/images/rgukt_logo.png"
                                alt="RGUKT Logo"
                                className="w-full h-full object-contain rounded-full bg-white scale-90"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                    Rajiv Gandhi University of Knowledge Technologies
                                </h3>
                                <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 mt-1 md:mt-0 whitespace-nowrap">
                                    Nov 2020 - Sep 2022
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1">
                                <p className="text-base text-gray-700 dark:text-gray-300 italic">
                                    Pre University Course (PUC) - Equivalent to Telangana State Board (TSBIE)
                                </p>
                                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic mt-1 md:mt-0 text-right">
                                    Basar, India
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
