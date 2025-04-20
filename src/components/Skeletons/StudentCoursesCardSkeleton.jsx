import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

const StudentCoursesCardSkeleton = () => {
  return (
    <div>
      <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-0">
          <Skeleton className="h-48 w-full rounded-t-xl" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentCoursesCardSkeleton;