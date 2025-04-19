import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CourseCardSkeleton = () => {
  return (
    <div>
      <Card className="border-0 shadow-md">
        <CardContent className="flex flex-col sm:flex-row gap-6 p-6">
          <div className="w-full sm:w-64 h-48 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-3/4 bg-gray-200" />
            <Skeleton className="h-4 w-1/2 bg-gray-200" />
            <Skeleton className="h-4 w-2/3 bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-6 w-20 bg-gray-200" />
              <Skeleton className="h-4 w-24 bg-gray-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCardSkeleton;
