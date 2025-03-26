import type { SEOAnalysis, SEOSuggestion } from "./types";

export function analyzeSEO(
  content: string,
  title: string,
  metaDescription: string,
  keywords: string[],
): SEOAnalysis {
  const suggestions: SEOSuggestion[] = [];
  let score = 0;
  let readabilityScore = 0;
  const keywordDensity: Record<string, number> = {};

  // Check title length
  if (title.length < 30) {
    suggestions.push({
      type: "warning",
      message: "Title is too short. Aim for 50-60 characters.",
      context: "title",
    });
  } else if (title.length > 60) {
    suggestions.push({
      type: "warning",
      message: "Title is too long. Keep it under 60 characters.",
      context: "title",
    });
  } else {
    score += 10;
    suggestions.push({
      type: "success",
      message: "Title length is optimal.",
      context: "title",
    });
  }

  // Check meta description
  if (metaDescription.length < 120) {
    suggestions.push({
      type: "warning",
      message: "Meta description is too short. Aim for 150-160 characters.",
      context: "metaDescription",
    });
  } else if (metaDescription.length > 160) {
    suggestions.push({
      type: "warning",
      message: "Meta description is too long. Keep it under 160 characters.",
      context: "metaDescription",
    });
  } else {
    score += 10;
    suggestions.push({
      type: "success",
      message: "Meta description length is optimal.",
      context: "metaDescription",
    });
  }

  // Check content length
  const contentText = content.replace(/<[^>]*>/g, "");
  const wordCount = contentText.split(/\s+/).length;

  if (wordCount < 300) {
    suggestions.push({
      type: "warning",
      message: "Content is too short. Aim for at least 300 words.",
      context: "content",
    });
  } else {
    score += 10;
    suggestions.push({
      type: "success",
      message: "Content length is good.",
      context: "content",
    });
  }

  // Check keyword usage
  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    const matches = contentText.match(regex) || [];
    const density = (matches.length / wordCount) * 100;
    keywordDensity[keyword] = density;

    if (density < 0.5) {
      suggestions.push({
        type: "warning",
        message: `Keyword "${keyword}" density is too low (${density.toFixed(2)}%). Aim for 1-2%.`,
        context: "keywords",
      });
    } else if (density > 3) {
      suggestions.push({
        type: "warning",
        message: `Keyword "${keyword}" density is too high (${density.toFixed(2)}%). Keep it under 3%.`,
        context: "keywords",
      });
    } else {
      score += 5;
      suggestions.push({
        type: "success",
        message: `Keyword "${keyword}" density is optimal (${density.toFixed(2)}%).`,
        context: "keywords",
      });
    }

    // Check if keyword is in title
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      score += 5;
      suggestions.push({
        type: "success",
        message: `Keyword "${keyword}" is present in the title.`,
        context: "title",
      });
    } else {
      suggestions.push({
        type: "warning",
        message: `Consider adding keyword "${keyword}" to the title.`,
        context: "title",
      });
    }

    // Check if keyword is in meta description
    if (metaDescription.toLowerCase().includes(keyword.toLowerCase())) {
      score += 5;
      suggestions.push({
        type: "success",
        message: `Keyword "${keyword}" is present in the meta description.`,
        context: "metaDescription",
      });
    } else {
      suggestions.push({
        type: "warning",
        message: `Consider adding keyword "${keyword}" to the meta description.`,
        context: "metaDescription",
      });
    }
  });

  // Check for headings
  const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
  const h2Count = (content.match(/<h2[^>]*>/g) || []).length;
  const h3Count = (content.match(/<h3[^>]*>/g) || []).length;

  if (h1Count === 0) {
    suggestions.push({
      type: "warning",
      message: "No H1 heading found. Consider adding one.",
      context: "content",
    });
  } else if (h1Count > 1) {
    suggestions.push({
      type: "warning",
      message: "Multiple H1 headings found. Use only one H1 per page.",
      context: "content",
    });
  } else {
    score += 10;
    suggestions.push({
      type: "success",
      message: "H1 heading usage is optimal.",
      context: "content",
    });
  }

  if (h2Count === 0) {
    suggestions.push({
      type: "warning",
      message:
        "No H2 headings found. Consider adding some for better structure.",
      context: "content",
    });
  } else {
    score += 5;
    suggestions.push({
      type: "success",
      message: "H2 headings are present.",
      context: "content",
    });
  }

  // Calculate readability (simplified Flesch-Kincaid)
  const sentences = contentText.split(/[.!?]+/).length;
  const avgWordsPerSentence = wordCount / sentences;

  if (avgWordsPerSentence > 20) {
    readabilityScore = 50;
    suggestions.push({
      type: "warning",
      message:
        "Sentences are too long. Aim for an average of 15-20 words per sentence.",
      context: "readability",
    });
  } else {
    readabilityScore = 80;
    suggestions.push({
      type: "success",
      message: "Sentence length is good for readability.",
      context: "readability",
    });
  }

  // Normalize scores
  score = Math.min(100, score);
  readabilityScore = Math.min(100, readabilityScore);

  return {
    score,
    readabilityScore,
    keywordDensity,
    suggestions,
  };
}
