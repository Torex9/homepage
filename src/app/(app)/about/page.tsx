"use client";
import Button from "../_components/Button";
import Container from "../_components/Container";
import LinkedImage from "../_components/LinkedImage";
import { useState, useEffect } from "react";
// import { caseStudies } from "@/data/CaseStudies";
import Link from "next/link";
import axios from "axios";

export interface AboutProps {
  title?: string;
  intro?: string;
}

export default function About({ title, intro }: AboutProps) {
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    const getCaseData = async () => {
      const caseData = await axios(
        "http://localhost:3000/api/case-studies?limit=10"
      );
      const pageData = caseData.data;
      const mainData = pageData.docs;

      setCaseStudies(mainData);
    };

    getCaseData();
    // // Fetch data from PayloadCMS API
    // fetch("http://localhost:3000/api/case-studies?limit=10")
    //   .then((response) => {
    //     // Log the entire response object
    //     console.log("Response:", response);
    //     // Parse the response as JSON
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Log the parsed JSON data
    //     console.log("Parsed Data:", data);
    //   })
    //   .catch((error) => console.error("Error fetching case studies:", error));
  }, []);

  useEffect(() => {
    // Log the new state whenever caseStudies changes
    console.log("New caseStudies state:", caseStudies);
  }, [caseStudies]);

  return (
    <Container className="flex flex-col items-start gap-9">
      {(title || intro) && (
        <div className="flex max-w-[45rem] flex-col gap-3">
          <h2 className="font-bravo text-3xl !leading-[1.2] md:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-bravo-dark">{intro}</p>
        </div>
      )}
      <div className="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-3">
        {caseStudies.slice(0, 6).map((item, i) => (
          <LinkedImage item={item} key={i} />
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Link className="self-end" href="/work">
          <Button className="border-alpha-dark text-alpha-dark">
            Our work
          </Button>
        </Link>
      </div>
    </Container>
  );
}
