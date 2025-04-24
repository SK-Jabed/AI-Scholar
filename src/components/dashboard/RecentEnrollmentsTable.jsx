import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function RecentEnrollmentsTable({ data, isLoading }) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Recent Enrollments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Course Title</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Date Enrolled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((enrollment) => (
                <TableRow key={enrollment.studentName + enrollment.dateEnrolled}>
                  <TableCell>{enrollment.studentName}</TableCell>
                  <TableCell>{enrollment.courseTitle}</TableCell>
                  <TableCell>${enrollment.amountPaid}</TableCell>
                  <TableCell>{format(new Date(enrollment.dateEnrolled), 'PPP')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}