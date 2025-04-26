export const validateDashboardData = (data) => {
  if (!data) return false;
  
  const requiredFields = [
    'stats',
    'charts.enrollmentData',
    'charts.revenueData',
    'charts.categoryData',
    'charts.roleData',
    'tables.topCourses',
    'tables.recentEnrollments',
    'tables.newUsers'
  ];

  for (const field of requiredFields) {
    const parts = field.split('.');
    let current = data;
    
    for (const part of parts) {
      if (!current[part]) {
        console.error(`Missing dashboard data field: ${field}`);
        return false;
      }
      current = current[part];
    }
  }

  return true;
};

export const formatChartData = (data) => {
  if (!data) return [];
  
  // Ensure data is an array
  if (Array.isArray(data)) return data;
  
  // Convert object to array if needed
  if (typeof data === 'object' && !Array.isArray(data)) {
    return Object.entries(data).map(([name, value]) => ({ name, value }));
  }
  
  return [];
};