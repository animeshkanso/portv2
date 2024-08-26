// app/letters/[slug]/page.js
export async function generateStaticParams() {
  // Fetch the list of slugs from your data source
  const slugs = await fetch('https://api.example.com/letters')
    .then((res) => res.json())
    .then((data) => data.map((item) => ({ slug: item.slug })));

  return slugs.map((slug) => ({
    params: { slug: slug.slug },
  }));
}

export default function LetterPage({ params }) {
  const { slug } = params;

  // Your component logic here
  return <div>Letter with slug: {slug}</div>;
}
