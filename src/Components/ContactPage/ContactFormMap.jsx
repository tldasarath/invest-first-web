import React from 'react';
import Container from '../Common/Layout/Contianer';
import PrimaryButton from '../Common/Buttons/PrimaryButton';

const ContactFormMap = () => {
    return (
        <section className="py-10 md:py-20 ">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* LEFT COLUMN: Map */}
                    <div className=" rounded-3xl overflow-hidden min-h-[400px] border border-[#1e293b]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.8478595564!2d54.94754668509373!3d25.07570732890656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1707050000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* RIGHT COLUMN: Form */}
                    <div className="bg-linear-to-b from-[#14293A] to-[#0B223E] p-8 md:p-10 rounded-3xl border border-[#1e293b]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0099CC]"
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-2">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="info@Example.ae"
                                        className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0099CC]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Box */}
                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-2">Phone No</label>
                                    <input
                                        type="text"
                                        placeholder="+97150......"
                                        className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0099CC]"
                                    />
                                </div>
                                {/* Visa Option Box */}
                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-2">Visa Option</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0099CC] appearance-none cursor-pointer">
                                            <option>Select Option</option>
                                            <option>Investor Visa</option>
                                            <option>Employment Visa</option>
                                            <option>Freelance Visa</option>
                                        </select>
                                        {/* Custom Arrow */}
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Box */}
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium ml-2">Write Message</label>
                                <textarea
                                    placeholder="Messages..."
                                    rows={5}
                                    className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0099CC] resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <PrimaryButton text="Submit Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFormMap;
