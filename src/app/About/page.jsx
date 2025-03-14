"use client";

import * as motion from "motion/react-client";

import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import AboutBanner from "@/components/about/AboutBanner";
import AboutDescription from "@/components/about/AboutDescription";
import AboutTeam from "@/components/about/AboutTeam";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutDescription />
      <AboutTeam/>
    </div>
  );
};

export default About;
