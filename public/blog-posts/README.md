# Blog Posts Directory

This directory contains HTML files for individual blog posts. Each blog post can have its own unique structure and sections without following a strict pattern.

## How to Add a New Blog Post

1. **Create an HTML file** in this directory with the filename matching the blog ID (e.g., `my-new-blog.html`)

2. **Add the blog metadata** to `/src/pages/Blogs.tsx` in the `blogs` array:
   ```typescript
   {
     id: "my-new-blog",
     title: "Your Blog Title",
     excerpt: "Short description...",
     readTime: "5 min read",
     tag: "Category",
     date: "Jan 2026",
   }
   ```

3. **Write your HTML content** using the following structure:
   - Use semantic HTML elements (`<section>`, `<h2>`, `<p>`, `<ul>`, etc.)
   - Apply Tailwind CSS classes for styling
   - The content will automatically inherit the blog page styling

## Styling Guidelines

The blog content container uses Tailwind Typography plugin with custom styling:
- Headings use the display font (Syne)
- Paragraphs use muted foreground color
- Links are styled with underline
- Code blocks have muted background
- Images are rounded with borders

## Example HTML Structure

```html
<p class="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
  Introduction paragraph...
</p>

<section class="mb-8">
  <h2>Section Heading</h2>
  <div class="space-y-4">
    <p>Paragraph content...</p>
    <ul class="list-disc list-inside space-y-2 ml-4">
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </div>
</section>
```

## Available Classes

You can use any Tailwind CSS classes, but the following are recommended:
- `mb-8` for section spacing
- `space-y-4` for vertical spacing within sections
- `text-muted-foreground` for body text
- `text-foreground` for headings and emphasis
- `leading-relaxed` for comfortable line height
