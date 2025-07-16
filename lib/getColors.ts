export async function getColors() {
  const res = await fetch(`http://localhost:9000/api/variants/colors`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const colors = await res.json();

  return colors;
}
