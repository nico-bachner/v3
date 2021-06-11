# Architecture

Here's the base structure of the project. Some parts are not especially interesting, so this guide focuses on those that are.

```
v3/
├── components/
├── lib/
├── pages/
├── styles/
├── public/
├── content/
├── global.d.ts
├── next-env.d.ts
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
├── next.config.js
├── package.json
├── ARCHITECTURE.md
├── CHANGELOG.md
├── README.md
└── LICENSE
```

## Components

The `components/` directory contains custom React components that can be used throughout the project.

## Content

The content directory contains 3 subdirectories. `projects/` and `articles/` both contain `mdx` files, one for each project/article.

```
content/
├── i18n/
├── projects/
└── articles/
```

### Internationalisation

The `i18n/` directory contains a file for each supported language. They are exported by `index.ts` and then consumed by a custom React hook (`useI18n`).

### Projects & Articles

These directories contain the articles I have written, as well as the descriptions of projects I have taken part in. These are stored in MDX form, which can be seen as Markdown on steroids. With MDX, it is possible to use React components inside a Markdown file.

## Library

The `lib/` folder, short for library, contains custom logic that does not fit the definition of either React hook or React component.

```
lib/
├── hooks/
├── github.ts
├── mdx.ts
├── projects.ts
└── articles.ts
```

The most important file in here is the `mdx.ts` file, which contains the bulk of the logic for fetching `mdx` files at build time. `github.ts` contains some important logic as well, such as fetching a list of repositories and filtering them by popularity.

`projects.ts` and `articles.ts` both contain logic to fetch the articles and project descriptions from the `content/` directory mentioned above.

### Hooks

The `hooks/` folder contains [custom React hooks](https://reactjs.org/docs/hooks-custom.html), such as the aforementioned `i18n` hook.

## Pages

The `pages/` directory contains the heart of the project. In here, every file will become a standalone page when deploying the project, unless the page is prefixed by `_`.

```sh
pages
├── _app.tsx
├── index.tsx
├── api/
├── 404.mdx
├── projects/
├── articles/
└── uses.mdx
```

### Homepage

`index.tsx` is the base path of the site.

### API

All files in `api/` become api endpoints, and are deployed in the form of serverless functions.

Currently, this project doesn't do much with them.

### Projects and Articles

Both `projects/` and `articles/` are built in pretty much the same way. Both contain a file `[slug].tsx` and a file `index.tsx`.

```sh
projects
├── [slug].tsx
└── index.tsx
```

`[slug].tsx` pulls the `mdx` files from `content/` in and renders each as its own page at build time.

`index.tsx` provides an overview of all the files in `content/` by mapping each to a preview component.

### Other

In addition to the files just mentioned, there are also free-floating `mdx` files. These are pages that don't need any custom logic, and they are rendered just as a normal page would be.

## Styles

The `styles/` folder contains all the global styles of the project, as well as the styling that can't be directly achieved with Tailwind. They are currently divided up according to their role, since this is the best practice when working with Tailwind.

## Public

The `public/` directory contains all the static files to be served to the client. The files in `public/` can be referenced from `pages/` or from any of the components. It is useful for images, fonts, icons, etc.

## Tailwind Configuration

`tailwind.config.js` contains the tailwind configurations for the project. The most important part of it is the definition of the design system.

## Next.js Configuration

`next.config.js` contains custom configurations for Next.js, such as telling Next which languages are supported. This is also where the [domain-based routing](https://nextjs.org/docs/advanced-features/i18n-routing#domain-routing) is configured.

## Project Configuration

`package.json` is the main configuration file of the project. It contains a list of all the dependencies used by the project, as well as custom scripts such as `format`, which formats all files in the project.

## Changelog

`CHANGELOG.md` lists all the changes to the project since the initial setup.

## ReadMe

`README.md` is a standard file containing a high-level overview of the context and purpose of the project.

## License

`LICENSE` contains the Open Source licence of this project. There is no need to do anything with it.
