import type { NextPage } from 'next';

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-2xl mx-auto mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const ServicesPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-12">
          Our Process
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProcessStep
            number="1"
            title="Consultation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProcessStep
            number="2"
            title="Documentation"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <ProcessStep
            number="3"
            title="Submission"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
