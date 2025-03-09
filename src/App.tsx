import React from 'react';
import { Shield, Users, Lock, Globe, ChevronRight, Mail, Phone, Shield as ShieldIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">FortiGuardia</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition">
            Get Protected
          </button>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Elite Cybersecurity & VIPT Services for High-Stakes Protection
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Protecting high-profile individuals and organizations with advanced cybersecurity 
              and personalized protection services.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold 
              flex items-center transition">
              Schedule Consultation
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Shield className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">VIPT Protection</h3>
              <p className="text-slate-600">
                Comprehensive protection services for VIP clients, including digital security,
                physical protection, and risk assessment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Lock className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Cyber Defense</h3>
              <p className="text-slate-600">
                Advanced threat detection, prevention, and response systems to protect 
                your digital assets and privacy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Globe className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Global Security</h3>
              <p className="text-slate-600">
                Worldwide security coverage with local expertise and international 
                response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Why Choose FortiGuardia</h2>
            <p className="text-slate-300 mb-8">
              With over a decade of experience protecting high-profile clients worldwide, 
              our elite team combines cutting-edge technology with proven security protocols 
              to deliver unmatched protection services.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-slate-400">Clients Protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-slate-400">Global Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <span>contact@fortiguardia.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold">FortiGuardia</span>
            </div>
            <div className="text-sm">
              © 2024 FortiGuardia. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;