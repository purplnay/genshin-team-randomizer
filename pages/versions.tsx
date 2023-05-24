import Head from "next/head";
import Link from "next/link";

export default function Versions() {
  return (
    <div className="text-center">
      <Head>
        <title>Version | Genshin Team Randomizer</title>
        <meta
          name="description"
          content="History of the website's versions based on Genshin Impact's patches."
        />
        <meta
          property="og:title"
          content="Version of Genshin Team Randomizer"
        />
        <meta
          property="og:site_name"
          content="History of the website's versions based on Genshin Impact's patches."
        />
        <meta
          property="og:url"
          content="https://genshin-team-randomizer.vercel.app"
        />
        <meta
          property="og:description"
          content="A Genshin tool to generate random teams."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://genshin-team-randomizer.vercel.app/og-banner.png"
        />
      </Head>

      <div className="mt-4">
        <Link className="rounded bg-purple-400 px-4 py-2 text-white" href="/">
          Go back
        </Link>
      </div>

      <h1 className="my-8 text-3xl">Versions history</h1>

      <div className="space-y-6">
        <section className="mx-auto w-72 text-left md:w-96">
          <h2 className="mb-2 text-lg font-medium">Patch 3.7</h2>

          <ul className="list-disc text-sm text-zinc-300">
            <li>Added Kirara (Phase 1)</li>
          </ul>
        </section>

        <section className="mx-auto w-72 text-left md:w-96">
          <h2 className="mb-2 text-lg font-medium">Patch 3.6</h2>

          <ul className="list-disc text-sm text-zinc-300">
            <li>Added Baizhu (Phase 2)</li>
            <li>Added Kaveh (Phase 2)</li>
          </ul>
        </section>

        <section className="mx-auto w-72 text-left md:w-96">
          <h2 className="mb-2 text-lg font-medium">Patch 3.5</h2>

          <ul className="list-disc text-sm text-zinc-300">
            <li>Added Mika (Phase 2)</li>
            <li>Added Dehya (Phase 1)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
