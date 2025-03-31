
import Layout from "../components/Layout";
import KittyCard from "../components/KittyCard";
import KittyHeading from "../components/KittyHeading";
import KittyBow from "../components/KittyBow";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <KittyHeading>My Profile</KittyHeading>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <KittyCard className="text-center h-full">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-kitty-pink flex items-center justify-center mx-auto kawaii-shadow">
                  <div className="text-5xl font-comic font-bold text-pink-800">UL</div>
                </div>
                <KittyBow className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8" />
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-2">Uriel Laroya</h3>
              <p className="text-gray-600 mb-4">Grade 10 Student</p>
              <p className="text-gray-600 font-medium">San Beda College Alabang</p>
            </KittyCard>
          </div>

          <div className="md:col-span-2">
            <KittyCard className="h-full">
              <h3 className="text-xl font-bold text-pink-800 mb-4">About Me</h3>
              <p className="text-gray-700 mb-4">
                Hello! I'm Uriel Laroya, a Grade 10 student at San Beda College Alabang with a passion for basketball, 
                taekwondo, and coding. I enjoy balancing my academic life with my various hobbies and interests.
              </p>
              <p className="text-gray-700 mb-4">
                I'm a friendly and enthusiastic person who loves to learn new things and challenge myself. 
                My friends would describe me as reliable, creative, and always ready to help others.
              </p>
              <p className="text-gray-700">
                When I'm not studying or practicing sports, you might find me coding new projects or 
                exploring the latest technology trends. I'm excited to share more about myself through this website!
              </p>
            </KittyCard>
          </div>
        </div>

        <KittyCard>
          <h3 className="text-xl font-bold text-pink-800 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-kitty-pink/20 rounded-xl">
              <div className="w-10 h-10 bg-kitty-pink rounded-full flex items-center justify-center mr-3">
                <span className="text-pink-800 font-bold">🎂</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Birthdate</p>
                <p className="font-medium text-gray-700">January 21, 2009</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-kitty-pink/20 rounded-xl">
              <div className="w-10 h-10 bg-kitty-pink rounded-full flex items-center justify-center mr-3">
                <span className="text-pink-800 font-bold">📏</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium text-gray-700">5'1"</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-kitty-pink/20 rounded-xl">
              <div className="w-10 h-10 bg-kitty-pink rounded-full flex items-center justify-center mr-3">
                <span className="text-pink-800 font-bold">📚</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">School</p>
                <p className="font-medium text-gray-700">San Beda College Alabang</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-kitty-pink/20 rounded-xl">
              <div className="w-10 h-10 bg-kitty-pink rounded-full flex items-center justify-center mr-3">
                <span className="text-pink-800 font-bold">🎮</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Interests</p>
                <p className="font-medium text-gray-700">Basketball, Coding, Taekwondo</p>
              </div>
            </div>
          </div>
        </KittyCard>
      </div>
    </Layout>
  );
};

export default Profile;
