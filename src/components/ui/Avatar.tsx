import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ 
  src, 
  alt,
  size = 'md',
  className = "" 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 64px"
      />
    </div>
  );
}