# Architecture

Here's the base structure of the project. Some parts are not especially interesting, so this focuses on those that are.

```sh
.
├── ARCHITECTURE.md
├── CHANGELOG.md
├── LICENSE
├── README.md
├── components/
├── content/
├── hooks/
├── lib/
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages/
├── pnpm-lock.yaml
├── postcss.config.js
├── public/
├── styles/
├── tailwind.config.js
└── tsconfig.json
```

## Changelog

`CHANGELOG.md` lists all the changes to the project since the initial setup.

## License

`LICENSE` contains the Open Source licence of this project. There is no need to do anything with it.

## Readme

`README.md` is a standard file containing a high-level overview of the context and purpose of the project.

## Components

The `components/` directory contains custom react components that can be used throughout the project.

## Content

The content directory contains 3 subdirectories. `projects/` and `articles/` both contain `mdx` files, one for each project/article.

```sh
content
├── i18n/
├── projects/
└── articles/
```

### i18n

The `i18n/` directory contains a file for each supported language. They are exported by `index.ts` and consumed by the `i18n` custom react hook.

## Hooks

The `hooks/` folder contains custom react hooks, such as the `i18n` hook mentioned before.

## Library

The `lib/` folder, short for library, contains custom logic that does not fit the definition of either react hook or react component.

The most important file in here is the `mdx.ts` file, which contains the bulk of the logic for fetching `mdx` files at build time.

## Next.js Configuration

`next.config.js` contains custom configurations for Next.js, such as telling Next which languages are supported.

## Project Configuration

`package.json` is the main configuration file of the project. It contains a list of all the dependencies used by the project, as well as custom scripts such as `format`, which formats all files in the project.

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

## Public

The files in `public/` can be referenced from `pages/` or from any of the components. It is useful mostly for fonts, images, etc.

## Styles

The `styles/` folder contains all the styling that can't be achieved with Tailwind.

## Tailwind Configuration

`tailwind.config.js` contains the tailwind configurations for the project. The most important part of it is the definition of the design system.
