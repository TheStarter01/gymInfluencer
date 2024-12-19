import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosStarHalf } from "react-icons/io";

// Testimonial Data
const posts = [
  {
    id: 1,
    title: 'Best Fitness App!',
    href: '#',
    description:
      'GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!',
    date: 'April 10, 2023',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'So Easy to Use!',
    href: '#',
    description:
      'I love how user-friendly the app is. Logging workouts has never been easier!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      role: 'Marketing-Head',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Incredible Progress Tracker!',
    href: '#',
    description:
      "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    date: 'Jan 17, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      role: 'Finance-Head',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

function Testimonial() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.testimonial-post').forEach((post) => {
      gsap.fromTo(
        post,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="py-24 mt-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-violet-300 sm:text-5xl">
            Transformations That Inspire
          </h2>
          <p className="mx-auto text-center mt-6 text-lg/8 text-pretty text-sm font-sm text-zinc-400">
            Success stories that prove hard work and dedication pay off.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="testimonial-post flex max-w-xl opacity-0 border-[1px] opacity-[30%] border-violet-300 p-5 rounded-md flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-100">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/7 text-violet-300 group-hover:text-violet-400">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-zinc-400">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-violet-300"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-violet-200">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
