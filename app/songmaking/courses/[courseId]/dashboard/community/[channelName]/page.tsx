import { ChannelFeed } from "@/components/songmaking/channel-feed";
import { ChannelHeader } from "@/components/songmaking/channel-header";

interface ChannelPageProps {
  params: {
    channelName: string;
  };
}

export default function ChannelPage({ params }: ChannelPageProps) {
  return (
    <div className="space-y-6">
      <ChannelHeader channelName={params.channelName} />
      <ChannelFeed channelName={params.channelName} />
    </div>
  );
}