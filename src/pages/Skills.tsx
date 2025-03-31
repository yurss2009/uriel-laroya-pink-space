
import Layout from "../components/Layout";
import KittyCard from "../components/KittyCard";
import KittyHeading from "../components/KittyHeading";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <KittyHeading>My Skills</KittyHeading>

        <KittyCard className="mb-10">
          <h3 className="text-2xl font-bold text-pink-800 mb-5">Taekwondo</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-kitty-purple h-56 rounded-2xl flex items-center justify-center kawaii-shadow">
                <span className="text-6xl">🥋</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                I've been practicing Taekwondo for six years now, and I'm currently a blue belt. This Korean martial art 
                has become an integral part of my life, teaching me discipline, respect, and mental fortitude alongside 
                physical techniques.
              </p>
              <p className="text-gray-700 mb-4">
                My Taekwondo journey began when I was 9 years old. I was initially drawn to the dynamic kicks and impressive 
                spinning techniques I saw in demonstrations. As I progressed through the belt ranks, I discovered that 
                Taekwondo is as much about mental strength as it is about physical abilities.
              </p>
              <p className="text-gray-700 mb-4">
                I train three times a week, focusing on forms (poomsae), sparring, and breaking techniques. The structured 
                learning environment has helped me develop patience and precision in my movements. One of my proudest 
                achievements was earning a silver medal in a regional tournament last year.
              </p>
              <p className="text-gray-700">
                Beyond competitions, Taekwondo has given me valuable self-defense skills and improved my overall fitness, 
                flexibility, and coordination. I'm working toward my black belt, which I hope to achieve within the next year.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Forms (Poomsae)</span>
                <span className="text-sm font-medium text-gray-700">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-kitty-purple/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Sparring</span>
                <span className="text-sm font-medium text-gray-700">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-kitty-purple/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Breaking Techniques</span>
                <span className="text-sm font-medium text-gray-700">70%</span>
              </div>
              <Progress value={70} className="h-2 bg-kitty-purple/30" />
            </div>
          </div>
        </KittyCard>

        <KittyCard className="mb-10">
          <h3 className="text-2xl font-bold text-pink-800 mb-5">Basketball</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-kitty-peach h-56 rounded-2xl flex items-center justify-center kawaii-shadow">
                <span className="text-6xl">🏀</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Basketball has been my favorite sport since elementary school. As a point guard on my school team, 
                I've developed strong ball-handling skills and court vision that allow me to create plays for my teammates.
              </p>
              <p className="text-gray-700 mb-4">
                I spend at least two hours daily practicing various aspects of the game. I start with dribbling drills to 
                improve my ball control, then move on to shooting practice with a focus on my three-point shot and mid-range jumper. 
                I also work on defensive footwork and conditioning to ensure I can maintain high energy throughout a game.
              </p>
              <p className="text-gray-700 mb-4">
                Playing competitive basketball has taught me how to perform under pressure and make quick decisions. 
                I've learned to analyze opponents' weaknesses and adjust my game plan accordingly. Communication is crucial 
                on the court, and I've become effective at coordinating with teammates during fast-paced situations.
              </p>
              <p className="text-gray-700">
                My basketball skills extend beyond physical techniques to include strategic thinking and leadership. 
                As a point guard, I'm responsible for calling plays and setting the tempo of the game. This role has helped me 
                develop confidence and decisiveness that benefit me in other areas of life.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Dribbling</span>
                <span className="text-sm font-medium text-gray-700">90%</span>
              </div>
              <Progress value={90} className="h-2 bg-kitty-peach/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Shooting</span>
                <span className="text-sm font-medium text-gray-700">82%</span>
              </div>
              <Progress value={82} className="h-2 bg-kitty-peach/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Court Vision</span>
                <span className="text-sm font-medium text-gray-700">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-kitty-peach/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Defense</span>
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-kitty-peach/30" />
            </div>
          </div>
        </KittyCard>

        <KittyCard>
          <h3 className="text-2xl font-bold text-pink-800 mb-5">Coding</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-kitty-pink h-56 rounded-2xl flex items-center justify-center kawaii-shadow">
                <span className="text-6xl">💻</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                My coding journey began two years ago when I joined a computer club at school. What started as curiosity quickly 
                developed into a genuine interest in how programs and websites are built. I've been steadily learning coding 
                languages and concepts through online courses and practice projects.
              </p>
              <p className="text-gray-700 mb-4">
                I'm proficient in HTML and CSS, which I've used to create several personal web projects, including a simple 
                basketball statistics tracker for my team. I'm currently improving my JavaScript skills to add more interactive 
                elements to my websites and learning Python for its versatility in different applications.
              </p>
              <p className="text-gray-700 mb-4">
                Problem-solving is my favorite aspect of coding. I enjoy the process of breaking down complex issues into 
                manageable parts and finding efficient solutions. Each coding challenge teaches me to think more logically 
                and approach problems from different angles.
              </p>
              <p className="text-gray-700">
                In the future, I hope to combine my passion for sports with my coding skills, perhaps by developing 
                applications that help athletes track their performance or improve training methods. I'm excited to continue 
                growing in this field as technology advances.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">HTML/CSS</span>
                <span className="text-sm font-medium text-gray-700">80%</span>
              </div>
              <Progress value={80} className="h-2 bg-kitty-pink/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">JavaScript</span>
                <span className="text-sm font-medium text-gray-700">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-kitty-pink/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Python</span>
                <span className="text-sm font-medium text-gray-700">55%</span>
              </div>
              <Progress value={55} className="h-2 bg-kitty-pink/30" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Problem Solving</span>
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-kitty-pink/30" />
            </div>
          </div>
        </KittyCard>
      </div>
    </Layout>
  );
};

export default Skills;
