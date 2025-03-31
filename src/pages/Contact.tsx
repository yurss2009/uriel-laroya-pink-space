
import { useState } from "react";
import Layout from "../components/Layout";
import KittyCard from "../components/KittyCard";
import KittyHeading from "../components/KittyHeading";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setIsSending(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <KittyHeading>Contact Me</KittyHeading>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <KittyCard>
            <h3 className="text-xl font-bold text-pink-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-kitty-pink rounded-full flex items-center justify-center mr-4 kawaii-shadow">
                  <Phone className="text-pink-800" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-700">09958507713</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-kitty-pink rounded-full flex items-center justify-center mr-4 kawaii-shadow">
                  <Mail className="text-pink-800" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-700">laroyauriel@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-kitty-pink rounded-full flex items-center justify-center mr-4 kawaii-shadow">
                  <MessageSquare className="text-pink-800" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">School</p>
                  <p className="font-medium text-gray-700">San Beda College Alabang</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-700">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello! 
                I'm always open to connecting with new people and exploring opportunities.
              </p>
            </div>
          </KittyCard>

          <KittyCard>
            <h3 className="text-xl font-bold text-pink-800 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-kitty-pink/30 focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-kitty-pink/30 focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border border-kitty-pink/30 focus:outline-none focus:ring-2 focus:ring-kitty-pink resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className="kitty-button w-full"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </KittyCard>
        </div>

        <KittyCard className="text-center p-8">
          <h3 className="text-xl font-bold text-pink-800 mb-4">Thank You for Visiting!</h3>
          <p className="text-gray-700">
            I appreciate you taking the time to explore my website and learn more about me.
            Hope to hear from you soon!
          </p>
          <div className="mt-6 text-5xl animate-bounce-slow">
            💕
          </div>
        </KittyCard>
      </div>
    </Layout>
  );
};

export default Contact;
