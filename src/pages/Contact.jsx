import React from "react";
import ContactForm from "../widgets/ContactForm";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-8">
        <div className="flex items-center gap-3 text-gray-700">
          <Mail className="text-pink-600 w-6 h-6" />
          <span className="text-lg">nexmindmatrix@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 mt-4 sm:mt-0">
          <Phone className="text-pink-600 w-6 h-6" />
          <span className="text-lg">+91 8376601064</span>
        </div>
      </div>

      <p className="mb-6">Fill the form and we will get back to you.</p>
      {/* Form */}
      <ContactForm />
    </div>
  );
}
