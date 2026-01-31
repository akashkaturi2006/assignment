interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white border-2 border-white rounded-lg p-6 shadow-md max-w-sm">
      <h3 className="text-lg font-semibold mb-2 text-black">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
  
}
