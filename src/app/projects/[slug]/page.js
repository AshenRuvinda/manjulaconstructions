import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project details could not be found.",
    });
  }

  return constructMetadata({
    title: `${project.title} | Manjula Constructions`,
    description: project.summary,
    image: project.coverImage,
    pathname: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient slug={resolvedParams.slug} fallbackProject={project} />;
}
