import { Metadata } from "next";
import App from "@/components/pages/app";
import { APP_URL } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farcaster Mini App by Anass",
  description: "A simple demo for the Farcaster mini app competition",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        👋 Welcome to Anass’s Mini App
      </h1>
      <p className="text-lg text-center mb-4">
        This app was built for the <strong>Farcaster Mini App Hackathon</strong> using the Monad template.
      </p>
      <p className="text-md text-gray-500 text-center">
        Try it out on Warpcast or share it with your followers!
      </p>
    </main>
  );
}

const frame = {
  version: "next",
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: "Launch Template",
    action: {
      type: "launch_frame",
      name: "Monad Farcaster MiniApp Template",
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Monad Farcaster MiniApp Template",
    openGraph: {
      title: "Monad Farcaster MiniApp Template",
      description: "A template for building mini-apps on Farcaster and Monad",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
