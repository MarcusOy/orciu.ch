# orciu.ch - Personal quick links

This was a quick two hour project inspired by shortlinks such as amzn.com or goo.gl. This is not a URL shortener, but rather a directory. Pass in a key, and get a redirection to another page.

## Stack

I used [Next.js](https://nextjs.org/) to be able to host for free on [Vercel](https://vercel.com) with no extra hassle. For storage of the redirection urls, I used [Supabase](https://supabase.io/), a free, open-sourced Firebase alternative. Within the code, you can see an api endpoint and api key, but no worries, this key grants 'anon' access only (read only privilages).

## Examples

-   [orciu.ch](orciu.ch) - Redirects to my landing page of m.orciuch.org
-   [orciu.ch/g](orciu.ch/g) - Redirects to my Github profile
-   [orciu.ch/l](orciu.ch/l) - Redirects to my Linkedin profile
