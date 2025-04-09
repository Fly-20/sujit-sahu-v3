import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
}

export default function ExperienceCard({ title, organization, location, startDate, endDate, logo }: ExperienceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 flex items-center space-x-6">
        <div className="flex-shrink-0 relative h-16 w-16">
          <Image
            src={logo}
            alt={organization}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg text-gray-700">{organization}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span>{startDate} – {endDate}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
