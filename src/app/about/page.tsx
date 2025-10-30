import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-8">
          Our Mission
        </h1>
        <div className="space-y-6 text-slate-300 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="w-full h-px bg-slate-800 my-8"></div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="w-full h-px bg-slate-800 my-8"></div>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
