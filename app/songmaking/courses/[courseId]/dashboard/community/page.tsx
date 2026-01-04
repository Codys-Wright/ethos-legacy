import { CommunityChannels } from "@/components/songmaking/community-channels";
import { CommunityFeed } from "@/components/songmaking/community-feed";

export default function CommunityPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <CommunityFeed />
      <CommunityChannels />
    </div>
  );
}