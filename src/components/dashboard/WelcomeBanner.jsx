import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

export default function WelcomeBanner({ user, isLoading }) {
  if (isLoading) {
    return (
      <Card className="p-6">
        <Skeleton className="h-8 w-1/2 mb-4" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/4" />
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Your AI Scholar dashboard provides insights into platform performance and user activity.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Role: {user?.role}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">
                Today’s Date: {format(new Date(), 'PPP')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}