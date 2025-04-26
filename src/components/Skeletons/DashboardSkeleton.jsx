export const StatsCardSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
    <div className="flex items-center justify-between">
      <div>
        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
      </div>
      <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
    </div>
    <div className="h-3 w-40 bg-gray-200 rounded mt-4"></div>
  </div>
);

export const ChartSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse h-80">
    <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
    <div className="h-full w-full bg-gray-200 rounded"></div>
  </div>
);

export const TableSkeleton = ({ rows = 5 }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
    <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);