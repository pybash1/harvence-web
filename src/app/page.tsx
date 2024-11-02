import Link from "next/link";
import { CursorTrailer } from "~/components/cursor";
import { env } from "~/env";

export default function HomePage() {
  return (
    <main className="bg-primary relative flex min-h-screen flex-col items-center py-4">
      <CursorTrailer />
      <div className="w-fit rounded-full bg-black px-4 py-1 text-4xl font-medium uppercase text-white">
        Harvence
      </div>
      <div className="flex grow flex-col items-center justify-center gap-10 text-center text-white">
        <div
          className="cursor-default text-5xl font-bold md:text-6xl lg:text-8xl"
          data-hover-text="since 2024"
        >
          it&apos;s about time you
          <br />
          start living longer.
        </div>
        <Link
          href={env.NEXT_PUBLIC_APK_URL}
          download="harvence.apk"
          className="rounded-full bg-black px-6 py-2 text-3xl outline-none transition duration-700 ease-in-out hover:scale-150 hover:bg-yellow-400 hover:text-black"
        >
          Download
        </Link>
      </div>
      <div className="group absolute left-4 top-4 hidden flex-col gap-1 lg:flex [&>*]:overflow-hidden [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out">
        <Link
          href={env.NEXT_PUBLIC_APK_URL}
          download="harvence.apk"
          className="h-10 w-10 min-w-10 max-w-fit rounded-full bg-black px-4 py-2 text-white after:content-[''] hover:bg-red-400 hover:text-black group-hover:w-full group-hover:after:content-['download']"
        ></Link>
        <Link
          href={env.NEXT_PUBLIC_GITHUB_URL}
          className="h-10 w-10 min-w-10 max-w-fit rounded-full bg-black px-4 py-2 text-white after:content-[''] hover:bg-yellow-400 hover:text-black group-hover:w-full group-hover:after:content-['open_source']"
        ></Link>
        <div className="py-1" />
        <Link
          href="https://openfoodfacts.org"
          className="h-10 w-10 min-w-10 max-w-fit rounded-full bg-red-400 px-4 py-2 after:content-[''] hover:bg-black hover:text-white group-hover:w-full group-hover:after:content-['data_source']"
        ></Link>
        <Link
          href={env.NEXT_PUBLIC_CONTACT_URL}
          className="h-10 w-10 min-w-10 max-w-fit rounded-full bg-yellow-400 px-4 py-2 after:content-[''] hover:bg-black hover:text-white group-hover:w-full group-hover:after:content-['contact']"
        ></Link>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center gap-2 lg:hidden [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out">
        <Link
          href={env.NEXT_PUBLIC_GITHUB_URL}
          className="h-10 rounded-full bg-black px-4 py-2 text-white hover:bg-yellow-400 hover:text-black"
        >
          open source
        </Link>
        <div className="px-1" />
        <Link
          href="https://openfoodfacts.org"
          className="h-10 rounded-full bg-red-400 px-4 py-2 hover:bg-black hover:text-white"
        >
          data source
        </Link>
        <Link
          href={env.NEXT_PUBLIC_CONTACT_URL}
          className="h-10 rounded-full bg-yellow-400 px-4 py-2 hover:bg-black hover:text-white"
        >
          contact
        </Link>
      </div>
    </main>
  );
}
