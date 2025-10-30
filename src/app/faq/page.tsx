import AnimatedContentWrapper from '@/components/AnimatedContentWrapper';

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <AnimatedContentWrapper>
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Nunc vel risus commodo, volutpat felis id, ultrices arcu. Sed in magna eu lectus posuere maximus. Curabitur at magna vel magna consectetur consectetur. Proin vel ante nec justo bibendum efficitur. Donec nec justo nec justo bibendum efficitur.
          </p>
          <p className="text-lg leading-relaxed">
            Phasellus et nisl in nisl consectetur consectetur. Sed in magna eu lectus posuere maximus. Curabitur at magna vel magna consectetur consectetur. Proin vel ante nec justo bibendum efficitur. Donec nec justo nec justo bibendum efficitur.
          </p>
        </div>
      </AnimatedContentWrapper>
    </div>
  );
}