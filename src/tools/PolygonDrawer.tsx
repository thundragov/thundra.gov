import DrawingMap from "../components/DrawingMap";

export default function DrawingPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Map Polygon Drawing Tool</h2>
      <p className="mb-4">Draw shapes directly on the map and export their coordinates.</p>
      <DrawingMap />
    </section>
  );
}