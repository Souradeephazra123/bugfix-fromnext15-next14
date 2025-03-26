import { notFound } from "next/navigation";
import ContentEditor from "@/components/admin/content/content-editor";
import { db } from "@/lib/admin/db";

interface ContentEditPageProps {
  params: {
    id: string;
  };
}

export default async function ContentEditPage({
  params,
}: ContentEditPageProps) {
  const { id } = params;

  // Special case for new content
  if (id === "new") {
    const categories = await db.getCategories();
    const tags = await db.getTags();

    return <ContentEditor categories={categories} tags={tags} />;
  }

  const content = await db.getContentById(id);
  if (!content) {
    notFound();
  }

  const categories = await db.getCategories();
  const tags = await db.getTags();

  return (
    <ContentEditor content={content} categories={categories} tags={tags} />
  );
}
