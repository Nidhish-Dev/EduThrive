import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-8 rounded-lg mb-8 text-center shadow-lg">
          {title}
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          {children}
        </div>
      </div>
    </section>
  );
}