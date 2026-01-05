interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-purple-950/30 border border-purple-800/30 rounded-2xl p-6 card-hover">
      <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-purple-200/60 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-purple-200/80 text-sm">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
