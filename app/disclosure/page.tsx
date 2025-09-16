import React from "react";

export default function DisclosurePage() {
  return (
    <main className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Affiliate Disclosure</h1>
      <p className="mt-4 text-black/80 dark:text-white/80">
        This website contains affiliate links. If you purchase a product through a link on this site, we may earn a commission at no additional cost to you. We only recommend products we believe can genuinely help our audience.
      </p>
      <p className="mt-4 text-black/80 dark:text-white/80">
        We participate in the ClickBank affiliate program for Athenero. Commissions are handled by ClickBank. Athenero offers a 30-day money-back guarantee managed by ClickBank support.
      </p>
      <p className="mt-4 text-black/80 dark:text-white/80">
        For transparency, our current promotional link is: <a className="underline" href="https://athenero.com/?hopId=b54f2fc5-50dc-45b6-a532-fdc49bad6425">https://athenero.com/?hopId=b54f2fc5-50dc-45b6-a532-fdc49bad6425</a>.
      </p>
    </main>
  );
}
