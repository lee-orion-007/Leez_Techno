import { useEffect, useState } from 'react';

// Main App Component
const LeezTechnology = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Testimonial carousel auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            {/* Navigation Bar */}
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Hero Section */}
            <HeroSection darkMode={darkMode} />

            {/* Services Section */}
            <ServicesSection darkMode={darkMode} />

            {/* Portfolio Section */}
            <PortfolioSection darkMode={darkMode} />

            {/* About Us Section */}
            <AboutSection darkMode={darkMode} />

            {/* Testimonials Section */}
            <TestimonialsSection
                darkMode={darkMode}
                activeTestimonial={activeTestimonial}
                setActiveTestimonial={setActiveTestimonial}
            />

            {/* Contact Section */}
            <ContactSection darkMode={darkMode} />

            {/* Footer */}
            <Footer darkMode={darkMode} />
        </div>
    );
};

// Navigation Bar Component
const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-lg">L</span>
                        </div>
                        <span className="text-xl font-bold">Leez Technology</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="font-medium hover:text-blue-500 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-300`}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        {/* Request Quote Button */}
                        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                            Request a Quote
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="block py-2 font-medium hover:text-blue-500 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                            Request a Quote
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Hero Section Component
const HeroSection = ({ darkMode }) => {
    return (
        <section id="home" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Leez <span className="text-blue-600">Technology</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    Empowering Technology, Elevating Creativity.
                </p>
                <p className="text-lg mb-10 max-w-3xl">
                    Your trusted partner for innovative graphics design, software development,
                    software installation, and computer hardware solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300">
                        Get Started
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300">
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const ServicesSection = ({ darkMode }) => {
    const services = [
        {
            id: 1,
            title: "Graphics Design",
            description: "Creative visual solutions for branding, marketing, and digital media.",
            icon: "🎨"
        },
        {
            id: 2,
            title: "Software Development",
            description: "Custom software solutions tailored to your business needs.",
            icon: "💻"
        },
        {
            id: 3,
            title: "Software Installation",
            description: "Professional installation and configuration of software applications.",
            icon: "⚙️"
        },
        {
            id: 4,
            title: "Computer Hardware Fixing",
            description: "Expert repair and maintenance for all computer hardware issues.",
            icon: "🔧"
        }
    ];

    return (
        <section id="services" className="py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
                <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                    We offer comprehensive technology solutions to help your business thrive in the digital age.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'
                                }`}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Portfolio Section Component
const PortfolioSection = ({ darkMode }) => {
    const portfolioItems = [
        {
            id: 1,
            title: "Brand Identity Design",
            category: "Graphics Design",
            image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Brand+Design"
        },
        {
            id: 2,
            title: "E-commerce Platform",
            category: "Software Development",
            image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=E-commerce+App"
        },
        {
            id: 3,
            title: "OS Migration",
            category: "Software Installation",
            image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=OS+Migration"
        },
        {
            id: 4,
            title: "Laptop Repair",
            category: "Hardware Fixing",
            image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Laptop+Repair"
        },
        {
            id: 5,
            title: "Mobile App UI/UX",
            category: "Graphics Design",
            image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Mobile+App+Design"
        },
        {
            id: 6,
            title: "Inventory Management System",
            category: "Software Development",
            image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Inventory+System"
        }
    ];

    return (
        <section id="portfolio" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Portfolio</h2>
                <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                    Explore our recent projects across all our service areas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-700' : 'bg-white'
                                }`}
                        >
                            <div className="h-48 bg-gray-300 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <span className={`text-sm font-medium px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// About Us Section Component
const AboutSection = ({ darkMode }) => {
    return (
        <section id="about-us" className="py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Us</h2>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400/4B5563/FFFFFF?text=Our+Team"
                                alt="Leez Technology Team"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="mb-6">
                            At Leez Technology, our mission is to empower businesses and individuals with
                            cutting-edge technology solutions that drive growth, efficiency, and innovation.
                            We believe in the transformative power of technology to solve complex problems
                            and create new opportunities.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="mb-6">
                            To be the leading technology partner for businesses seeking to leverage digital
                            transformation for competitive advantage, recognized for our technical excellence,
                            creative solutions, and unwavering commitment to client success.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                        <p>
                            Our diverse team of experts includes software engineers, graphic designers,
                            hardware technicians, and project managers who collaborate to deliver
                            comprehensive technology solutions tailored to your specific needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Testimonials Section Component
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        company: "Tech Innovations Inc.",
        text: "Leez Technology transformed our digital presence with their exceptional software development and design services. Highly recommended!",
        avatar: "https://via.placeholder.com/80/3B82F6/FFFFFF?text=SJ"
    },
    {
        id: 2,
        name: "Michael Chen",
        company: "Global Solutions Ltd.",
        text: "Their hardware repair service saved our company during a critical system failure. Professional, fast, and reliable.",
        avatar: "https://via.placeholder.com/80/10B981/FFFFFF?text=MC"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        company: "Creative Minds Agency",
        text: "The graphics design team at Leez Technology brought our brand vision to life with stunning visuals that perfectly captured our identity.",
        avatar: "https://via.placeholder.com/80/8B5CF6/FFFFFF?text=ER"
    }
];

const TestimonialsSection = ({ darkMode, activeTestimonial, setActiveTestimonial }) => {
    return (
        <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
                <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                    Don't just take our word for it - hear from some of our satisfied clients.
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className={`p-8 rounded-lg shadow-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-white'
                                        }`}>
                                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-lg italic mb-6">"{testimonial.text}"</p>
                                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full ${index === activeTestimonial
                                        ? 'bg-blue-600'
                                        : darkMode
                                            ? 'bg-gray-600'
                                            : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact-us" className="py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Let's discuss how we can help bring your ideas to life.
                </p>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border ${darkMode
                                                ? 'bg-gray-800 border-gray-700 text-white'
                                                : 'bg-white border-gray-300 text-gray-800'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border ${darkMode
                                                ? 'bg-gray-800 border-gray-700 text-white'
                                                : 'bg-white border-gray-300 text-gray-800'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white'
                                            : 'bg-white border-gray-300 text-gray-800'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white'
                                            : 'bg-white border-gray-300 text-gray-800'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-1/2">
                        <div className={`p-8 rounded-lg shadow-lg h-full ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
                            }`}>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Office</h4>
                                        <p>123 Tech Street, Innovation District</p>
                                        <p>San Francisco, CA 94105</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone Number</h4>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Address</h4>
                                        <p>info@leeztechnology.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Business Hours</h4>
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                                        <a
                                            key={platform}
                                            href="#"
                                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                                                } transition-colors duration-300`}
                                        >
                                            {platform}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = ({ darkMode }) => {
    return (
        <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white transition-colors duration-300`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">L</span>
                            </div>
                            <span className="text-xl font-bold">Leez Technology</span>
                        </div>
                        <p className="mb-4 text-gray-400">
                            Empowering businesses with innovative technology solutions since 2015.
                        </p>
                        <div className="flex space-x-4">
                            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {['Graphics Design', 'Software Development', 'Software Installation', 'Hardware Fixing'].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <address className="not-italic text-gray-400">
                            <p className="mb-2">345 Tech Street</p>
                            <p className="mb-2">San Francisco, CA 94105</p>
                            <p className="mb-2">+1 (555) 123-2290</p>
                            <p className="mb-2">info@leeztechnology.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Leez Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default LeezTechnology;