import HomeLayout from "@/components/Layout/HomeLayout.tsx";
import KeySelector from "@/islands/KeySelector.tsx";
import RegionVisualizer from "@/islands/RegionVisualizer.tsx";
import GenerateButton from "@/islands/GenerateButton.tsx";

export default function Home() {
  return (
    <HomeLayout>
      <div className="grid md:grid-cols-2 md:gap-x-8">
        <div className="flex flex-col space-y-4">
          <RegionVisualizer />
          <GenerateButton />
        </div>
        <KeySelector />
      </div>
    </HomeLayout>
  );
}
