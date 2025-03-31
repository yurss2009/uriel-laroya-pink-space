
import Layout from "../components/Layout";
import KittyCard from "../components/KittyCard";
import KittyHeading from "../components/KittyHeading";

const Hobbies = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <KittyHeading>My Hobbies</KittyHeading>

        <KittyCard className="mb-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-kitty-peach h-56 rounded-2xl flex items-center justify-center kawaii-shadow">
                <span className="text-6xl">🏀</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-pink-800 mb-3">Basketball</h3>
              <p className="text-gray-700 mb-4">
                Basketball is more than just a hobby for me—it's a passion that has shaped my life in countless ways. 
                I started playing when I was just 8 years old, captivated by the energy and teamwork I saw in NBA games. 
                What began as casual shooting hoops in our neighborhood has evolved into a serious commitment.
              </p>
              <p className="text-gray-700 mb-4">
                I practice almost daily, focusing on improving my dribbling skills and shooting accuracy. 
                There's something incredibly satisfying about the swish sound when the ball goes cleanly through the net. 
                I play point guard for our school team at San Beda College Alabang, where I've learned the value of 
                leadership, quick thinking, and staying calm under pressure.
              </p>
              <p className="text-gray-700 mb-4">
                Beyond the physical benefits, basketball has taught me invaluable life lessons about perseverance and teamwork. 
                When we lose a game, it's an opportunity to analyze our mistakes and come back stronger. 
                When we win, it's a celebration of our collective effort and strategy.
              </p>
              <p className="text-gray-700">
                Some of my fondest memories involve tournament games with my teammates, especially our dramatic comeback win 
                in last year's interschool competition. The hours of practice, the strategic discussions, the shared 
                victories and defeats—all of these experiences have created bonds that extend beyond the court.
              </p>
            </div>
          </div>
        </KittyCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KittyCard>
            <h3 className="text-xl font-bold text-pink-800 mb-3">Video Games</h3>
            <div className="bg-kitty-purple/50 h-40 rounded-2xl flex items-center justify-center mb-4 kawaii-shadow">
              <span className="text-5xl">🎮</span>
            </div>
            <p className="text-gray-700">
              In my free time, I enjoy playing video games that challenge my strategic thinking and reaction time. 
              My favorites include basketball simulation games where I can apply my knowledge of the sport virtually, 
              and adventure games that tell compelling stories.
            </p>
          </KittyCard>

          <KittyCard>
            <h3 className="text-xl font-bold text-pink-800 mb-3">Watching Anime</h3>
            <div className="bg-kitty-peach/50 h-40 rounded-2xl flex items-center justify-center mb-4 kawaii-shadow">
              <span className="text-5xl">📺</span>
            </div>
            <p className="text-gray-700">
              I'm a big fan of anime, especially sports-themed series like "Kuroko no Basket" that combine exciting action 
              with messages about determination and friendship. I also enjoy slice-of-life shows that help me relax after a 
              busy school day.
            </p>
          </KittyCard>
        </div>
      </div>
    </Layout>
  );
};

export default Hobbies;
