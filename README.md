# Welcome to my blog!

![Written by: humans](https://img.shields.io/badge/written_by-humans-limegreen)

There's a lot of reasons to write a blog, or make your own. This is just a place where I dump some of my more complicated thoughts, that couldn't have been posted as a toot on Mastodon.

There really is nothing intresting this repository, so why not check out the [actual site](https://thatxliner.github.io/blog/)?

I occasionally post

This repository is licensed under [MIT](../LICENSE) (c) 2020-2023 Bryan Hu (ThatXliner)

## Comments and traffic

Post comments and reactions use [giscus](https://giscus.app), backed by this repository's Announcements discussions category. Install the giscus GitHub app for `ThatXliner/blog` to enable posting. Readers sign in with GitHub; moderation happens in Discussions.

Traffic is tracked by the existing self-hosted Umami instance on `big-mac`. Open [the dashboard](https://analytics.bryanhu.com) and select **ThatXliner's Blog** for visitors, pageviews, referrers, and individual post traffic. The tracker only runs on `thatxliner.github.io`, excluding local previews. The previous Umami Cloud data remains in the old dashboard; new traffic goes to this instance.

The service lives at `~/Developer/umami-selfhost` on `big-mac`, with PostgreSQL in its Docker volume and a Cloudflare tunnel serving HTTPS. Existing admin credentials are stored in `admin-password` there. Back up the database volume to preserve traffic history.

Post timestamps render in America/Los_Angeles during the build and switch to the reader's timezone in the browser. Use explicit offsets or `Z` for timestamps. Calendar-only posts use `dateOnly: true` and keep their original day without a time. Run `pnpm test` for timezone regression checks.
