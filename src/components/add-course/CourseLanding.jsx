import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { InstructorContext } from "@/context/InstructorContext";
import { courseLandingPageFormControls } from "@/config";
import FormControls from "../common/FormControls";

const CourseLanding = () => {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-bold text-primary"}>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
};

export default CourseLanding;
