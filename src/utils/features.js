import { BookOpen } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Award } from 'lucide-react'; // Changed from Certificate which might not be available
import { Users } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Smartphone } from 'lucide-react'; // Changed from DeviceMobile which might not be available

export   const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI-powered course recommendations tailored to your learning style and goals",
      icon: <BookOpen className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Smart Scheduling",
      description: "Optimize your study time with AI that adapts to your availability and learning patterns",
      icon: <Clock className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Skill Certification",
      description: "Earn verified certificates with blockchain technology to showcase your achievements",
      icon: <Award className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Collaborative Learning",
      description: "Connect with peers for group projects and discussions facilitated by AI matching",
      icon: <Users className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Multilingual Support",
      description: "Access course content in multiple languages with real-time AI translation",
      icon: <Globe className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Mobile Learning",
      description: "Study anywhere with our responsive mobile app and offline content access",
      icon: <Smartphone className="w-12 h-12 text-teal-600" />
    }
  ];
