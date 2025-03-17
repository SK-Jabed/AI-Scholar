"use client";

import { testimonials } from "@/utils/testimonials";
import { useCallback, useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const TestimonialsSection = ({
  autoRotateInterval = 5000,
  sectionBackground = "",
  cardBackground = "bg-base-200",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Navigate to specific slide index
  const goToSlide = useCallback(
    (index) => {
      const newIndex = (index + testimonials.length) % testimonials.length;
      setActiveIndex(newIndex);

      // Reset auto-rotation timer when manually navigating
      setIsAutoRotating(true);
    },
    [testimonials.length]
  );

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Handle auto-rotation of carousel
  useEffect(() => {
    let intervalId;

    if (isAutoRotating) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoRotateInterval);
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoRotating, nextSlide, autoRotateInterval]);

  // Pause auto-rotation when user hovers over carousel
  const handleMouseEnter = () => setIsAutoRotating(false);
  const handleMouseLeave = () => setIsAutoRotating(true);

  return (
    <section
      className={`${sectionBackground}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title={"Student Testimonials"}
          subTitle={
            "       Hear from our community of learners about their experiences"
          }
        />

        {/* Testimonials Carousel */}
        <div
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-roledescription="carousel"
          aria-label="Student testimonials"
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                id={`testimonial-${index}`}
                className={`transition-opacity duration-500 ${
                  index === activeIndex
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className={`card w-full ${cardBackground}`}>
                  <div className="card-body items-center text-center p-8">
                    <div className="avatar mb-4">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src="/api/placeholder/100/100"
                          alt={`${testimonial.name}`}
                          width="100"
                          height="100"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-lg italic mb-6">
                        "{testimonial.text}"
                      </p>
                      <footer>
                        <cite className="not-italic">
                          <div className="font-bold text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-base-content/70">
                            {testimonial.role}
                          </div>
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
            <button
              onClick={prevSlide}
              className="btn btn-circle btn-ghost"
              aria-label="Previous testimonial"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle btn-ghost"
              aria-label="Next testimonial"
            >
              ❯
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center w-full py-4 gap-2" role="tablist">
            {testimonials.map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`btn btn-xs btn-circle ${
                  index === activeIndex ? "bg-teal-500" : ""
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === activeIndex}
                onClick={() => goToSlide(index)}
                role="tab"
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
