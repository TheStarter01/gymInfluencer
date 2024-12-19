import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { TbHeartDiscount } from "react-icons/tb";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

// Features data
const features = [
  {
    name: "Effortless Workout Logging",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CgGym,
  },
  {
    name: "Accurate Rep Counting",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: MdSportsGymnastics,
  },
  {
    name: "Calorie Calculation Made Easy",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: TbHeartDiscount,
  },
  {
    name: "Personalized Workout Plan",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiWeightLiftingUp,
  },
  {
    name: "Personalized Diet Plan",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: GiFruitBowl,
  },
];

function Feature() {
  // Refs for animation
  const featureRefs = useRef([]);

  useEffect(() => {
    const featuresAnimation = (element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    };

    const resetAnimation = (element) => {
      gsap.to(element, { opacity: 0, y: 100, duration: 0.5 });
    };

    // Observer for scroll behavior (enter and exit viewport)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element comes into view
            featuresAnimation(entry.target);
          } else {
            // Element exits the viewport
            resetAnimation(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Set up observer for all feature items
    featureRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    // Cleanup on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:text-center">
          <h2 className="text-base/7 font-md text-zinc-500">Features</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-wider text-balance text-violet-300 sm:text-5xl lg:text-balance">
            Discover Our App's Key Features{" "}
          </p>
          <p className="mt-8 text-pretty text-sm font-sm text-zinc-400 sm:text-xl/8">
            GymFluencer is your ultimate fitness companion, designed to help you
            track your workouts with ease. Our application allows you to log
            exercises, count reps, and calculate calories burned, all through a
            user-friendly interface. Whether you’re a beginner or a seasoned
            athlete, our app will keep you motivated and on track.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="relative pl-16"
                ref={(el) => (featureRefs.current[index] = el)}
              >
                <dt className="text-base/7 text-sm font-md text-violet-200">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-violet-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Feature;
